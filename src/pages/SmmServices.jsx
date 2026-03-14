import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, MessageSquare, Zap, Target, CheckCircle } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

const smmFeatures = [
    {
        title: 'Viral Content Creation',
        desc: 'Crafting content designed to be shared, liked, and talked about across all major social networks.',
        icon: Zap
    },
    {
        title: 'Community Management',
        desc: 'Actively engaging with your audience to build loyalty and turn followers into brand advocates.',
        icon: MessageSquare
    },
    {
        title: 'Targeted Campaigns',
        desc: 'Reach exactly who you need to with precision targeting based on demographics and interests.',
        icon: Target
    },
    {
        title: 'Influencer Collaboration',
        desc: 'Partnering with the right voices to amplify your brand message and reach new audiences.',
        icon: Users
    },
    {
        title: 'Performance Growth',
        desc: 'Continuous monitoring and scaling of strategies that deliver the best social ROI.',
        icon: TrendingUp
    }
]

const SmmServices = () => {
    return (
        <div className="pt-24">
            {/* Header Section */}
            <section className="py-20 bg-gradient-to-b from-dark to-slate-900 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-bold uppercase tracking-widest"
                    >
                        Social Media Marketing
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        ROI-Driven <span className="text-gradient">SMM Growth</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <p className="text-slate-400 text-lg md:text-xl">
                            Scale your brand through strategic social media marketing that delivers measurable business results.
                        </p>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left">
                            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">What is SMM?</h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                <strong>Social Media Marketing (SMM)</strong> focuses on paid and strategic promotional efforts on social platforms. It combines creativity with data to put your brand in front of the right eyes at the right time, driving conversions and rapid growth.
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
                                Scalable <br /> <span className="text-primary italic">Brand Dominance</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                We help you dominate the digital conversation. From viral trends to high-performance conversion funnels, we manage every aspect of your social marketing.
                            </p>
                            <ul className="space-y-4">
                                {['Paid Ad Funnels (Meta/TikTok)', 'Content Calendar Planning', 'Engagement Rate Scaling', 'Conversion Rate Optimization'].map((item, i) => (
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
                                src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200"
                                alt="Social Media Marketing"
                                className="rounded-xl w-full"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {smmFeatures.map((f, i) => (
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

export default SmmServices
