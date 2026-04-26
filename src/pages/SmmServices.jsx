import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, MessageSquare, Zap, Target, CheckCircle } from 'lucide-react'
import FAQ from '../components/FAQ'
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
                                src="/images/smm-global-strategy.jpg"
                                alt="Scalable Brand Dominance"
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

            {/* Funnel Section */}
            <section className="py-24 bg-dark border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The <span className="text-primary italic">SMM Growth</span> Funnel</h2>
                        <p className="text-slate-400">How we turn scrolling strangers into loyal customers.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {[
                            { title: 'Awareness', desc: 'Eye-catching viral content and influencer shoutouts to gather massive attention.' },
                            { title: 'Consideration', desc: 'Retargeting ads and high-value educational content to build trust and authority.' },
                            { title: 'Conversion', desc: 'Direct response ads and limited-time offers to drive sales and sign-ups.' },
                            { title: 'Retention', desc: 'Community engagement and exclusive loyalty content to turn customers into brand advocates.' }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 glass-card rounded-2xl border-white/10 flex flex-col md:flex-row gap-6 items-center md:items-start group hover:bg-white/5 transition-all"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                    {i + 1}
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            </section>

            {/* SMM Packages Section */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-bold uppercase tracking-widest"
                        >
                            Growth Plans
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                        >
                            SMM <span className="text-gradient">Packages</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 max-w-2xl mx-auto text-lg"
                        >
                            Choose the social media growth package that fits your business needs. Custom enterprise plans available.
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
                            <h3 className="text-2xl font-bold text-white mb-2">Growth Starter</h3>
                            <p className="text-slate-400 text-sm mb-8">Perfect for small businesses establishing a presence.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {['12 Custom Posts/Month', '2 Platforms (FB & Insta)', 'Basic Community Management', 'Monthly Analytics Report', 'Profile Optimization'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-300 text-sm">
                                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" className="btn-gradient w-full py-3 rounded-xl text-center font-bold">Choose Plan</a>
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
                            <h3 className="text-2xl font-bold text-white mb-2">Social Dominance</h3>
                            <p className="text-slate-400 text-sm mb-8">For brands ready to scale and convert followers to sales.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {['20 Custom Posts/Month', '4 Reels/Shorts Editing', '3 Platforms Management', 'Ad Campaign Setup (Spend extra)', 'Competitor Analysis', 'Weekly Analytics Report'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white text-sm">
                                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" className="bg-white text-slate-900 hover:bg-slate-200 w-full py-3 rounded-xl text-center font-bold transition-colors">Choose Plan</a>
                        </motion.div>

                        {/* Enterprise Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Custom Enterprise</h3>
                            <p className="text-slate-400 text-sm mb-8">Complete digital ecosystem management for established brands.</p>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {['Daily Content Posting', 'Unlimited Graphics & Reels', 'All Platforms Managed', 'Dedicated Account Manager', 'Advanced Pixel & Conversion Tracking', 'Custom Influencer Campaigns'].map((item, i) => (
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

export default SmmServices
