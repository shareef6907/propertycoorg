"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { clsx } from "clsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "Overview", href: "#overview" },
        { name: "Location", href: "#location" },
        { name: "Investment", href: "#investment" },
        { name: "Gallery", href: "#gallery" },
    ];

    return (
        <motion.nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-primary/95 backdrop-blur-md py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold text-white tracking-wide">
                    Property<span className="text-accent">Coorg</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/90 hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-accent hover:bg-accent-light text-primary-dark font-bold py-2 px-6 rounded-none transition-all duration-300 flex items-center gap-2"
                    >
                        <Phone className="w-4 h-4" />
                        <span>Contact Owner</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-primary border-t border-white/10"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/90 hover:text-accent text-lg font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-accent text-primary-dark font-bold py-3 px-6 text-center mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Owner
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
