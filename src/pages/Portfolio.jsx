import React from 'react'
import { motion } from 'framer-motion'
import { 
    Briefcase, 
    GraduationCap, 
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
    CheckCircle2,
    TrendingUp,
    Search,
    Share2,
    ArrowRight,
    MessageCircle,
    BarChart3,
    Smartphone,
    Globe2,
    Check
} from 'lucide-react'
import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

const Portfolio = () => {
    const experiences = [
        {
            company: 'SIGZEN TECHNOLOGIES PVT. LTD',
            role: 'DIGITAL MARKETER (PPC, SEO, SMM)',
            period: 'AUG 2023 - PRESENT',
            desc: 'Executing comprehensive search engine optimization strategies, managing high-performance Pay-Per-Click campaigns, and handling social media marketing across all major platforms to drive organizational growth.'
        },
        {
            company: 'SIGZEN TECHNOLOGIES PVT. LTD',
            role: 'DIGITAL MARKETING INTERN',
            period: 'APR 2023 - JUL 2023',
            desc: 'Executed end-to-end digital marketing campaigns, managed high-engagement social media profiles, and supported SEO audits and implementation during the internship phase.'
        }
    ]

    const education = [
        { school: 'AHMEDABAD MANAGEMENT ASSOCIATION', degree: 'Post Graduate Diploma', year: '2024', status: 'In Progress' },
        { school: 'AHMEDABAD SCHOOL OF DIGITAL MARKETING', degree: 'Advance Digital Marketing Program', year: '2023', status: 'Completed' },
        { school: 'Narsinh Mehta University', degree: 'B.COM', year: '2022', status: 'Completed' },
        { school: 'GSEB (Gujarat Board)', degree: '12th Standard', year: '2018', status: 'Completed' },
        { school: 'GSEB (Gujarat Board)', degree: '10th Standard', year: '2016', status: 'Completed' }
    ]

    const skills = [
        {
            title: 'Search Engine Optimization',
            icon: <Search className="text-blue-400" size={20} />,
            borderColor: 'group-hover:border-blue-500/50',
            tags: ['On-Page SEO', 'Technical SEO', 'XML Sitemaps', 'Keyword Research', 'Off-Page (Backlinking)', 'Content Optimization']
        },
        {
            title: 'Performance Marketing',
            icon: <BarChart3 className="text-purple-400" size={20} />,
            borderColor: 'group-hover:border-purple-500/50',
            tags: ['Google Ads (Search/Display)', 'Meta Ads Manager', 'Lead Generation', 'App Promotion', 'Analytics Tracking']
        },
        {
            title: 'Social Media & Content',
            icon: <Share2 className="text-emerald-400" size={20} />,
            borderColor: 'group-hover:border-emerald-500/50',
            tags: ['SMM Strategy', 'Calendar Creation', 'HootSuite', 'Engagement Analysis', 'Facebook & Instagram Ads']
        }
    ]

    const achievements = [
        {
            title: 'Football Khelmahakumbh Winner',
            detail: 'Jamnagar District (Under 16) - 2016',
            icon: <Award className="text-yellow-500" size={20} />
        },
        {
            title: 'NCC Cadet',
            detail: 'National Cadet Corps - Professional Discipline',
            icon: <Zap className="text-orange-500" size={20} />
        }
    ]

    const floatingIcons = [
        { icon: <Search size={24} />, color: 'text-blue-400', top: '10%', left: '10%', delay: 0 },
        { icon: <TrendingUp size={24} />, color: 'text-emerald-400', top: '20%', right: '10%', delay: 0.5 },
        { icon: <Smartphone size={24} />, color: 'text-purple-400', bottom: '15%', left: '15%', delay: 1 },
        { icon: <Globe2 size={24} />, color: 'text-orange-400', bottom: '20%', right: '5%', delay: 1.5 },
    ]

    return (
        <div className="pt-24 bg-[#020617] min-h-screen text-slate-300">
            {/* HERO SECTION */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
                
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Hero Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                                    I'm <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500">
                                        Parth Bhensadadiya
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-400 font-light tracking-tight italic italic-none">
                                    Ambitious & Results-driven <span className="text-white font-medium">Digital Marketer</span>. Utilizing specialized skills in SEO, PPC, and SMM to drive organizational growth.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-blue-500/20">
                                    Get In Touch <ArrowRight size={18} />
                                </Link>
                                <Link to="/#services" className="px-8 py-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white font-bold flex items-center gap-2 hover:bg-slate-700/50 transition-all">
                                    View Services
                                </Link>
                            </div>
                        </motion.div>

                        {/* Hero Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                                {/* Glow Rings */}
                                <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                                <div className="absolute -inset-4 rounded-full border border-blue-500/10 animate-[spin_15s_linear_infinite_reverse]" />
                                
                                {/* Orbiting Icons */}
                                {floatingIcons.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
                                        className={`absolute ${item.top || ''} ${item.bottom || ''} ${item.left || ''} ${item.right || ''} p-4 bg-slate-900/80 border border-slate-700/50 rounded-2xl ${item.color} shadow-2xl backdrop-blur-xl z-20`}
                                        style={{ top: item.top, bottom: item.bottom, left: item.left, right: item.right }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                ))}

                                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-slate-800 z-10">
                                    <img 
                                        src="/images/parth-profile.jpg" 
                                        alt="Parth Patel Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* QUICK STATS */}
            <section className="py-20 bg-slate-900/30">
                <div className="container mx-auto px-4 lg:max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { value: 'WordPress', label: 'Development & Plagiarism Checks', icon: <Target className="text-blue-500" /> },
                            { value: '2.5+', label: 'Years Experience', icon: <Briefcase className="text-purple-500" /> },
                            { value: '3+', label: 'Languages Spoken', icon: <Globe className="text-emerald-500" /> },
                        ].map((stat, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-slate-800/40 border border-slate-700/50 rounded-3xl flex items-center gap-6"
                            >
                                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700/50">
                                    {stat.icon}
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-white">{stat.value}</h4>
                                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white italic italic-none uppercase tracking-tighter">Core <span className="text-gradient">Skillset</span></h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skills.map((skill, i) => (
                            <div key={i} className={`group p-10 bg-slate-800/30 border border-slate-700/50 rounded-[40px] hover:bg-slate-800/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 border-b-4 ${skill.borderColor}`}>
                                <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-8 border border-slate-700/50">
                                    {skill.icon}
                                </div>
                                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{skill.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skill.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1.5 bg-slate-950/50 text-slate-400 text-[10px] font-bold rounded-lg border border-slate-800 border-white/5 uppercase tracking-wider group-hover:text-white transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERIENCE TIMELINE */}
            <section className="py-24 bg-slate-900/20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6 text-center md:text-left">
                        <div className="space-y-4">
                            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Career Journey</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-white italic italic-none uppercase tracking-tighter">Work <span className="text-gradient">Experience</span></h3>
                        </div>
                    </div>

                    <div className="relative space-y-12">
                        {experiences.map((exp, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-slate-800/40 border border-slate-700/50 p-10 rounded-[40px] hover:border-blue-500/30 transition-all"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700/50 text-primary">
                                            <Briefcase size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black text-white uppercase">{exp.role}</h4>
                                            <p className="text-primary font-bold text-sm tracking-wide">{exp.company}</p>
                                        </div>
                                    </div>
                                    <span className="px-6 py-2 bg-slate-950 border border-slate-700/50 rounded-xl text-xs font-black text-slate-400 uppercase tracking-widest">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-slate-400 leading-relaxed font-light italic italic-none border-l-2 border-primary/20 pl-6">
                                    "{exp.desc}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EDUCATION & LANGUAGES BENTO */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Education */}
                        <div className="lg:col-span-2 space-y-10">
                            <h3 className="text-3xl font-black text-white uppercase italic italic-none">Academic <span className="text-primary">Background</span></h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {education.map((edu, i) => (
                                    <div key={i} className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-[32px] hover:bg-slate-800/50 transition-all flex items-start gap-6">
                                        <div className="p-4 bg-slate-950 rounded-2xl text-primary border border-slate-800 border-white/5">
                                            <GraduationCap size={20} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 block">{edu.year} • {edu.status}</span>
                                            <h4 className="text-base font-black text-white uppercase tracking-tight leading-tight mb-1">{edu.degree}</h4>
                                            <p className="text-slate-500 text-xs italic italic-none">{edu.school}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Languages & Certificates */}
                        <div className="space-y-10">
                            <h3 className="text-3xl font-black text-white uppercase italic italic-none">Languages & <span className="text-primary">Extras</span></h3>
                            <div className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-[32px] space-y-6">
                                <div>
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Fluency</p>
                                    <div className="flex flex-wrap gap-3">
                                        {['English', 'Hindi', 'Gujarati'].map((lang) => (
                                            <span key={lang} className="px-4 py-2 bg-slate-950 rounded-xl border border-slate-800 text-sm font-bold text-white">{lang}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-slate-700/50">
                                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Special Certifications</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-400 text-sm">
                                            <Check size={16} className="text-primary" /> CCC Certified
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-400 text-sm">
                                            <Check size={16} className="text-primary" /> Mahindra Pride (Soft Skills)
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="p-10 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-[40px] relative overflow-hidden">
                                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Achievements</h4>
                                <div className="space-y-4">
                                    {achievements.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className="shrink-0">{item.icon}</div>
                                            <p className="text-xs font-bold text-slate-300 leading-tight">{item.title} <br/><span className="text-[10px] text-slate-500 uppercase">{item.detail}</span></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CONTACT SECTION */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">Let's <span className="text-gradient">Connect</span></h2>
                            <p className="text-xl text-slate-400 font-light italic italic-none">
                                Ready to scale your brand? Let's discuss your next digital growth strategy over a virtual coffee.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a href="mailto:parthpateldigital@gmail.com" className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-3xl flex items-center gap-4 hover:border-primary transition-all">
                                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-primary"><Mail size={20} /></div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase">Email Me</p>
                                        <p className="text-xs font-bold text-white truncate">parthpateldigital@gmail.com</p>
                                    </div>
                                </a>
                                <a href="tel:+917600907141" className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-3xl flex items-center gap-4 hover:border-primary transition-all">
                                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-primary"><Phone size={20} /></div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase">Call Me</p>
                                        <p className="text-xs font-bold text-white">+91 7600907141</p>
                                    </div>
                                </a>
                                <div className="p-6 bg-slate-800/40 border border-slate-700/50 rounded-3xl flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-primary"><MapPin size={20} /></div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase">Location</p>
                                        <p className="text-xs font-bold text-white">Bopal, Ahmedabad</p>
                                    </div>
                                </div>
                                <a href="/docs/Parth-Patel-Resume.pdf" download className="p-6 bg-primary/20 border border-primary/30 rounded-3xl flex items-center gap-4 hover:bg-primary/30 transition-all group">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform"><Download size={20} /></div>
                                    <div>
                                        <p className="text-[10px] font-bold text-primary uppercase">Download</p>
                                        <p className="text-xs font-black text-white">Official Resume</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Sleek Contact Form Box */}
                        <div className="p-10 bg-slate-900/50 border border-slate-700/50 rounded-[48px] shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                                <MessageCircle size={100} className="text-primary" />
                            </div>
                            <form className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-primary transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input type="email" placeholder="hello@example.com" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-primary transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                                    <textarea rows="4" placeholder="How can I help you grow?" className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 px-6 text-white text-sm focus:outline-none focus:border-primary transition-all resize-none"></textarea>
                                </div>
                                <button type="submit" className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ />
            <FinalCTA />
        </div>
    )
}

export default Portfolio;
