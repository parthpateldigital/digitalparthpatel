import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StatCard({ label, value, icon: Icon, trend, trendValue, color = 'blue' }) {
    const isPositive = trend === 'up';

    const colorVariants = {
        blue: 'from-blue-600/20 to-indigo-600/20 text-blue-400 border-blue-500/20 group-hover:bg-blue-600/30',
        green: 'from-emerald-600/20 to-teal-600/20 text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-600/30',
        purple: 'from-purple-600/20 to-pink-600/20 text-purple-400 border-purple-500/20 group-hover:bg-purple-600/30',
        amber: 'from-amber-600/20 to-orange-600/20 text-amber-400 border-amber-500/20 group-hover:bg-amber-600/30',
    };

    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl overflow-hidden transition-all duration-500"
        >
            <div className={`absolute -right-6 -bottom-6 w-32 h-32 bg-gradient-to-br transition-all duration-700 blur-[80px] rounded-full group-hover:scale-150 group-hover:opacity-80 ${colorVariants[color]}`} />

            <div className="flex items-start justify-between relative z-10 mb-6 font-bold">
                <div className={`p-4 rounded-2xl bg-gradient-to-br transition-all duration-500 border shadow-lg group-hover:scale-110 ${colorVariants[color]}`}>
                    <Icon size={24} />
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold leading-none ${isPositive ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {trendValue}%
                </div>
            </div>

            <div className="relative z-10">
                <h4 className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-2 group-hover:text-slate-300 transition-colors">{label}</h4>
                <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-black text-white tracking-tight drop-shadow-2xl">{value}</p>
                    <span className="text-slate-500 text-xs font-medium">this month</span>
                </div>
            </div>

            {/* Progress Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 group-hover:bg-white/10 transition-all duration-500">
                <div className={`h-full bg-gradient-to-r ${colorVariants[color].split(' ')[0]} to-transparent group-hover:w-full transition-all duration-[2000ms] ease-out`} style={{ width: '45%' }} />
            </div>
        </motion.div>
    );
}
