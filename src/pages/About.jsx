import React from 'react'
import { motion } from 'framer-motion'
import { Award, Target, Rocket, Heart, ChevronRight } from 'lucide-react'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

const About = () => {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden bg-dark">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-7xl font-bold text-white mb-8"
                        >
                            Driving Digital <span className="text-gradient">Success</span> Through Innovation
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-xl md:text-2xl leading-relaxed mb-12"
                        >
                            Digital Parth Patel is a result-oriented digital marketing agency dedicated to helping businesses grow their online presence and revenue through data-backed strategies.
                        </motion.p>
                    </div>
                </div>
                {/* Background Decorative */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
            </section>

            {/* Story Section */}
            <section className="py-24 border-y border-white/5 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-2 glass-card rounded-2xl border-white/10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                                alt="Our Agency Workspace"
                                className="rounded-xl w-full"
                                loading="lazy"
                            />
                            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl border-white/20 hidden md:block">
                                <p className="text-primary font-bold text-4xl mb-1">3+</p>
                                <p className="text-white text-sm uppercase tracking-widest">Years Experience</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white">
                                About <span className="text-primary italic">Digital Parth Patel</span>
                            </h2>
                            <p className="text-slate-400 text-lg">
                                Founded with a mission to simplify the complex world of digital marketing, we've helped hundreds of clients navigate the digital landscape and achieve their goals.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: 'Our Mission', icon: Target, text: 'To empower businesses with innovative digital solutions that drive real-world results.' },
                                    { title: 'Our Vision', icon: Rocket, text: 'To be the most trusted global partner for sustainable digital business growth.' },
                                    { title: 'Our Core Values', icon: Heart, text: 'Transparency, innovation, and client success are at the heart of everything we do.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Our Expertise - Reference Inspired Section */}
            <section className="py-24 bg-slate-900 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                        {/* Why Choose Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose Us?</h2>
                                <div className="w-20 h-1.5 bg-primary rounded-full" />
                            </div>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                                Trusted digital marketing partner delivering customized growth solutions, expert implementation, and comprehensive services to streamline your online presence, boost conversions, and drive business growth globally.
                            </p>
                        </motion.div>

                        {/* Our Expertise */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Expertise</h2>
                                <div className="w-20 h-1.5 bg-primary rounded-full" />
                            </div>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                                Digital Parth Patel is more than just a marketing service provider. We are your strategic growth partner, offering end-to-end digital solutions from initial strategy through execution, optimization, and ongoing support. Our expert services are designed to simplify complex marketing landscapes, optimize user journeys, and deliver real-time insights that drive better business decisions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats - Why choose us highlight */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Impact in Numbers</h2>
                        <p className="text-slate-400">Our success is measured by the growth of our partners.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: 'Completed Projects', value: '50+', icon: Award },
                            { label: 'Global Campaigns', value: '100+', icon: ChevronRight },
                            { label: 'Average ROI Increase', value: '250%', icon: ChevronRight }
                        ].map((stat, i) => (
                            <div key={i} className="glass-card p-12 rounded-3xl text-center border-white/5 hover:border-primary/20 transition-all">
                                <h3 className="text-5xl font-bold text-gradient mb-4">{stat.value}</h3>
                                <p className="text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Philosophy/Approach Section */}
            <section className="py-24 bg-slate-950 border-y border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-4"
                        >
                            The Digital <span className="text-primary italic">Philosophy</span>
                        </motion.h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">We don't just follow trends; we analyze data, understand human psychology, and build marketing engines that generate predictable ROI.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 rounded-3xl border-l-[3px] border-l-primary border-white/5"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Decisions</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                Gut feelings don't scale. Every strategy we deploy—from ad creatives to keyword selection—is backed by rigorous data analysis. We dive deep into analytics to see what works, pause what doesn't, and scale the winning variations. This ensures your budget is always prioritized for the highest return.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 rounded-3xl border-l-[3px] border-l-blue-500 border-white/5"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Design meets Psychology</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                A beautiful website isn't enough if it doesn't convert. We combine stunning, premium aesthetics with behavioral psychology. By understanding how users think, browse, and click, we design user journeys that subtly guide visitors toward becoming loyal, paying customers.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FAQ />
            <FinalCTA />
        </div>
    )
}

export default About
