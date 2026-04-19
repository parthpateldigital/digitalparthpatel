import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Save,
    Globe,
    Clock,
    Share2,
    ExternalLink,
    Info,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';

export default function ContactSettings() {
    const [loading, setLoading] = useState(false);
    const addToast = useToast();

    const handleSave = (e) => {
        e.preventDefault();
        setLoading(true);
        addToast('Synchronizing contact definitions...', 'info');

        setTimeout(() => {
            setLoading(false);
            addToast('Global contact configuration updated!', 'success');
        }, 1500);
    };

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2 uppercase tracking-tighter italic italic-none">Contact Architecture</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Synchronize company contact definitions and geographic nodes</p>
                </div>

                <button
                    onClick={handleSave}
                    disabled={loading}
                    className="flex items-center gap-3 px-10 py-5 btn-gradient rounded-[28px] font-black shadow-blue-500/30 shadow-2xl group transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                    {loading ? <Loader2 className="animate-spin" size={24} /> : (
                        <>
                            <Save size={20} className="group-hover:translate-y-[-2px] transition-transform" />
                            Save Definitions
                        </>
                    )}
                </button>
            </div>

            <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <GlassCard title="Global Business Identity">
                        <div className="space-y-8 pt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none flex items-center gap-2"><Phone size={12} className="text-blue-500" /> Authorized Phone</label>
                                    <div className="relative group">
                                        <Phone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors pointer-events-none" />
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4.5 pl-16 pr-6 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800" defaultValue="+91 76009 07141" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none flex items-center gap-2"><Mail size={12} className="text-blue-500" /> Primary Email Node</label>
                                    <div className="relative group">
                                        <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors pointer-events-none" />
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4.5 pl-16 pr-6 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800" defaultValue="hello@digitalparth.com" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none flex items-center gap-2"><MessageCircle size={12} className="text-emerald-500" /> WhatsApp Direct Link Key</label>
                                <div className="relative group">
                                    <MessageCircle size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-emerald-500 transition-colors pointer-events-none" />
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4.5 pl-16 pr-6 text-emerald-400 font-bold focus:outline-none focus:border-emerald-500/50 transition-all focus:bg-white/10 placeholder:text-slate-800 shadow-inner" defaultValue="+91 76009 07141" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none flex items-center gap-2"><MapPin size={12} className="text-rose-500" /> Geographic Physical Address</label>
                                <div className="relative group">
                                    <MapPin size={18} className="absolute left-6 top-6 text-slate-600 group-focus-within:text-rose-500 transition-colors pointer-events-none" />
                                    <textarea rows="3" className="w-full bg-white/5 border border-white/10 rounded-[28px] py-6 pl-16 pr-6 text-slate-300 font-medium leading-relaxed focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800 italic italic-none" defaultValue="4th Floor, Marketing Heights, 12th Main Road, Ahmedabad, Gujarat - 380001, India" />
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard title="Operational Window Management">
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic flex items-center gap-2 italic-none"><Clock size={12} className="text-blue-500" /> Standard Weekdays</label>
                                <div className="relative group">
                                    <Clock size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-14 pr-4 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10" defaultValue="9:00 AM - 7:00 PM" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic flex items-center gap-2 italic-none"><Clock size={12} className="text-rose-500" /> Standard Weekends</label>
                                <div className="relative group">
                                    <Clock size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-rose-500 transition-colors" />
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-14 pr-4 text-rose-400 font-bold focus:outline-none focus:border-rose-500 transition-all focus:bg-white/10" defaultValue="Closed" />
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                <div className="space-y-8">
                    <GlassCard title="Google Maps Protocol Integration">
                        <div className="space-y-6 pt-4">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 flex items-center justify-between">
                                    <span className="flex items-center gap-2 italic italic-none"><Globe size={12} className="text-blue-500" /> Embed iframe definition</span>
                                    <span onClick={() => addToast('Fetching latest coordinates from Google...', 'info')} className="text-[9px] text-blue-400 hover:text-white cursor-pointer transition-colors border-b border-blue-500/20">Find Coordinates?</span>
                                </label>
                                <textarea rows="4" className="w-full bg-[#020617] border border-white/10 rounded-[32px] p-6 text-[10px] text-blue-400 font-mono focus:outline-none focus:border-blue-500 transition-all leading-relaxed shadow-inner opacity-60 focus:opacity-100" defaultValue='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117502.26126600494!2d72.439366551603!3d23.021003463765187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd70d68f0446!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709224400000!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>' />
                            </div>
                            <div className="h-64 rounded-[40px] overflow-hidden border border-white/10 bg-white/5 relative group cursor-crosshair">
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 group-hover:bg-black/20 transition-all">
                                    <button type="button" onClick={() => addToast('Refreshing location preview...', 'info')} className="px-8 py-4 bg-blue-600/10 backdrop-blur-md border border-blue-500/30 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-blue-600/20 active:scale-95 transition-all">
                                        Preview Resolution
                                    </button>
                                </div>
                                <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-700">
                                    <MapPin size={80} className="opacity-10 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard title="Trust Signals Compliance" className="border-blue-500/10">
                        <div className="flex items-start gap-4 p-2 relative group italic italic-none">
                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
                            <Info className="text-blue-500 shrink-0 mt-0.5" size={20} />
                            <div className="relative z-10">
                                <p className="text-xs text-slate-500 font-medium leading-relaxed italic border-b border-white/5 pb-2 mb-2 italic-none">
                                    Ensure all contact information matches your Google Business Profile for consistent NAP (Name, Address, Phone) SEO ranking data.
                                </p>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={12} className="text-emerald-500" />
                                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Protocol Verified • 28-Feb-2026</span>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </form>
        </div>
    );
}
