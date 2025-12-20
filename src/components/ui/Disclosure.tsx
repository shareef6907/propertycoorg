"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, ChevronDown, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";

export default function Disclosure() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-20 bg-cream">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border-l-4 border-accent shadow-lg overflow-hidden">
                        <div
                            className="p-8 cursor-pointer flex items-start justify-between gap-4"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
                                    <Info className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                                        Natural Rainwater Flow – Clear & Honest Disclosure
                                    </h3>
                                    <p className="text-text-muted">
                                        We believe in full transparency with serious buyers. Click to read important information about the land's natural characteristics.
                                    </p>
                                </div>
                            </div>
                            <ChevronDown className={clsx("w-6 h-6 text-primary transition-transform duration-300", isOpen ? "rotate-180" : "")} />
                        </div>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-8 pb-8 pt-0 pl-[5.5rem]">
                                        <div className="prose prose-lg text-text-muted max-w-none">
                                            <p className="mb-4">
                                                In some years, during exceptionally heavy monsoon rainfall, natural rainwater from nearby higher terrain and a nearby lake passes through parts of the land. This does not occur every year and is not a seasonal or annual issue. When it occurs, the presence of water is temporary, typically lasting a few days to around one week, after which the land returns to normal condition.
                                            </p>

                                            <div className="bg-primary/5 p-6 rounded-lg my-6">
                                                <h4 className="text-lg font-bold text-primary mb-3">Key Clarification</h4>
                                                <p className="mb-0">
                                                    This is <strong>not flooding</strong>. It is a natural surface water flow pattern that occurs only in rare, heavy-rainfall years, primarily due to the absence of an engineered drainage system.
                                                </p>
                                            </div>

                                            <h4 className="text-lg font-bold text-primary mb-4">Why This Is Easily & Permanently Manageable</h4>
                                            <ul className="space-y-3 list-none pl-0">
                                                {[
                                                    "Planned stormwater drainage channels can permanently guide water flow",
                                                    "Land-level optimization (sand filling) further improves usability",
                                                    "Commonly implemented in resort, hospitality, and institutional developments across Coorg",
                                                    "Once addressed, the land becomes fully suitable for large-scale development"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
