import React from 'react'
import { motion } from 'framer-motion'
import { Share2, UserCheck, Palette, FileText, BarChart, CheckCircle } from 'lucide-react'
import FAQ from '../components/FAQ'
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
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Header Section */}
            <section className="py-24 relative overflow-hidden bg-slate-950 border-b border-white/5">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
                    <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[140px]" />
                </div>
                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
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
                                src="/images/smo-growth.png"
                                alt="Organic Growth Strategy"
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

            {/* Platform Strategy Section */}
            <section className="py-24 bg-slate-950 border-t border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Dominating Every <span className="text-primary italic">Platform</span></h2>
                            <p className="text-slate-400">Different platforms require different rules. We optimize your brand to look its best wherever your customers are.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { name: 'Instagram', benefit: 'Visual storytelling and aesthetic consistency.' },
                                    { name: 'Facebook', benefit: 'Community building and trust establishment.' },
                                    { name: 'LinkedIn', benefit: 'Professional authority and B2B leadership.' },
                                    { name: 'Twitter (X)', benefit: 'Real-time engagement and viral moments.' }
                                ].map((p, i) => (
                                    <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all">
                                        <h4 className="text-white font-bold mb-2">{p.name}</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">{p.benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
                            <img
                                src="/images/smo-platform-v3.jpg"
                                alt="Social Media Platforms"
                                className="rounded-3xl relative z-10 border border-white/10 shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SMO Packages Section */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-bold uppercase tracking-widest"
                        >
                            Service Packages
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                        >
                            SMO <span className="text-gradient">Packages</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 max-w-2xl mx-auto text-lg"
                        >
                            Choose the social media optimization plan that fits your brand. Expert profile management for all businesses.
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
                            <h3 className="text-2xl font-bold text-white mb-2">Basic SMO</h3>
                            <p className="text-slate-400 text-sm mb-8">Essential profile optimization for small brands.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {['2 Platforms Audit', 'Profile Bio Optimization', 'Highlight Design', 'Hashtag Research', 'Monthly Checklist'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300 text-sm">
                                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
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
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">Growth Pack</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Professional SMO</h3>
                            <p className="text-slate-400 text-sm mb-8">Complete profile management and engagement strategy.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {['4 Platforms Audit', 'Monthly Content Pillars', 'Engagement Strategy', 'Competitor Monitoring', 'Review Management', 'Bi-Weekly Report'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white text-sm">
                                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" className="bg-white text-slate-900 hover:bg-slate-200 w-full py-3 rounded-xl text-center font-bold transition-colors">Select Plan</a>
                        </motion.div>

                        {/* Custom Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Custom Strategy</h3>
                            <p className="text-slate-400 text-sm mb-8">Tailored optimization for large personal brands & corporations.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {['White-label Audit', 'Personal Brand Strategy', 'Video Strategy Audit', 'Social Listening Setup', 'Multi-country Management', 'Dedicated Expert'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300 text-sm">
                                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
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

export default SmoServices
