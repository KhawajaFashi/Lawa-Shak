import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

const labelize = (key) =>
    key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, c => c.toUpperCase())

const formatValue = v => {
    if (typeof v === 'number') return v.toFixed(2)
    return String(v || '-')
}

export async function POST(req) {
    try {
        const data = await req.json()
        const { orderData, userEmail } = data

        const pdf = await PDFDocument.create()
        const page = pdf.addPage([600, 760])
        const font = await pdf.embedFont(StandardFonts.Helvetica)
        const bold = await pdf.embedFont(StandardFonts.HelveticaBold)

        let y = 720

        page.drawText('Order Summary', {
            x: 50,
            y,
            size: 28,
            font: bold,
            color: rgb(0.2, 0.2, 0.2),
        })

        y -= 30

        // Header line
        page.drawLine({
            start: { x: 50, y },
            end: { x: 550, y },
            thickness: 1,
            color: rgb(0.85, 0.85, 0.85),
        })

        y -= 40

        for (const [key, value] of Object.entries(orderData)) {
            const label = labelize(key)

            page.drawText(label, {
                x: 50,
                y,
                size: 14,
                font: bold,
                color: rgb(0, 0, 0),
            })

            page.drawText(formatValue(value), {
                x: 220,
                y,
                size: 14,
                font,
                color: rgb(0.1, 0.1, 0.1),
            })

            y -= 26

            // Section dividers for readability
            if (label === 'Address' || label === 'City' || label === 'Subtotal') {
                page.drawLine({
                    start: { x: 50, y },
                    end: { x: 550, y },
                    thickness: 0.5,
                    color: rgb(0.9, 0.9, 0.9),
                })
                y -= 20
            }
        }

        const pdfBytes = await pdf.save()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.OWNER_EMAIL,
                pass: process.env.OWNER_EMAIL_PASS,
            },
        })

        await transporter.sendMail({
            from: process.env.OWNER_EMAIL,
            to: process.env.OWNER_EMAIL,
            subject: 'New Order Received',
            text: 'A new order has been placed. The attached PDF contains the order details.',
            attachments: [
                {
                    filename: 'order-details.pdf',
                    content: Buffer.from(pdfBytes),
                    contentType: 'application/pdf',
                },
            ],
        })

        await transporter.sendMail({
            from: process.env.OWNER_EMAIL,
            to: userEmail,
            subject: 'Order Confirmation and Summary',
            text: 'Your order has been received. The attached PDF contains your complete order summary for your records.',
            attachments: [
                {
                    filename: 'order-details.pdf',
                    content: Buffer.from(pdfBytes),
                    contentType: 'application/pdf',
                },
            ],
        })

        return NextResponse.json({ success: true })
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 })
    }
}
