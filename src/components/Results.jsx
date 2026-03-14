import React from 'react'
import { motion } from 'framer-motion'
import { UserCheck, Rocket, Zap, Globe } from 'lucide-react'

const stats = [
    { label: 'Happy Clients', value: '200+', icon: UserCheck },
    { label: 'Campaigns Done', value: '500+', icon: Rocket },
    { label: 'Traffic Generated', value: '1M+', icon: Globe },
    { label: 'Positive ROI', value: '98%', icon: Zap },
]

const Results = () => {
    return (
        <section className="py-10 bg-dark relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="glass-card py-12 px-8 rounded-[3rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: "backOut" }}
                                className="space-y-4 group"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 text-primary mb-2 border border-white/10 shadow-xl group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                                    <stat.icon size={28} />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight glow-text">
                                    {stat.value}
                                </h3>
                                <p className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.25em]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Results
