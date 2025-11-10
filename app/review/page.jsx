"use client";

import ReviewForm from '@/components/ReviewForm';

export default function ReviewPage() {
    return (
        <section className="py-24 px-[8%] min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-8">
                    <p className="text-gray-400">SHARE YOUR EXPERIENCE</p>
                    <h2 className="text-4xl text-orange-500">Leave a Review</h2>
                </div>
                <ReviewForm />
            </div>
        </section>
    )
}
