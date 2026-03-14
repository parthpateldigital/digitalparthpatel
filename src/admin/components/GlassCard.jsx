import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hoverEffect = true, title = '', action = null }) {
    const hoverStyles = hoverEffect
        ? "hover:border-blue-500/30 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-500 cursor-default"
        : "";

    return (
        <div className={`p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-3xl overflow-hidden relative group ${hoverStyles} ${className}`}>
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700 -translate-y-1/2 translate-x-1/2" />

            {(title || action) && (
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-blue-600 rounded-full" />
                        {title}
                    </h3>
                    {action && (
                        <div className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors cursor-pointer group/action flex items-center gap-1.5">
                            {action}
                            <div className="w-4 h-4 rounded-full border border-blue-500/30 flex items-center justify-center p-0.5 group-hover/action:bg-blue-500/10">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
}
