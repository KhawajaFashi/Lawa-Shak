import { CakeSlice, Leaf, Droplets, Milk, MountainIcon } from "lucide-react"

const ingredients = [
    {
        icon: CakeSlice,
        title: "Belgian Chocolate",
        description:
            "Premium single-origin Belgian chocolate sourced from award-winning cacao plantations, delivering rich, complex flavors with a silky smooth texture."
    },
    {
        icon: Leaf,
        title: "Madagascar Vanilla",
        description:
            "Hand-harvested vanilla beans from Madagascar's lush plantations, known for their aromatic intensity and natural sweetness that elevates every creation."
    },
    {
        icon: Droplets,
        title: "Organic Sugar",
        description:
            "Pure organic cane sugar from sustainable farms, providing the perfect sweetness while maintaining our commitment to environmental responsibility."
    },
    {
        icon: Milk,
        title: "Farm Fresh Cream",
        description:
            "Locally sourced, farm-fresh cream from grass-fed dairy farms, ensuring rich, velvety textures and authentic dairy excellence in every bite."
    },
    {
        icon: MountainIcon,
        title: "Himalayan Salt",
        description:
            "Natural Himalayan salt crystals that enhance flavor profiles and add a sophisticated mineral complexity to our premium dessert formulations."
    }
]

export default function Ingredients() {
    return (
        <section id="ingredients" className="relative py-24 px-[10%] bg-[#0A0A0A]">
            {/* Grid overlay */}

            <div className="relative z-10 flex flex-col md:flex-row gap-16">

                {/* LEFT CONTENT */}
                <div className="max-md:w-full max-xl:w-2/3 w-1/2">

                    {/* Heading */}
                    <h2
                        className="text-5xl max-xs:text-4xl font-extrabold text-orange-500 mb-6 mx-auto text-wrap"
                        style={{ textShadow: "0 0 2px #ff8a00, 0 0 4px #ff8a00" }}
                    >
                        PREMIUM
                        INGREDIENTS
                    </h2>

                    <p className="text-gray-300 max-w-xl leading-relaxed mb-12">
                        Every Lava Shak dessert is crafted with the finest, ethically sourced
                        ingredients. Exceptional quality begins with exceptional ingredients.
                    </p>

                    {/* Ingredient List */}
                    <div className="flex flex-col gap-10">
                        {ingredients.map((item, i) => (
                            <div key={i} className="flex gap-5 group">
                                <div className="w-14 h-14 aspect-square rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-500 shadow-[0_0_20px_rgba(255,138,0,0.25)] transition-all duration-300 group-hover:bg-orange-500 group-hover:text-black">
                                    <item.icon className="w-6 h-6" strokeWidth={2} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>

                            </div>

                        ))}
                    </div>

                    {/* Guarantee Button */}
                    <button className="mt-12 border border-orange-500 text-orange-500 px-7 py-3 rounded-full flex items-center gap-2 hover:bg-orange-500 hover:text-black transition-all font-semibold shadow-[0_0_15px_rgba(255,138,0,0.4)]">
                        ✓ QUALITY GUARANTEED
                    </button>
                </div>

                {/* RIGHT SIDE */}
                <div className="hidden md:flex w-1/2 max-xl:w-1/3 justify-center items-center">
                    <div className="absolute top-1 right-1 w-72 h-72 bg-orange-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-10 right-10 opacity-30">
                        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                            <circle cx="90" cy="90" r="80" stroke="#ff8a00" strokeWidth="1.8" />
                        </svg>
                    </div>

                    <div className="absolute top-[65%] right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-[70%] right-20 opacity-20">
                        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                            <circle cx="70" cy="70" r="60" stroke="#ff8a00" strokeWidth="1.6" />
                        </svg>
                    </div>
                    <div className="absolute top-[20%] right-65 w-72 h-72 bg-orange-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute top-[30%] right-80 opacity-20">
                        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                            <circle cx="70" cy="70" r="60" stroke="#ff8a00" strokeWidth="1.6" />
                        </svg>
                    </div>
                    <h3
                        className="text-4xl font-bold text-orange-500 opacity-80 tracking-wider"
                        style={{ textShadow: "0 0 12px #ff8a00" }}
                    >
                        CRAFTED WITH CARE
                    </h3>
                </div>

            </div>
        </section>
    )
}
