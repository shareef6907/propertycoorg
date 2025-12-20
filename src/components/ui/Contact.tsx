"use client";

import { useForm } from "react-hook-form";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

type FormData = {
    name: string;
    email: string;
    phone: string;
    intent: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        console.log(data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Thank you for your interest. We will contact you shortly.");
    };

    return (
        <section id="contact" className="py-20 bg-cream">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Get in Touch</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
                            Schedule a Private Viewing
                        </h2>
                        <p className="text-text-muted text-lg mb-10 leading-relaxed">
                            Serious inquiries only. Contact us directly to discuss pricing, schedule a site visit, or request legal documentation.
                        </p>

                        <div className="space-y-6">
                            <a href="tel:+919876543210" className="flex items-center gap-4 p-6 bg-white shadow-sm border border-primary/5 hover:border-accent/50 transition-colors group">
                                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted uppercase tracking-wide font-semibold">Call Us</p>
                                    <p className="text-xl font-bold text-primary">+91 98765 43210</p>
                                </div>
                            </a>

                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white shadow-sm border border-primary/5 hover:border-accent/50 transition-colors group">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted uppercase tracking-wide font-semibold">WhatsApp</p>
                                    <p className="text-xl font-bold text-primary">Chat on WhatsApp</p>
                                </div>
                            </a>

                            <a href="mailto:contact@propertycoorg.com" className="flex items-center gap-4 p-6 bg-white shadow-sm border border-primary/5 hover:border-accent/50 transition-colors group">
                                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted uppercase tracking-wide font-semibold">Email Us</p>
                                    <p className="text-xl font-bold text-primary">contact@propertycoorg.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 shadow-xl border-t-4 border-accent">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send an Inquiry</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-text-dark mb-2">Name</label>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full px-4 py-3 bg-cream border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-dark mb-2">Phone</label>
                                    <input
                                        {...register("phone", { required: "Phone is required" })}
                                        className="w-full px-4 py-3 bg-cream border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-dark mb-2">Email</label>
                                <input
                                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                                    className="w-full px-4 py-3 bg-cream border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-dark mb-2">Investment Intent</label>
                                <select
                                    {...register("intent")}
                                    className="w-full px-4 py-3 bg-cream border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                >
                                    <option value="Resort Development">Resort Development</option>
                                    <option value="Private Estate">Private Estate</option>
                                    <option value="Land Investment">Land Investment</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-dark mb-2">Message</label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-cream border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                    placeholder="I am interested in..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 transition-colors flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <Send className="w-4 h-4" />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
