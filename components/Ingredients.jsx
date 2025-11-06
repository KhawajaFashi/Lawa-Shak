const ingredients = [
    {
        icon: '☕',
        title: 'Belgian Chocolate',
        description: 'Premium single-origin Belgian chocolate sourced from award-winning cacao plantations, delivering rich, complex flavors with a silky smooth texture.'
    },
    {
        icon: '🌿',
        title: 'Madagascar Vanilla',
        description: "Hand-harvested vanilla beans from Madagascar's lush plantations, known for their aromatic intensity and natural sweetness that elevates every creation."
    },
    {
        icon: '🍯',
        title: 'Organic Sugar',
        description: 'Pure organic cane sugar from sustainable farms, providing the perfect sweetness while maintaining our commitment to environmental responsibility.'
    },
    {
        icon: '🥛',
        title: 'Farm Fresh Cream',
        description: 'Locally sourced, farm-fresh cream from grass-fed dairy farms, ensuring rich, velvety textures and authentic dairy excellence in every bite.'
    },
    {
        icon: '🧂',
        title: 'Himalayan Salt',
        description: 'Natural Himalayan salt crystals that enhance flavor profiles and add a sophisticated mineral complexity to our premium dessert formulations.'
    }
]

export default function Ingredients() {
    return (
        <section id="ingredients" className="py-20 bg-[#0D0D0D]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-[#FF8A00] mb-8">PREMIUM INGREDIENTS</h2>
                <p className="max-w-4xl mb-12">
                    Every Lawa Shak dessert is crafted with the finest, ethically sourced ingredients from around
                    the world. We believe that exceptional quality begins with exceptional ingredients, carefully
                    selected to deliver an unforgettable taste experience.
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="flex gap-4 items-start">
                            <div className="w-12 h-12 bg-[#FF8A00] rounded-full flex items-center justify-center text-2xl shrink-0">
                                {ingredient.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-2">{ingredient.title}</h3>
                                <p className="text-gray-400">{ingredient.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="mt-12 border border-[#FF8A00] text-[#FF8A00] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#FF8A00] hover:text-white transition-colors">
                    <span className="material-icons text-xl">verified</span>
                    QUALITY GUARANTEED
                </button>
            </div>
        </section>
    )
}