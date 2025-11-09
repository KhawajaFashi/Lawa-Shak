export default function Story() {
    return (
        <section id="about" className="py-20 relative pl-[8%]">
            <div className="container mx-auto px-0 md:px-8 flex flex-col md:flex-row gap-0 md:gap-0">
                {/* Left column: text */}
                <div className="w-full md:w-1/2 px-8 md:px-0">
                    <h1 className="text-orange-500 text-5xl font-bold mb-2 tracking-wide" style={{ textShadow: '0 0 16px #ff8a00, 0 0 2px #ff8a00' }}>ABOUT US</h1>
                    <h2 className="text-orange-500 text-2xl font-bold mb-6 mt-2">OUR STORY</h2>
                    <p className="mb-8 text-gray-100 text-base">
                        At <span className="text-orange-500 font-semibold">Hot Slice</span>, we believe that exceptional desserts are more than just treats—they're
                        moments of pure indulgence and joy. Founded with a passion for culinary excellence, our
                        brand has been dedicated to crafting premium, innovative dessert experiences that delight
                        the senses and inspire the soul.
                    </p>
                    <p className="mb-12 text-gray-100 text-base">
                        Our philosophy centers on the perfect balance of <span className="text-orange-500 font-semibold">tradition and innovation</span>. We honor time-
                        tested recipes while embracing modern techniques and premium ingredients to create
                        desserts that are both familiar and extraordinarily unique.
                    </p>
                    <h3 className="text-xl text-orange-500 font-bold mb-4 mt-8 flex items-center gap-2">
                        THE LAWA SHAK STORY
                        <span className="text-orange-500">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6H7v2h4v6h2v-6h4v-2h-4V7z" />
                            </svg>
                        </span>
                    </h3>
                    <p className="mb-6 text-gray-100 text-base">
                        Lawa Shak represents our flagship achievement—a revolutionary dessert experience born
                        from years of experimentation and refinement. The name itself carries profound meaning,
                        reflecting the essence of layered complexity and rich flavors that define this extraordinary
                        creation.
                    </p>
                    <p className="mb-8 text-gray-100 text-base">
                        Our commitment to <span className="text-orange-500 font-semibold">quality, authenticity, and innovation</span> shines through in every aspect of
                        Lawa Shak. We don't just make desserts—we craft experiences that transform ordinary
                        moments into cherished memories.
                    </p>
                    <div className="mt-8">
                        <span className="text-4xl text-orange-500 font-bold tracking-wide" style={{ textShadow: '0 0 8px #ff8a00' }}>Since 2014</span>
                    </div>
                </div>
                {/* Right column: icon and circles */}
                <div className="hidden md:flex w-1/2 items-center justify-center relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="60" cy="60" r="50" stroke="#ff8a00" strokeWidth="2" opacity="0.2" />
                            <circle cx="90" cy="40" r="30" stroke="#ff8a00" strokeWidth="2" opacity="0.1" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="mb-4">
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="#ff8a00" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C7.03 2 3 6.03 3 11c0 3.87 2.69 7.16 6.44 7.86V21h5.12v-2.14C18.31 18.16 21 14.87 21 11c0-4.97-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1-7h2v2h-2v-2zm0-4h2v2h-2V7z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <span className="text-orange-500 text-xl font-bold">LAWA SHAK</span>
                            <div className="text-gray-400 text-sm">Premium Dessert Experience</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Decorative bottom circle */}
            <div className="absolute bottom-8 right-1/4 hidden md:block">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="#ff8a00" strokeWidth="2" opacity="0.08" />
                </svg>
            </div>
        </section>
    );
}