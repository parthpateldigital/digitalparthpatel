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
    Twitter,
    Globe,
    Phone,
    MapPin,
    Target,
    Zap,
    Languages,
    CheckCircle2
} from 'lucide-react'
import FinalCTA from '../components/FinalCTA'

const Portfolio = () => {
    const experiences = [
        {
            company: 'SIGZEN TECHNOLOGIES PVT. LTD',
            role: 'DIGITAL MARKETER (PPC, SEO, SMM)',
            period: 'AUG 2023 - PRESENT',
            desc: 'Leading comprehensive digital marketing strategies focusing on Performance Marketing (PPC), Search Engine Optimization (SEO), and Social Media Marketing (SMM) to drive organizational growth.'
        },
        {
            company: 'SIGZEN TECHNOLOGIES PVT. LTD',
            role: 'DIGITAL MARKETER (PPC, SEO, SMM)',
            period: 'APR 2023 - JUL 2023',
            desc: 'Executed digital marketing campaigns and managed professional social media presence during the internship period.'
        }
    ]

    const education = [
        { school: 'AHMEDABAD MANAGEMENT ASSOCIATION', degree: 'Post Graduate Diploma', year: '2024' },
        { school: 'AHMEDABAD SCHOOL OF DIGITAL MARKETING', degree: 'Advance Digital Marketing Program', year: '2023' },
        { school: 'Narsinh Mehta University', degree: 'B.COM', year: '2022' },
        { school: 'GSEB', degree: '12TH', year: '2018' },
        { school: 'GSEB', degree: '10TH', year: '2016' }
    ]

    const skillDetails = [
        {
            title: 'SEARCH ENGINE OPTIMIZATION',
            items: [
                'Able to do the On-page and Off-page SEO.',
                'On-Page Optimization (Title, Description & H1 Tag Creation, Content Optimization and interlinking, alt tag optimization, xml sitemap creation)',
                'Off-Page Optimization (Directory Submission, Article submission, Social bookmark submission, Blog Posting etc)',
                'Keyword research using keyword planner to find unique keywords for meta details of every page.'
            ]
        },
        {
            title: 'WORDPRESS & GOOGLE / META ADS',
            items: [
                'Able to make website in wordpress.',
                'How to check and improve plagiarism and speed of your website.',
                'Able to create google ads campaign and track all traffic.',
                'Good knowledge using Ads interface And Introduction to Google / Meta Ads.'
            ]
        },
        {
            title: 'SOCIAL MEDIA MARKETING',
            items: [
                'Able to Make Social Media Calendar.',
                'Manage all Social Media Accounts.',
                'Create ads Campaign for Facebook + Instagram.',
                'Create Strategy Planning for Campaign.'
            ]
        }
    ]

    const certifications = [
        'Advance Digital Marketing Program',
        'HubSpot SEO & Semrush Certified',
        'Social Media Marketing Specialist',
        'Facebook Ads Expert',
        'Google ADS Search Certified',
        'Google Analytics Qualified',
        'WordPress Website Developer',
        'Google ADS Display & Video'
    ]

    return (
        <div className="pt-24 bg-dark">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-48 h-48 md:w-64 md:h-64 rounded-[40px] bg-gradient-to-br from-primary to-blue-600 p-1.5 shadow-2xl shadow-primary/20"
                        >
                            <div className="w-full h-full rounded-[38px] bg-slate-900 flex items-center justify-center overflow-hidden">
                                <img 
                                    src="/images/parth-profile.jpg" 
                                    alt="Bhensadadiya Parth" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                        
                        <div className="flex-1 text-center md:text-left">
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block"
                            >
                                DIGITAL MARKETER
                            </motion.span>
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
                            >
                                Bhensadadiya <span className="text-gradient">Parth</span>
                            </motion.h1>
                            
                            <div className="flex flex-wrap gap-6 mb-8 justify-center md:justify-start">
                                <div className="flex items-center gap-2 text-slate-400 text-sm italic italic-none">
                                    <Phone size={16} className="text-primary" /> +91 76009 07141
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-sm italic italic-none">
                                    <Mail size={16} className="text-primary" /> parthbhensadadiya12@gmail.com
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-sm italic italic-none">
                                    <MapPin size={16} className="text-primary" /> 4 Baleshwar Vihar, Bopal, Ahmedabad
                                </div>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4 justify-center md:justify-start"
                            >
                                <a 
                                    href="/contact" 
                                    className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                                >
                                    Get In Touch
                                </a>
                                <a 
                                    href="/Parth-Patel-Resume.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2"
                                >
                                    <Download size={18} /> Download CV
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objective Section */}
            <section className="py-24 bg-slate-950 border-y border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <Target className="text-primary mx-auto mb-8" size={48} />
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-8 italic italic-none uppercase tracking-tighter">My <span className="text-primary">Objective</span></h2>
                    <p className="text-slate-400 text-lg md:text-2xl leading-relaxed font-medium italic italic-none">
                        "I am very ambitious about my work and company. To secure a challenging and rewarding position where I can utilize my skills and knowledge to contribute effectively to the success of the organization. I aim to continuously learn and grow while positively impacting the team and the company's goals."
                    </p>
                </div>
            </section>

            {/* Deep Dive Skills */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-16 uppercase italic italic-none">Detailed <span className="text-primary">Marketing Expertise</span></h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {skillDetails.map((group, i) => (
                            <div key={i} className="glass-card p-10 rounded-[48px] border-white/5 hover:border-primary/20 transition-all">
                                <h3 className="text-xl font-black text-white mb-8 uppercase tracking-tight italic italic-none border-b border-white/10 pb-4">{group.title}</h3>
                                <ul className="space-y-4">
                                    {group.items.map((item, idx) => (
                                        <li key={idx} className="flex gap-4">
                                            <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                                            <span className="text-slate-400 text-sm leading-relaxed italic italic-none">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-24 bg-slate-950 border-y border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-16 uppercase italic italic-none text-center">Professional <span className="text-primary">Experience</span></h2>
                    <div className="space-y-8 max-w-5xl mx-auto">
                        {experiences.map((exp, i) => (
                            <div key={i} className="glass-card p-10 rounded-[48px] border-white/5 hover:border-primary/10 transition-all">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                                    <div>
                                        <h4 className="text-2xl font-black text-white italic italic-none">{exp.company}</h4>
                                        <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mt-1 italic italic-none">{exp.role}</p>
                                    </div>
                                    <span className="px-5 py-2 bg-white/5 border border-white/10 text-slate-400 rounded-full text-xs font-black uppercase tracking-widest italic italic-none">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-slate-400 leading-relaxed italic italic-none">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Journey */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-16 uppercase italic italic-none text-center">Academic <span className="text-primary">Journey</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {education.map((edu, i) => (
                            <div key={i} className="glass-card p-8 rounded-[40px] border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                                <span className="text-primary font-black text-xs italic italic-none uppercase tracking-widest">{edu.year}</span>
                                <h4 className="text-xl font-black text-white mt-3 italic italic-none uppercase">{edu.degree}</h4>
                                <p className="text-slate-500 font-bold mt-1 text-sm italic italic-none">{edu.school}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards, Languages & Certificates */}
            <section className="py-24 bg-slate-950 border-y border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Awards */}
                        <div className="glass-card p-10 rounded-[48px] border-white/5">
                            <div className="flex items-center gap-4 mb-8">
                                <Award className="text-primary" size={32} />
                                <h3 className="text-2xl font-black text-white uppercase italic italic-none">Achievements</h3>
                            </div>
                            <ul className="space-y-6">
                                <li className="space-y-1">
                                    <p className="text-white font-bold italic italic-none">Football Khelmahakumbh Winner</p>
                                    <p className="text-slate-500 text-sm italic italic-none">Jamnagar District (Under 16) - 2016</p>
                                </li>
                                <li className="space-y-1">
                                    <p className="text-white font-bold italic italic-none">National Cadet Corps (NCC)</p>
                                    <p className="text-slate-500 text-sm italic italic-none">Professional Disciplinary Training</p>
                                </li>
                            </ul>
                        </div>

                        {/* Languages */}
                        <div className="glass-card p-10 rounded-[48px] border-white/5">
                            <div className="flex items-center gap-4 mb-8">
                                <Languages className="text-primary" size={32} />
                                <h3 className="text-2xl font-black text-white uppercase italic italic-none">Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {['Gujarati', 'Hindi', 'English'].map((lang) => (
                                    <span key={lang} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-slate-300">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Quick Certificates */}
                        <div className="glass-card p-10 rounded-[48px] border-white/5">
                            <div className="flex items-center gap-4 mb-8">
                                <Code className="text-primary" size={32} />
                                <h3 className="text-2xl font-black text-white uppercase italic italic-none">Certifications</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {certifications.map((cert) => (
                                    <span key={cert} className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-[10px] font-bold text-primary uppercase">
                                        {cert}
                                    </span>
                                ))}
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
