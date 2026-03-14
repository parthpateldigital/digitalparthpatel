import React from 'react'
import { motion } from 'framer-motion'
import { Key, Layout, PenTool, Link2, FileImage, CheckCircle } from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

const seoFeatures = [
    {
        title: 'Keyword Research',
        desc: 'Finding high-intent keywords that your customers are actually searching for to drive qualified traffic.',
        icon: Key
    },
    {
        title: 'Meta Optimization',
        desc: 'Crafting compelling Meta Titles and Descriptions to improve your Click-Through Rate (CTR).',
        icon: Layout
    },
    {
        title: 'Content Optimization',
        desc: 'Enhancing your existing content with the right keywords, headings, and structures for better ranking.',
        icon: PenTool
    },
    {
        title: 'Internal Linking',
        desc: 'Strategically linking your pages to distribute link equity and help Google crawl your site easily.',
        icon: Link2
    },
    {
        title: 'Image Optimization',
        desc: 'Reducing image file sizes and adding Alt text to improve page load speed and image search ranking.',
        icon: FileImage
    }
]

const SeoServices = () => {
    return (
        <div className="pt-24">
            {/* Header Section */}
            <section className="py-20 bg-gradient-to-b from-dark to-slate-900 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest"
                    >
                        Search Engine Mastery
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        ROI-Focused <span className="text-gradient">SEO Services</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <p className="text-slate-400 text-lg md:text-xl">
                            Rank #1 on Google and dominate the search results with our results-driven SEO strategy.
                        </p>
                        {/* AEO/GEO Direct Answer Block */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-left">
                            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">What is SEO?</h2>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                <strong>Search Engine Optimization (SEO)</strong> is the process of improving your website's visibility on search engines like Google, Bing, and AI-driven platforms. By optimizing content, technical structure, and authority, we help your business attract high-quality organic traffic and convert visitors into customers.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* On-Page SEO Section */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                On-Page SEO <br /> <span className="text-primary italic">Excellence</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                We optimize every element of your website to ensure both users and search engines have a seamless experience. Our approach is technical, strategic, and meticulous.
                            </p>
                            <ul className="space-y-4">
                                {['Google Search Console Setup', 'XML Sitemap Creation', 'Robots.txt Optimization', 'Schema Markup Installation'].map((item, i) => (
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
                                src="/images/on-page-seo.png"
                                alt="On-Page SEO Optimization"
                                className="rounded-xl w-full"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {seoFeatures.map((f, i) => (
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

export default SeoServices
