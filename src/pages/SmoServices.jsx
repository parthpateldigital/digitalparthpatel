import React from 'react'
import { motion } from 'framer-motion'
import { Share2, UserCheck, Palette, FileText, BarChart, CheckCircle } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

const smoFeatures = [
    {
        title: 'Profile Audit',
        desc: 'Comprehensive analysis of your social media profiles to identify gaps and opportunities for improvement.',
        icon: UserCheck
    },
    {
        title: 'Visual Branding',
        desc: 'Developing a consistent visual style across all platforms to make your brand instantly recognizable.',
        icon: Palette
    },
    {
        title: 'Bio Optimization',
        desc: 'Crafting high-converting bios that tell your story and drive users to take action.',
        icon: FileText
    },
    {
        title: 'Content Themes',
        desc: 'Establishing core content pillars that resonate with your target audience and build authority.',
        icon: Share2
    },
    {
        title: 'Analytics Setup',
        desc: 'Implementing tracking tools to measure engagement and refine your strategy based on data.',
        icon: BarChart
    }
]

const SmoServices = () => {
    return (
        <div className="pt-24">
            {/* Header Section */}
            <section className="py-20 bg-gradient-to-b from-dark to-slate-900 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold uppercase tracking-widest"
                    >
                        Social Presence Optimization
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        Strategic <span className="text-gradient">SMO Services</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <p className="text-slate-400 text-lg md:text-xl">
                            Transform your social media profiles into powerful brand assets that attract and engage.
                        </p>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left">
                            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">What is SMO?</h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                <strong>Social Media Optimization (SMO)</strong> is the process of increasing the awareness of a product, brand or event by using a number of social media outlets and communities to generate viral publicity. It focuses on driving organic traffic and building a strong foundation for your social presence.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Organic <br /> <span className="text-primary italic">Growth Strategy</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                We don't just post content; we build ecosystems where your brand can thrive organically through consistent value and strategic optimization.
                            </p>
                            <ul className="space-y-4">
                                {['Platform-Specific Optimization', 'Community Engagement Rules', 'Hashtag Architecture', 'Competitor Benchmarking'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle className="text-primary" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-2 glass-card rounded-2xl border-white/10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200"
                                alt="Social Media Strategy"
                                className="rounded-xl w-full"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {smoFeatures.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 rounded-2xl border-white/5 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <f.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    )
}

export default SmoServices
