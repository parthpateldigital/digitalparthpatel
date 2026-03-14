import React from 'react'
import { motion } from 'framer-motion'
import { Target, DollarSign, Users, Headset } from 'lucide-react'

const features = [
    {
        title: 'Result-driven strategy',
        desc: 'Every campaign we run is optimized for conversions and measurable ROI.',
        icon: Target
    },
    {
        title: 'Affordable pricing',
        desc: 'Premium marketing services tailored to fit your budget without compromising quality.',
        icon: DollarSign
    },
    {
        title: 'Expert team',
        desc: 'Our specialists stay ahead of digital trends to keep your business winning.',
        icon: Users
    },
    {
        title: 'Fast support',
        desc: 'Dedicated account managers and 24/7 support for all your marketing needs.',
        icon: Headset
    }
]

const WhyChooseUs = () => {
    return (
        <section className="py-12 bg-slate-950 border-y border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
                            Why Choose <br /> <span className="text-gradient italic">Parth Patel?</span>
                        </h2>
                        <p className="text-slate-400 text-base leading-relaxed">
                            We don't just provide services; we build partnerships. Our approach is rooted in data, fueled by creativity, and focused on your bottom line.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="space-y-3 p-4 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                        <f.icon size={24} />
                                    </div>
                                    <h4 className="text-white font-black text-sm uppercase tracking-wider">{f.title}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed font-light">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="rounded-2xl overflow-hidden border border-white/10 p-1">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                                alt="Our Team Strategy"
                                className="rounded-xl w-full"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
