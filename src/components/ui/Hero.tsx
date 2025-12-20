"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                    poster="/images/hero-poster.jpg"
                >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-2 mb-6 text-accent font-medium tracking-wider uppercase">
                        <MapPin className="w-5 h-5" />
                        <span>Napokulu, Kodagu District</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                        Property for Sale in Coorg <br />
                        <span className="text-black/80">Premium 3.86-Acre Investment Land</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl">
                        Prime Coorg Land for Resort, Wedding Venue & Large-Scale Development | Napokulu, Kodagu
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:+97333007030"
                            className="bg-accent hover:bg-accent-light text-primary-dark font-bold py-4 px-8 text-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Call Now
                            <Phone className="w-5 h-5" />
                        </a>
                        <Link
                            href="#location"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 text-lg transition-all duration-300 flex items-center justify-center"
                        >
                            View Location
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
