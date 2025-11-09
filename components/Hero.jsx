import Image from "next/image";

export default function HeroB({ onOrderClick }) {
    return (
        <section className="relative min-h-screen flex items-center px-[10%] py-20">
            {/* Left Column Text */}
            <div className="flex-1 max-w-xl z-10">
                <h1 className="font-bold leading-[0.9] mb-8">
                    <span className="block text-white text-6xl md:text-7xl tracking-tight">
                        LAWA
                    </span>
                    <span className="block text-orange-500 text-6xl md:text-7xl tracking-tight drop-shadow-[0_0_20px_rgba(255,128,0,0.4)]">
                        SHAK
                    </span>
                </h1>

                <p className="text-orange-500 text-lg md:text-xl tracking-[0.15em] font-medium mb-6">
                    MOLTEN CHOCOLATE EXPERIENCE
                </p>

                <p className="text-gray-300 text-base md:text-md w-[80%] leading-relaxed mb-10">
                    Experience the perfect balance of rich chocolate flavor and molten
                    decadence. Crafted with precision to deliver a signature dessert
                    designed to delight every chocolate lover.
                </p>

                <button
                    onClick={onOrderClick}
                    className="bg-orange-500 text-white px-10 py-4 rounded-md text-sm uppercase tracking-widest font-semibold shadow-[0_5px_25px_rgba(255,129,0,0.5)] hover:shadow-[0_6px_40px_rgba(255,129,0,0.8)] hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                    ORDER NOW
                </button>

                <p className="text-xs text-gray-500 tracking-wider absolute bottom-12">
                    PRESENTED BY <span className="text-orange-500 font-semibold">HOT SLICE</span>
                </p>
            </div>

            {/* Right Column Image */}
            <div className="flex-1 relative">
                <div className="relative w-[90%] max-w-[550px] ml-auto">
                    <Image
                        src="/cake.png"
                        alt="Molten chocolate dessert"
                        width={600}
                        height={600}
                        className="rounded-xl object-contain drop-shadow-[0_0_25px_rgba(255,128,0,0.4)]"
                    />

                    {/* Optional orange glow behind dessert */}
                    <div className="absolute inset-0 bg-orange-500/10 blur-3xl -z-10"></div>
                </div>
            </div>

        </section>
    );
}
