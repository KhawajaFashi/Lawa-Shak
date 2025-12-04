export default function Story() {
    return (
        <section
            id="about"
            className="relative"
        >
            <div className="flex flex-col md:flex-row gap-16 items-start min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1a0f07]">

                {/* LEFT SIDE – TEXT */}
                <div className="w-full pt-24 pb-12 pl-[10%] h-full">
                    <h1 className="text-orange-500 text-5xl md:text-6xl font-bold tracking-wide mb-6 drop-shadow-[0_0_12px_rgba(255,129,0,0.4)]">
                        ABOUT US
                    </h1>

                    {/* SECTION TITLE */}
                    <h2 className="text-orange-500 text-2xl font-semibold mb-4 tracking-wider">
                        OUR STORY
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-6 text-md">
                        At <span className="text-orange-500 font-semibold">Hot Slice</span>, we
                        believe exceptional desserts are more than treats—they are moments of
                        indulgence. With a devotion to culinary craftsmanship, we create
                        premium dessert experiences that delight the senses and spark the soul.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-12 text-md">
                        Our philosophy blends{" "}
                        <span className="text-orange-500 font-semibold">
                            tradition and innovation
                        </span>
                        , infusing time-honored techniques with modern artistry to craft
                        desserts that are both familiar and extraordinary.
                    </p>

                    {/* SUBSECTION */}
                    <h3 className="text-orange-500 text-xl font-semibold mb-4 tracking-wider flex items-center gap-2">
                        THE Lava SHAK STORY
                        <span className="text-orange-500 opacity-80">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6H7v2h4v6h2v-6h4v-2h-4V7z" />
                            </svg>
                        </span>
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6 text-md">
                        Lava Shak is our signature creation—a dessert born from years of
                        refinement. Its name reflects the layered complexity and bold richness
                        that define this extraordinary experience.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-10 text-md">
                        Our commitment to{" "}
                        <span className="text-orange-500 font-semibold">
                            quality, authenticity, and innovation
                        </span>{" "}
                        elevates every bite. We don’t just make desserts—we craft unforgettable
                        moments.
                    </p>

                    <div className="mt-6">
                        <span className="text-orange-500 text-4xl md:text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,129,0,0.6)]">
                            Since 2014
                        </span>
                    </div>
                </div>

                {/* RIGHT SIDE – VISUAL ELEMENTS */}
                <div className="hidden md:flex justify-center items-center h-full w-full relative ">
                    <div className="absolute top-10 right-10 opacity-30">
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                            <circle cx="90" cy="90" r="80" stroke="#ff8a00" strokeWidth="1.8" />
                        </svg>
                    </div>

                    <div className="absolute top-[70%] left-20 opacity-20">
                        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                            <circle cx="70" cy="70" r="60" stroke="#ff8a00" strokeWidth="1.6" />
                        </svg>
                    </div>

                    {/* Decorative circles */}

                    {/* Center icon block */}
                    <div className="flex flex-col items-center justify-center gap-4 z-10 h-screen">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="#ff8a00">
                            <path d="M21 10V8a2 2 0 0 0-2-2h-1V4h-2v2h-2V4h-2v2H8V4H6v2H5a2 2 0 0 0-2 2v2H21zm-9 7c-4.337 0-8-3.663-8-8H3c0 5.514 4.486 10 10 10s10-4.486 10-10h-1c0 4.337-3.663 8-8 8z" />
                        </svg>

                        <div className="text-center">
                            <h4 className="text-orange-500 text-2xl font-semibold tracking-wide">
                                Lava SHAK
                            </h4>
                            <p className="text-gray-400 text-sm tracking-wide mt-1">
                                Premium Dessert Experience
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
