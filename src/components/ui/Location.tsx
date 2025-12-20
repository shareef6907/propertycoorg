"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Building } from "lucide-react";

const landmarks = [
    { name: "Napokulu Stadium", distance: "< 50m", icon: Building },
    { name: "Wedding Hall", distance: "Adjacent (1m)", icon: Building },
    { name: "Women's University", distance: "< 50m", icon: Building },
    { name: "Darga Shareef", distance: "Opposite (< 50m)", icon: MapPin },
    { name: "Madikeri Town", distance: "15 mins", icon: Car },
];

export default function Location() {
    return (
        <section id="location" className="py-20 bg-cream">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Location Intelligence</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                        Strategic Connectivity
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Map Container */}
                    <div className="lg:col-span-2 h-[500px] bg-white p-2 shadow-lg border border-primary/5 relative overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.57723457223!2d75.6666666!3d12.3333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5008588888889%3A0x8888888888888888!2sNapokulu%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>

                        {/* Overlay CTA */}
                        <div className="absolute bottom-6 left-6 z-10">
                            <a
                                href="https://maps.app.goo.gl/1fxqkS8z6JLTdTvG6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-primary font-bold py-3 px-6 shadow-lg flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
                            >
                                <Navigation className="w-4 h-4" />
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {/* Landmarks List */}
                    <div className="bg-white p-8 shadow-lg border border-primary/5 flex flex-col justify-center">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-8">Nearby Landmarks</h3>
                        <div className="space-y-6">
                            {landmarks.map((landmark, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-accent">
                                            <landmark.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-primary">{landmark.name}</span>
                                    </div>
                                    <span className="text-text-muted text-sm font-semibold">{landmark.distance}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
