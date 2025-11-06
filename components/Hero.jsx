import Image from 'next/image'

export default function Hero() {
    return (
        <section className="min-h-screen relative flex items-center bg-black overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/cake.png"
                    alt="Molten chocolate dessert"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none tracking-tight">
                        <span className="text-white block">LAWA</span>
                        <span className="text-orange-500 block">SHAK</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-6 text-orange-500 tracking-widest">
                        MOLTEN CHOCOLATE EXPERIENCE
                    </p>
                    <p className="text-base md:text-lg mb-10 text-gray-200 leading-relaxed max-w-xl">
                        Indulge in pure decadence. Our signature Lawa
                        Shak features a perfectly crafted chocolate shell
                        with a flowing molten center. Each bite delivers
                        an exquisite blend of textures and flavors,
                        creating an unforgettable dessert experience.
                    </p>
                    <a
                        href="#order"
                        className="bg-orange-500 text-white px-8 py-3 rounded text-sm uppercase tracking-wider font-medium hover:bg-orange-600 transition-colors inline-block"
                    >
                        ORDER NOW
                    </a>
                    <p className="mt-8 text-sm text-gray-400 tracking-wider">PRESENTED BY <span className="text-orange-500">HOT SLICE</span></p>
                </div>
            </div>
        </section>
    )
}