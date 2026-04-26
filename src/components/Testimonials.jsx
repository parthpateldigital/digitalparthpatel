import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'CEO, TechNova',
        content: 'Parth and his team transformed our online presence. Our traffic increased by 150% in just 3 months!',
        avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=150&h=150'
    },
    {
        name: 'Anjali Gupta',
        role: 'Founder, Bloom Decor',
        content: 'The social media strategy they implemented was phenomenal. Engagement and sales are at an all-time high.',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=150&h=150'
    },
    {
        name: 'Vikram Singh',
        role: 'Director, RealEstate Pro',
        content: 'ROI-focused approach is what sets them apart. Best investment for our digital growth.',
        avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=150&h=150'
    }
]

const Testimonials = () => {
    return (
        <section className="py-10 bg-slate-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                        What Our <span className="text-gradient">Clients</span> Say
                    </h2>
                    <p className="text-slate-400 text-sm">
                        Hear from the businesses we've helped grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-8 rounded-2xl relative border-white/5 hover:border-primary/30 transition-all group"
                        >
                            <Quote className="absolute top-6 right-8 text-primary/20 group-hover:text-primary/40 transition-colors" size={40} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
                            </div>

                            <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>

                            <div className="flex items-center gap-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-primary/50" />
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-slate-500 text-xs uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
