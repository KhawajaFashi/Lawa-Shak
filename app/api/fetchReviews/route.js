// /app/api/reviews/route.js (server-side)
import { fetchFromCloudinary } from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await fetchFromCloudinary("lava-shak/reviews/reviews.json");
        if (!data) return NextResponse.json([], { status: 200 });

        return NextResponse.json(JSON.parse(data));
    } catch (err) {
        console.error(err);
        return NextResponse.json([], { status: 500 });
    }
}
