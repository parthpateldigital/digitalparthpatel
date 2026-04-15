import React from 'react'
import { motion } from 'framer-motion'
import { 
    Briefcase, 
    GraduationCap, 
    Code, 
    ExternalLink, 
    Award, 
    Download,
    Mail,
    Linkedin,
    Globe,
    Phone,
    MapPin,
    Target,
    Zap,
    Languages,
    CheckCircle2,
    TrendingUp,
    Search,
    Share2,
    User,
    ArrowRight
} from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

const Portfolio = () => {
    const experiences = [
        {
            company: 'SIGZEN TECHNOLOGIES PVT. LTD',
            role: 'DIGITAL MARKETER (PPC, SEO, SMM)',
            period: 'AUG 2023 - PRESENT',
            desc: 'Orchestrating comprehensive digital growth strategies. Leading high-performance PPC campaigns across Google and Meta, optimizing SEO for organic dominance, and Scaling social media presence through data-driven SMM.'
        },
        {
            company: 'SIGZEN TECHNOLOGIES PVT. LTD',
            role: 'DIGITAL MARKETING INTERN',
            period: 'APR 2023 - JUL 2023',
            desc: 'Executed end-to-end digital marketing campaigns, managed high-engagement social media profiles, and supported SEO audits and implementation.'
        }
    ]

    const education = [
        { school: 'AHMEDABAD MANAGEMENT ASSOCIATION', degree: 'Post Graduate Diploma', year: '2024', status: 'In Progress' },
        { school: 'AHMEDABAD SCHOOL OF DIGITAL MARKETING', degree: 'Advance Digital Marketing Program', year: '2023', status: 'Completed' },
        { school: 'Narsinh Mehta University', degree: 'B.COM', year: '2022', status: 'Completed' },
        { school: 'GSEB', degree: '12TH Standard', year: '2018', status: 'Completed' },
        { school: 'GSEB', degree: '10TH Standard', year: '2016', status: 'Completed' }
    ]

    const coreExpertise = [
        {
            title: 'Search Engine Optimization',
            icon: <Search className="text-blue-400" size={24} />,
            color: 'from-blue-600/20 to-blue-400/20',
            borderColor: 'border-blue-500/30',
            skills: ['On-Page Optimization', 'Off-Page SEO', 'Keyword Research', 'Technical Audit', 'XML Sitemap & Interlinking']
        },
        {
            title: 'Performance Marketing',
            icon: <TrendingUp className="text-emerald-400" size={24} />,
            color: 'from-emerald-600/20 to-emerald-400/20',
            borderColor: 'border-emerald-500/30',
            skills: ['Google Ads (Search/Display)', 'Meta Ads Manager', 'Campaign Strategy', 'Conversion Tracking', 'A/B Testing']
        },
        {
            title: 'Social Media Management',
            icon: <Share2 className="text-purple-400" size={24} />,
            color: 'from-purple-600/20 to-purple-400/20',
            borderColor: 'border-purple-500/30',
            skills: ['Content Strategy', 'Social Media Calendar', 'Community Engagement', 'Influencer Research', 'Analytics Reporting']
        }
    ]

    const certifications = [
        'HubSpot SEO Specialist',
        'Semrush SEO Fundamentals',
        'Meta Certified Digital Associate',
        'Google Ads Search Certification',
        'Google Analytics (GA4) Qualified',
        'WordPress Developer Certification',
        'Mahindra Pride Soft Skills',
        'Google Ads Display & Video'
    ]

    const achievements = [
        {
            title: 'Football Khelmahakumbh Winner',
            detail: 'Jamnagar District (Under 16) - 2016',
            icon: <Award className="text-yellow-500" />
        },
        {
            title: 'NCC Cadet',
            detail: 'National Cadet Corps - Professional Discipline',
            icon: <Zap className="text-orange-500" />
        }
    ]

    return (
        <div className="pt-24 bg-dark min-h-screen">
            {/* Hero Section with Premium Backdrop */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl rounded-full" />
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Profile Image Column */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-blue-400 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-[50px] overflow-hidden border-2 border-white/10 relative z-10">
                                    <img 
                                        src="/images/hero-growth.png" 
                                        alt="Professional Expertise" 
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dark border border-white/10 rounded-3xl flex items-center justify-center z-20 shadow-2xl backdrop-blur-xl">
                                    <div className="text-center">
                                        <p className="text-primary font-black text-xl leading-none">2+</p>
                                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years Exp.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Text Info Column */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available for New Projects</span>
                                </div>
                                
                                <h1 className="text-5xl md:text-8xl font-black text-white leading-tight">
                                    Parth <span className="text-gradient">Patel</span>
                                </h1>
                                
                                <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light italic italic-none">
                                    Strategic <span className="text-white font-medium">Digital Marketer</span> & Growth Catalyst. Specializing in turning complex data into high-converting organic and paid campaigns.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="flex items-center gap-3 text-slate-400">
                                        <div className="p-2 bg-white/5 rounded-lg"><Phone size={18} className="text-primary" /></div>
                                        <span className="text-sm font-medium">+91 76009 07141</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400">
                                        <div className="p-2 bg-white/5 rounded-lg"><Mail size={18} className="text-primary" /></div>
                                        <span className="text-sm font-medium">parthbhensadadiya12@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400">
                                        <div className="p-2 bg-white/5 rounded-lg"><MapPin size={18} className="text-primary" /></div>
                                        <span className="text-sm font-medium">Ahmedabad, Gujarat</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-8">
                                    <a href="/images/parth-profile.jpg" download className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
                                        <Download size={18} /> Resume
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars / Expertise section */}
            <section className="py-24 bg-slate-950/50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">What I Do</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white italic italic-none uppercase tracking-tighter">Strategic <span className="text-gradient">Capabilities</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreExpertise.map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`glass-card p-10 rounded-[48px] border ${item.borderColor} relative overflow-hidden group`}
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`} />
                                
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-all">
                                    {item.icon}
                                </div>
                                
                                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{item.title}</h4>
                                
                                <ul className="space-y-4">
                                    {item.skills.map((skill, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            <span className="text-slate-400 text-sm font-medium">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Timeline */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-center md:text-left">
                        <div>
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">Experience</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-white italic italic-none uppercase">Career <span className="text-gradient">Path</span></h3>
                        </div>
                        <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-400 text-sm font-bold flex items-center gap-3">
                            <Briefcase size={20} className="text-primary" /> Multi-Industry Exposure
                        </div>
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-12 md:pl-0"
                            >
                                <div className="hidden md:block absolute left-1/2 -ml-px h-full w-px bg-white/10" />
                                
                                <div className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="flex-1 w-full">
                                        <div className="glass-card p-10 rounded-[48px] border-white/5 relative z-10 hover:border-primary/30 transition-all">
                                            <span className="text-primary font-black text-xs uppercase tracking-widest mb-4 block">{exp.period}</span>
                                            <h4 className="text-2xl font-black text-white mb-2 uppercase">{exp.role}</h4>
                                            <p className="text-slate-500 font-bold text-sm mb-6 flex items-center gap-2">
                                                <Globe size={14} /> {exp.company}
                                            </p>
                                            <p className="text-slate-400 leading-relaxed font-light italic italic-none">
                                                "{exp.desc}"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute left-0 md:static w-10 h-10 bg-primary rounded-full flex items-center justify-center z-20 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                        <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                                    </div>
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic & Certs Bento Grid */}
            <section className="py-24 bg-slate-950/80">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Education */}
                        <div className="lg:col-span-2 space-y-8">
                            <h3 className="text-3xl font-black text-white uppercase italic italic-none">Academic <span className="text-primary">Background</span></h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {education.map((edu, i) => (
                                    <div key={i} className="glass-card p-8 rounded-[40px] border-white/5 group overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                                            <GraduationCap size={80} className="text-white" />
                                        </div>
                                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-[10px] font-black uppercase tracking-tighter mb-4 inline-block">{edu.year}</span>
                                        <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{edu.degree}</h4>
                                        <p className="text-slate-500 text-xs font-bold italic italic-none">{edu.school}</p>
                                        <p className="text-slate-600 text-[10px] mt-4 uppercase tracking-[0.2em]">{edu.status}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Awards & Certs Column */}
                        <div className="space-y-8">
                            <h3 className="text-3xl font-black text-white uppercase italic italic-none">Trust & <span className="text-primary">Awards</span></h3>
                            
                            <div className="space-y-6">
                                {achievements.map((item, i) => (
                                    <div key={i} className="glass-card p-8 rounded-[40px] border-white/5 flex gap-6 items-center">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black text-sm uppercase leading-tight">{item.title}</h4>
                                            <p className="text-slate-500 text-xs mt-1 italic italic-none">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="glass-card p-8 rounded-[40px] border-white/5 overflow-hidden relative">
                                    <div className="flex items-center gap-3 mb-6">
                                        <CheckCircle2 className="text-primary" size={20} />
                                        <h4 className="text-white font-black text-sm uppercase">Quick Verification</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {certifications.map((cert, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold text-slate-400 hover:text-primary hover:border-primary/50 transition-colors cursor-default">
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    )
}

export default Portfolio

