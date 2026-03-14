import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Sparkles, Zap, TrendingUp } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative pt-24 pb-8 md:pt-36 md:pb-12 overflow-hidden bg-slate-950">
            {/* Cleaner Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[60%] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                        >
                            <Sparkles className="text-primary" size={16} />
                            <span className="text-[10px] md:text-xs font-bold text-slate-200 uppercase tracking-[0.2em]">Scale Your Success</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6"
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] text-white uppercase tracking-tight">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="block"
                                >
                                    We Grow Your
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="block"
                                >
                                    Business With
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="text-gradient underline decoration-primary/30 underline-offset-8"
                                >
                                    Powerful
                                </motion.span> Digital Marketing
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-light"
                            >
                                From <span className="text-white font-medium">SEO mastery</span> to high-performance <span className="text-white font-medium">Paid Ads</span>. We build digital ecosystems that don't just exist—they dominate.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <Link
                                to="/contact"
                                className="group btn-gradient px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg active:scale-95 transition-all"
                            >
                                <span>Get Free Consultation</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                to="/#services"
                                className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl text-lg font-bold transition-all text-white flex items-center justify-center gap-3 w-full sm:w-auto"
                            >
                                <span>View Our Services</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 opacity-50"
                        >
                            <div className="flex items-center gap-2">
                                <Zap className="text-primary fill-primary" size={16} />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">ROI Focused</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="text-primary fill-primary" size={16} />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">Expert Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="text-yellow-400 fill-yellow-400" size={16} />
                                <span className="text-xs font-bold text-white uppercase tracking-wider">Top Rated</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Column */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative z-20 group"
                        >
                            <div className="relative p-2 rounded-3xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                                    alt="Marketing Insights Dashboard"
                                    className="rounded-2xl w-full aspect-[4/5] object-cover"
                                />

                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950/90 to-transparent">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-green-500/20 rounded-lg">
                                                <TrendingUp className="text-green-400" size={16} />
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Performance</div>
                                                <div className="text-white font-bold text-sm">+245.8% Growth</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
