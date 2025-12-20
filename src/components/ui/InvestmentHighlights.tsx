"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Hotel, Landmark, MapPin } from "lucide-react";

const highlights = [
    {
        title: "Rare Large Parcel",
        description: "Large contiguous land parcels near Madikeri are increasingly rare, making this a unique find.",
        icon: Landmark,
    },
    {
        title: "Strategic Location",
        description: "Surrounding infrastructure ensures consistent relevance, footfall, and long-term appreciation.",
        icon: MapPin,
    },
    {
        title: "High Revenue Potential",
        description: "Suitable for high-revenue resort and wedding-based business models in a tourism hub.",
        icon: TrendingUp,
    },
    {
        title: "Future Ready",
        description: "Infrastructure planning significantly enhances post-development value for visionary investors.",
        icon: ShieldCheck,
    },
];

export default function InvestmentHighlights() {
    return (
        <section id="investment" className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Why Invest?</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        Investment Highlights
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-white/70 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
