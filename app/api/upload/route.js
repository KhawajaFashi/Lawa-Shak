import { NextResponse } from 'next/server';
import { uploadToCloudinary } from '@/lib/cloudinary';

export const POST = async (req) => {
    const data = await req.formData();
    const file = data.get('transactionProof');

    if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    try {
        const buffer = Buffer.from(await file.arrayBuffer());
        const result = await uploadToCloudinary(buffer, 'lawa-shak/transactions');

        return NextResponse.json({ path: result.secure_url });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
};
