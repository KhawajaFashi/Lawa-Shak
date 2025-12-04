import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { uploadToCloudinary } from "@/lib/cloudinary";

export async function POST(req) {
    const form = await req.formData();

    const name = form.get("name");
    const rating = form.get("rating");
    const comments = form.get("comments");

    const profilePhoto = form.get("profilePhoto");

    let savedProfile = null;
    if (profilePhoto) {
        try {
            const buf = Buffer.from(await profilePhoto.arrayBuffer());
            const result = await uploadToCloudinary(buf, 'lawa-shak/reviews');
            savedProfile = result.secure_url;
        } catch (error) {
            console.error('Error uploading profile photo:', error);
            // Continue without profile photo or handle error as needed
        }
    }

    const review = {
        id: Date.now(),
        name,
        rating,
        comments,
        profilePhoto: savedProfile,
        date: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), "review.json");

    let existing = [];
    try {
        const raw = await fs.readFile(filePath, "utf8");
        existing = JSON.parse(raw);
    } catch { }

    existing.push(review);

    await fs.writeFile(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({ success: true, review });
}
