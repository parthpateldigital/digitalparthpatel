import React from 'react'
import { motion } from 'framer-motion'
import { Search, Share2, TrendingUp, BarChart3, ArrowUpRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
    {
        title: 'Search Engine Optimization (SEO)',
        shortTitle: 'SEO Mastery',
        description: 'Boost your visibility on Google and drive organic traffic that converts into loyal customers.',
        icon: Search,
        color: 'from-blue-600/20 to-sky-400/20',
        textColor: 'text-blue-400',
        path: '/seo-services',
        highlights: ['Keyword Research', 'Technical Audit', 'Backlinks']
    },
    {
        title: 'Social Media Optimization (SMO)',
        shortTitle: 'SMO Strategy',
        description: 'Optimize your social profiles to build brand credibility and engage your audience effectively.',
        icon: Share2,
        color: 'from-purple-600/20 to-pink-400/20',
        textColor: 'text-purple-400',
        path: '/smo-services',
        highlights: ['Profile Audit', 'Engagement Strategy', 'Visual Branding']
    },
    {
        title: 'Social Media Marketing (SMM)',
        shortTitle: 'SMM Growth',
        description: 'Strategic campaigns across platforms like Facebook and Instagram to scale your brand presence.',
        icon: TrendingUp,
        color: 'from-pink-600/20 to-rose-400/20',
        textColor: 'text-pink-400',
        path: '/smm-services',
        highlights: ['Viral Content', 'Ad Campaigns', 'Influencer Collab']
    },
    {
        title: 'Pay Per Click Advertising (PPC)',
        shortTitle: 'PPC Excellence',
        description: 'Direct results through targeted Google Ads and Meta Ads with focus on high ROI and low CPA.',
        icon: BarChart3,
        color: 'from-emerald-600/20 to-teal-400/20',
        textColor: 'text-emerald-400',
        path: '/ppc-services',
        highlights: ['Google Search Ads', 'Retargeting', 'ROI Tracking']
    }
]

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="group relative"
        >
            <div className="glass-card p-10 rounded-[2.5rem] h-full relative overflow-hidden">
                {/* Dynamic Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center ${service.textColor} mb-8 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg`}>
                    <service.icon size={28} />
                </div>

                <div className="space-y-4">
                    <div className="text-[10px] text-primary font-black uppercase tracking-[0.2em] opacity-70">
                        {service.shortTitle}
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {service.description}
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                    <Link
                        to={service.path}
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-primary transition-all group/link"
                    >
                        <span className="relative">
                            Read More
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                        </span>
                        <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

const ServicesGrid = () => {
    return (
        <section id="services" className="py-12 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Our Core Services</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-none uppercase tracking-tight">
                            Elevate Your <br /> <span className="text-gradient">Digital Presence.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-400 max-w-sm text-base font-light leading-relaxed"
                    >
                        We provide high-precision digital marketing solutions to help you scale your brand and dominate your market.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesGrid
