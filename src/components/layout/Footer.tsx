import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">
                            Property<span className="text-accent">Coorg</span>
                        </h3>
                        <p className="text-white/70 leading-relaxed max-w-xs">
                            A premium 3.86-acre investment opportunity in the heart of Coorg. Ideal for resorts, wedding venues, and legacy investments.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#overview" className="text-white/70 hover:text-white transition-colors">Property Overview</Link></li>
                            <li><Link href="#location" className="text-white/70 hover:text-white transition-colors">Location Map</Link></li>
                            <li><Link href="#investment" className="text-white/70 hover:text-white transition-colors">Investment Value</Link></li>
                            <li><Link href="#contact" className="text-white/70 hover:text-white transition-colors">Schedule Visit</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent mt-1" />
                                <span className="text-white/80">Cheriye Paramb, Napokulu,<br />Kodagu District, Karnataka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent" />
                                <a href="tel:+97333007030" className="text-white/80 hover:text-white transition-colors">+973 3300 7030</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-white/60 text-sm italic">Single Owner (Settled in Bahrain)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} PropertyCoorg. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
