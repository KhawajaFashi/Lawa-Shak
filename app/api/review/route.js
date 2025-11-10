import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
    const form = await req.formData();

    const name = form.get("name");
    const rating = form.get("rating");
    const comments = form.get("comments");

    const profilePhoto = form.get("profilePhoto");

    const uploadDir = path.join(process.cwd(), "public", "assets");
    await fs.mkdir(uploadDir, { recursive: true });

    let savedProfile = null;
    if (profilePhoto) {
        const buf = Buffer.from(await profilePhoto.arrayBuffer());
        const fileName = `profile-${Date.now()}-${profilePhoto.name}`;
        await fs.writeFile(path.join(uploadDir, fileName), buf);
        savedProfile = `/assets/${fileName}`;
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
