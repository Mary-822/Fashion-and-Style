// src/components/sections/Products.jsx
export default function Products() {
    const products = [
        {
            name: "Velora Classic Blazer",
            desc: "Tailored fit with premium fabric for timeless elegance.",
            price: "$129",
            img: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhemVyJTIwLSUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Urban Denim Jacket",
            desc: "Streetwear-inspired comfort meets classic durability.",
            price: "$89",
            img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },

        {
            name: "Velora Silk Dress",
            desc: "Lightweight luxury made for elegance and flow.",
            price: "$149",
            img: "https://plus.unsplash.com/premium_photo-1740017729287-b677d8f8b9bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNpbGslMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            name: "Minimal Leather Bag",
            desc: "Handcrafted accessory built for simplicity and style.",
            price: "$179",
            img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhdGhlciUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        },
    ];

    return (
        <section className="w-full bg-neutralLight py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
                    Featured Products
                </h2>

                {/* Product Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-6 space-y-2 text-left">
                                <h3 className="text-lg font-semibold text-primary">
                                    {item.name}
                                </h3>
                                <p className="text-neutralDark text-sm">{item.desc}</p>
                                <p className="text-accent font-semibold text-lg mt-2">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
