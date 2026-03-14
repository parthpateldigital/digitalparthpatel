import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Facebook, Instagram, MousePointerClick, Target, BarChart, CheckCircle2 } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

const adPlatforms = [
    {
        title: 'Google Ads',
        desc: 'Appear at the top of search results when customers are looking for your services.',
        icon: Globe,
        color: 'border-blue-500/30'
    },
    {
        title: 'Facebook Ads',
        desc: 'Target users based on interests, behaviors, and demographics to build brand awareness.',
        icon: Facebook,
        color: 'border-indigo-500/30'
    },
    {
        title: 'Instagram Ads',
        desc: 'Visual storytelling that captures attention and drives high-engagement traffic.',
        icon: Instagram,
        color: 'border-pink-500/30'
    }
]

const PpcServices = () => {
    return (
        <div className="pt-24">
            {/* Header */}
            <section className="py-20 bg-gradient-to-b from-dark to-slate-900 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest"
                    >
                        PPC Advertising Mastery
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        ROI-Driven <span className="text-gradient">PPC Campaigns</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <p className="text-slate-400 text-lg md:text-xl">
                            Stop wasting money on bad ads. We create PPC campaigns that deliver results, from search ads to social targeting.
                        </p>

                        {/* AEO/GEO Direct Answer Block */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left">
                            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">What are Paid Ads?</h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                <strong>Paid Advertising (PPC)</strong> is a digital marketing model where businesses pay a fee each time one of their ads is clicked. This includes <strong>Google Ads (Search)</strong>, <strong>Meta Ads (Facebook & Instagram)</strong>, and Display marketing. We specialize in optimizing these campaigns to ensure the lowest cost-per-acquisition while maximizing your business revenue.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Platforms Grid */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {adPlatforms.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`glass-card p-10 rounded-3xl border ${p.color} hover:border-primary/50 transition-all text-center group`}
                            >
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform">
                                    <p.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Features */}
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 space-y-12"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                What's Included in <br /> Our <span className="text-primary italic">Ad Mastery?</span>
                            </h2>

                            <div className="space-y-8">
                                {[
                                    { title: 'Campaign Setup', icon: MousePointerClick, desc: 'Professional setup with correct conversion tracking and pixels.' },
                                    { title: 'Audience Targeting', icon: Target, desc: 'Reaching the right people based on deep interest and behavioral analysis.' },
                                    { title: 'ROI Tracking', icon: BarChart, desc: 'Daily monitoring and optimization to ensure every dollar spent brings value.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-14 h-14 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center text-primary font-bold">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                            <p className="text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="relative glass-card p-4 rounded-[2.5rem] border-white/10 overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                                    alt="Paid Ads Analytics"
                                    className="rounded-[2rem] w-full"
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-dark to-transparent">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-white font-bold">Campaign Live</span>
                                    </div>
                                    <p className="text-slate-400 text-sm">Real-time performance tracking active</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    )
}

export default PpcServices
