// app/api/upload/route.js (Next.js 13+ App Router)
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    const data = await req.formData();
    const file = data.get('transactionProof');

    if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), 'public', 'assets', filename);

    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ path: `/assets/${filename}` });
};
