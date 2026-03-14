import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

const FinalCTA = () => {
    return (
        <section className="py-12 bg-slate-950 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card p-12 md:p-20 rounded-[4rem] text-center max-w-5xl mx-auto overflow-hidden relative"
                >
                    {/* Decorative Ring */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className="space-y-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full"
                        >
                            <Sparkles className="text-primary animate-pulse" size={18} />
                            <span className="text-[12px] font-black text-slate-200 uppercase tracking-[0.3em]">Let's Work Together</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase">
                            Ready to <span className="text-gradient underline decoration-primary/20 underline-offset-[12px]">Dominate</span> <br className="hidden md:block" /> Your Market?
                        </h2>

                        <p className="text-slate-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                            Partner with <span className="text-white font-black glow-text">Digital Parth Patel</span> and witness a transformation in your revenue.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
                            <Link
                                to="/contact"
                                className="btn-gradient px-12 py-6 rounded-[2rem] text-xl font-black inline-flex items-center gap-4 shadow-2xl shadow-primary/40 group active:scale-95 transition-all overflow-hidden"
                            >
                                <span className="relative z-10">Start Your Journey</span>
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />
                            </Link>

                            <div className="flex -space-x-4 items-center">
                                {[1, 2, 3, 4].map(i => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-12 h-12 rounded-full border-4 border-slate-900 overflow-hidden bg-slate-800 shadow-xl"
                                    >
                                        <img src={`https://i.pravatar.cc/150?u=user${i + 10}`} alt="Client" />
                                    </motion.div>
                                ))}
                                <div className="ml-6 text-left">
                                    <div className="text-white font-black text-sm uppercase tracking-wider">Join 200+</div>
                                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest opacity-70">Successful Partners</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default FinalCTA
