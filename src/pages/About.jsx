import React from 'react'
import { motion } from 'framer-motion'
import { Award, Target, Rocket, Heart, ChevronRight } from 'lucide-react'
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
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                                alt="Workspace"
                                className="rounded-xl w-full"
                                loading="lazy"
                            />
                            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl border-white/20 hidden md:block">
                                <p className="text-primary font-bold text-4xl mb-1">5+</p>
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

            {/* Stats - Why choose us highlight */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Impact in Numbers</h2>
                        <p className="text-slate-400">Our success is measured by the growth of our partners.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: 'Completed Projects', value: '450+', icon: Award },
                            { label: 'Marketing Spend Managed', value: '$2M+', icon: ChevronRight },
                            { label: 'Average ROI Increase', value: '3.5x', icon: ChevronRight }
                        ].map((stat, i) => (
                            <div key={i} className="glass-card p-12 rounded-3xl text-center border-white/5 hover:border-primary/20 transition-all">
                                <h3 className="text-5xl font-bold text-gradient mb-4">{stat.value}</h3>
                                <p className="text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    )
}

export default About
