"use client";

import { motion } from "framer-motion";
import { Hotel, Heart, Building2, GraduationCap, Home, Users } from "lucide-react";

const uses = [
    {
        title: "Luxury Resorts",
        description: "Perfect for eco-resorts or luxury hospitality projects in a high-demand tourist zone.",
        icon: Hotel,
    },
    {
        title: "Wedding Destination",
        description: "Adjacent to a wedding hall, making it ideal for a grand destination wedding venue.",
        icon: Heart,
    },
    {
        title: "Convention Center",
        description: "Large contiguous land suitable for convention centers or large event halls.",
        icon: Users,
    },
    {
        title: "Institutional Campus",
        description: "Proximity to a Women's University makes it suitable for educational institutions.",
        icon: GraduationCap,
    },
    {
        title: "Mixed-Use Development",
        description: "Scale allows for a combination of residential, commercial, and retail spaces.",
        icon: Building2,
    },
    {
        title: "Private Estate",
        description: "Create a legacy family estate in the heart of Coorg's serene landscape.",
        icon: Home,
    },
];

export default function IdealUses() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Development Potential</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                        Ideal Uses
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {uses.map((use, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 rounded-sm group"
                        >
                            <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <use.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{use.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {use.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
