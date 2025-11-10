"use client";

import { useCallback } from "react";
import Image from "next/image";
import reviewsData from "@/review.json";

import useEmblaCarousel from "embla-carousel-react";

// COMPONENT IMPORT
import { FaStar } from "react-icons/fa";

function timeAgo(dateString) {
    const d = new Date(dateString);
    const diff = (Date.now() - d.getTime()) / 1000;
    if (diff < 60) return `${Math.floor(diff)}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
}


export default function Reviews() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    return (
        <section className="py-24 px-[8%] bg-[#0A0A0A]">
            <h2 className="text-4xl font-bold text-orange-500 mb-10">
                CUSTOMER REVIEWS
            </h2>

            <div className="relative">
                {/* OUTER CAROUSEL */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {reviewsData.map((review, index) => (
                            <div
                                key={review.id}
                                className="min-w-full lg:min-w-[50%] custom:min-w-[33%] flex justify-center px-2 overflow-hidden"
                            >
                                <ReviewCard review={review} delay={index * 0.1} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Carousel Controls */}
                <button
                    onClick={scrollPrev}
                    className="absolute -left-2.5 top-1/2 -translate-y-1/2  bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
                    aria-label="Previous review"
                >
                    &#8592;
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
                    aria-label="Next review"
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}

function ReviewCard({ review, delay }) {
    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <div
            className="bg-white/5 border w-96 border-white/10 rounded-xl p-6 flex flex-col items-center max-sm:w-full"
            style={{ animationDelay: `${delay}s` }}
        >
            {/* PROFILE */}
            {/* <div className="flex flex-col items-center gap-4 mb-4"> */}
            <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                    src={review.profilePhoto || "/assets/default.png"}
                    alt={review.name}
                    width={1925}
                    height={1925}
                    className="object-cover w-full h-full"
                />
                {/* </div> */}
                {/* COMMENT FIXED WRAPPING */}

            </div>
            <p className="text-gray-300 leading-relaxed mb-4 wrap-break-word text-center w-84 mt-8 max-sm:w-full">
                {review.comments}
            </p>

            {/* STARS */}
            <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                        key={i}
                        size={22}
                        className={
                            `${i < review.rating
                                ? "text-orange-500"
                                : "text-gray-600"}
                                mx-1
                            `
                        }
                    />
                ))}
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-white font-semibold text-xl">{review.name}</h1>
                <p className="text-sm text-gray-400">
                    {timeAgo(review.date)}
                </p>
            </div>

        </div>
    );
}
