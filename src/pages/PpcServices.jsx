import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Facebook, Instagram, MousePointerClick, Target, BarChart, CheckCircle2 } from 'lucide-react'
import FAQ from '../components/FAQ'
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
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Header */}
            <section className="py-24 relative overflow-hidden bg-slate-950 border-b border-white/5">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
                    <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[140px]" />
                </div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
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
                                    alt="Advanced Search Advertising"
                                    className="rounded-[2rem] w-full group-hover:scale-105 transition-transform duration-700"
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

            {/* Strategic Ad Types Section */}
            <section className="py-24 bg-slate-950 border-y border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Precision <span className="text-primary italic">Targeting Options</span></h2>
                        <p className="text-slate-400">Maximize your ROAS by reaching the right people exactly when it matters.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Search Ads', detail: 'Intent-based ads for high-buying signals.' },
                            { title: 'Remarketing', detail: 'Reconnect with visitors who have already seen your site.' },
                            { title: 'Lookalike', detail: 'Reach new audiences that mirror your best customers.' },
                            { title: 'Shopping', detail: 'Direct product ads for e-commerce stores.' }
                        ].map((type, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 glass-card rounded-[2rem] border-white/5 hover:border-primary/20 transition-all text-center"
                            >
                                <div className="w-12 h-1 bg-primary mx-auto mb-6 rounded-full" />
                                <h4 className="text-white font-bold mb-3">{type.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{type.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PPC Packages Section */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-bold uppercase tracking-widest"
                        >
                            Campaign Solutions
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                        >
                            PPC <span className="text-gradient">Packages</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 max-w-2xl mx-auto text-lg"
                        >
                            Transparent structures based on your goals. Scale your business with confidence.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Basic Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Starter Ads</h3>
                            <p className="text-slate-400 text-sm mb-8">Ideal for small local businesses and startups.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {['1 Ad Network (Google OR Meta)', 'Up to 3 Campaigns', 'Basic Keyword Research', 'Retargeting Setup', 'Monthly Performance Report'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300 text-sm">
                                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" className="btn-gradient w-full py-3 rounded-xl text-center font-bold">Get Started</a>
                        </motion.div>

                        {/* Pro Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-8 rounded-3xl border-2 border-primary relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-primary/20"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Growth Partner</h3>
                            <p className="text-slate-400 text-sm mb-8">Best for scaling brands and e-commerce stores.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {['2 Ad Networks (Google + Meta)', 'Up to 8 Campaigns', 'Advanced Pixel & Conversion Tracking', 'A/B Ad Testing', 'Competitor Ad Analysis', 'Bi-Weekly Reporting'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white text-sm">
                                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" className="bg-white text-slate-900 hover:bg-slate-200 w-full py-3 rounded-xl text-center font-bold transition-colors">Select Plan</a>
                        </motion.div>

                        {/* Enterprise Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Scale Enterprise</h3>
                            <p className="text-slate-400 text-sm mb-8">Full-scale digital dominance for established brands.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {['Omnichannel Strategy (All Networks)', 'Unlimited Campaigns', 'Landing Page Audits', 'Custom ROI Dashboard', 'Dedicated Account Manager', 'Weekly Strategy Calls'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300 text-sm">
                                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white w-full py-3 rounded-xl text-center font-bold transition-all">Contact Us</a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FAQ />
            <FinalCTA />
        </div>
    )
}

export default PpcServices
