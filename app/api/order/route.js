import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { promises as fs } from 'fs'
import path from 'path'
import imageType from 'image-type'

const labelize = (key) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())

const formatValue = (v) => (typeof v === 'number' ? v.toFixed(2) : String(v || '-'))

export async function POST(req) {
    try {
        const formData = await req.formData()
        const orderData = JSON.parse(formData.get('orderData'))
        const userEmail = formData.get('userEmail')
        const transactionProofFile = formData.get('transactionProofFile')

        // ================================
        // SAVE TRANSACTION PROOF IMAGE
        // ================================
        if (transactionProofFile && transactionProofFile.size > 0) {
            const buffer = Buffer.from(await transactionProofFile.arrayBuffer())
            const ext = path.extname(transactionProofFile.name)
            const fileName = `proof-${Date.now()}-${Math.random().toString(36).substring(7)}${ext}`
            const assetsDir = path.join(process.cwd(), 'public', 'assets')
            await fs.mkdir(assetsDir, { recursive: true })
            const savedPath = path.join(assetsDir, fileName)
            await fs.writeFile(savedPath, buffer)
            orderData.transactionProof = `/assets/${fileName}` // public URL path
        }

        // ================================
        // CREATE PDF
        // ================================
        const pdf = await PDFDocument.create()
        let page = pdf.addPage([600, 900])
        const font = await pdf.embedFont(StandardFonts.Helvetica)
        const bold = await pdf.embedFont(StandardFonts.HelveticaBold)
        let y = 860

        page.drawText('Order Summary', { x: 50, y, size: 28, font: bold, color: rgb(0.2, 0.2, 0.2) })
        y -= 30
        page.drawLine({ start: { x: 50, y }, end: { x: 550, y }, thickness: 1, color: rgb(0.85, 0.85, 0.85) })
        y -= 40

        for (const [key, value] of Object.entries(orderData)) {
            if (key === 'transactionProof') continue

            const label = labelize(key)
            page.drawText(label, { x: 50, y, size: 14, font: bold, color: rgb(0, 0, 0) })
            page.drawText(formatValue(value), { x: 220, y, size: 14, font, color: rgb(0.1, 0.1, 0.1) })
            y -= 26

            if (['Address', 'City', 'Subtotal'].includes(label)) {
                page.drawLine({ start: { x: 50, y }, end: { x: 550, y }, thickness: 0.5, color: rgb(0.9, 0.9, 0.9) })
                y -= 20
            }
        }

        // ================================
        // EMBED TRANSACTION IMAGE
        // ================================
        if (orderData.transactionProof) {
            try {
                const imagePath = path.join(process.cwd(), 'public', orderData.transactionProof)
                const imageBuffer = await fs.readFile(imagePath)
                const type = await imageType(imageBuffer)
                if (!type) throw new Error('Uploaded file is not a valid image')
                console.log('Detected type:', type)
                console.log("Image Buffer:", imageBuffer);
                console.log("Image orderData.transactionProof:", orderData.transactionProof);
                let image
                if (type.ext === 'png') image = await pdf.embedPng(imageBuffer)
                else if (type.ext === 'jpg' || type.ext === 'jpeg') image = await pdf.embedJpg(imageBuffer)
                console.log("Image:", image);
                if (image) {
                    // Add new page if image doesn't fit
                    const imageHeight = 250
                    const imageWidth = 300
                    if (y - imageHeight < 50) {
                        page = pdf.addPage([600, 900])
                        y = 860
                    }

                    page.drawLine({ start: { x: 50, y }, end: { x: 550, y }, thickness: 0.5, color: rgb(0.9, 0.9, 0.9) })
                    y -= 30
                    page.drawText('Transaction Proof', { x: 50, y, size: 14, font: bold, color: rgb(0, 0, 0) })
                    y -= 30

                    page.drawImage(image, { x: 50, y: y - imageHeight, width: imageWidth, height: imageHeight })
                    y -= imageHeight + 20
                }
            } catch (e) {
                console.error('Error embedding transaction proof image:', e)
                page.drawText('Unable to embed transaction proof image', { x: 50, y, size: 12, font, color: rgb(0.5, 0.5, 0.5) })
            }
        }

        const pdfBytes = await pdf.save()

        // ================================
        // SEND EMAILS
        // ================================
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.OWNER_EMAIL, pass: process.env.OWNER_EMAIL_PASS },
        })

        const attachments = [{ filename: 'order-details.pdf', content: Buffer.from(pdfBytes), contentType: 'application/pdf' }]

        // Owner email
        await transporter.sendMail({
            from: process.env.OWNER_EMAIL,
            to: process.env.OWNER_EMAIL,
            subject: 'New Order Received',
            text: 'A new order has been placed. The attached PDF contains the order details and embedded transaction proof.',
            attachments,
        })

        // Customer email
        await transporter.sendMail({
            from: process.env.OWNER_EMAIL,
            to: userEmail,
            subject: 'Order Confirmation',
            text: 'Thank you for your order. Your complete order summary (with embedded transaction proof) is attached.',
            attachments,
        })

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ success: false, error: err.message }, { status: 500 })
    }
}
