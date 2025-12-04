"use client";
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function Hero() {
    const router = useRouter();
    const onOrderClick = () => router.push('/order');
    return (
        <section id="home" className="relative min-h-screen flex items-center px-[10%] lg:pl-[12%] xl:pl-[9%] py-20 max-md:flex-col">
            <div className="flex-1 relative md:hidden mx-auto">
                <div className="relative w-[90%] max-w-[550px] mx-auto mb-20">
                    <Image
                        src="/HeroImage.jpg"
                        alt="Molten chocolate dessert"
                        width={600}
                        height={600}
                        className="rounded-xl object-contain drop-shadow-[0_0_25px_rgba(255,128,0,0.4)]"
                    />
                    {/* Optional orange glow behind dessert */}
                    <div className="absolute inset-0 bg-orange-500/10 blur-3xl -z-10"></div>
                </div>
            </div>
            {/* Left Column Text */}
            <div className="flex-1 max-w-xl z-10 ">
                <h1 className="font-bold leading-[0.9] mb-8 max-md:text-center ">
                    <span className="max-xs:block text-white text-6xl md:text-7xl tracking-tight">
                        Lava
                    </span>
                    <span className="max-xs:block ml-3 md:block md:ml-0 text-orange-500 text-6xl md:text-7xl tracking-tight drop-shadow-[0_0_20px_rgba(255,128,0,0.4)]">
                        SHAK
                    </span>
                </h1>

                <p className="text-orange-500 text-lg md:text-xl tracking-[0.15em] font-medium mb-6 max-md:text-center">
                    MOLTEN CHOCOLATE EXPERIENCE
                </p>

                <p className="text-gray-300 text-base md:text-md w-[80%] leading-relaxed mb-10 max-md:text-center max-md:w-full">
                    Experience the perfect balance of rich chocolate flavor and molten
                    decadence. Crafted with precision to deliver a signature dessert
                    designed to delight every chocolate lover.
                </p>

                <button
                    onClick={onOrderClick}
                    className="bg-orange-500 text-white px-10 py-4 rounded-md text-sm uppercase tracking-widest font-semibold shadow-[0_5px_25px_rgba(255,129,0,0.5)] hover:shadow-[0_6px_40px_rgba(255,129,0,0.8)] hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 max-md:mx-auto max-md:flex"
                >
                    ORDER NOW
                </button>

                <p className="text-xs text-gray-500 tracking-wider absolute bottom-12 max-md:hidden">
                    PRESENTED BY <span className="text-orange-500 font-semibold">HOT SLICE</span>
                </p>
            </div>

            {/* Right Column Image */}
            <div className="flex-1 relative max-md:hidden">
                <div className="relative w-[90%] max-w-[550px] ml-auto">
                    <Image
                        src="/HeroImage.jpg"
                        alt="Molten chocolate dessert"
                        width={600}
                        height={600}
                        className="rounded-xl w-190 h-110 object-contain drop-shadow-[0_0_25px_rgba(255,128,0,0.4)]"
                    />

                    {/* Optional orange glow behind dessert */}
                    <div className="absolute inset-0 bg-orange-500/10 blur-3xl -z-10"></div>
                </div>
            </div>

        </section>
    );
}
