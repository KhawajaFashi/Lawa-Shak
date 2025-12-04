import { NextResponse } from "next/server";
import { uploadToCloudinary, fetchFromCloudinary } from "@/lib/cloudinary";

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
            const result = await uploadToCloudinary(buf, 'lava-shak/reviews/photos');
            savedProfile = result.secure_url;
        } catch (error) {
            console.error('Error uploading profile photo:', error);
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

    // Step 1: Fetch existing reviews JSON from Cloudinary
    let existing = [];
    try {
        const jsonFile = await fetchFromCloudinary('lava-shak/reviews/reviews.json');
        if (jsonFile) {
            existing = JSON.parse(jsonFile);
        }
    } catch (error) {
        console.log('No existing reviews or failed to fetch, starting fresh.');
    }

    // Step 2: Add new review
    existing.push(review);

    // Step 3: Upload updated reviews JSON back to Cloudinary
    try {
        const buf = Buffer.from(JSON.stringify(existing, null, 2));
        await uploadToCloudinary(buf, 'lava-shak/reviews/reviews.json', { resource_type: 'raw', overwrite: true });
    } catch (error) {
        console.error('Error uploading reviews JSON:', error);
    }

    return NextResponse.json({ success: true, review });
}
