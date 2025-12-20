"use client";

import { motion } from "framer-motion";
import { Ruler, Map, IndianRupee, Trees } from "lucide-react";

const stats = [
    {
        label: "Total Area",
        value: "3.86",
        unit: "Acres",
        icon: Ruler,
        delay: 0.1,
    },
    {
        label: "Price",
        value: "8.0",
        unit: "Crores",
        icon: IndianRupee,
        delay: 0.2,
    },
    {
        label: "Location",
        value: "Napokulu",
        unit: "Kodagu",
        icon: Map,
        delay: 0.3,
    },
    {
        label: "Land Type",
        value: "Converted",
        unit: "Commercial",
        icon: Trees,
        delay: 0.4,
    },
];

export default function PropertyOverview() {
    return (
        <section id="overview" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Property Overview</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                            A Rare Opportunity in <br />
                            <span className="italic text-primary-light">God&apos;s Own Country</span>
                        </h2>
                        <p className="text-text-muted text-lg leading-relaxed mb-8">
                            Discover a pristine 3.86-acre parcel of land situated in the serene landscapes of Napokulu, Coorg. This property offers a unique blend of accessibility and seclusion, making it the perfect canvas for a luxury resort, boutique hotel, or a private estate.
                        </p>
                        <p className="text-text-muted text-lg leading-relaxed mb-8">
                            With clear titles, conversion status, and strategic proximity to major tourist attractions, this land represents not just real estate, but a legacy investment in one of India&apos;s most sought-after destinations.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: stat.delay }}
                                className="bg-cream p-6 border border-primary/5 hover:border-accent/30 transition-colors duration-300"
                            >
                                <stat.icon className="w-8 h-8 text-accent mb-4" />
                                <h3 className="text-3xl font-bold text-primary mb-1">
                                    {stat.value} <span className="text-lg font-normal text-text-muted">{stat.unit}</span>
                                </h3>
                                <p className="text-sm text-text-muted uppercase tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
