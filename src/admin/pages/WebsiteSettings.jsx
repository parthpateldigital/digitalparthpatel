import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe,
    Layout,
    Palette,
    ShieldCheck,
    Smartphone,
    Search,
    Zap,
    Share2,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Save,
    RotateCcw,
    Upload,
    ExternalLink,
    ChevronRight,
    Monitor,
    CheckCircle2,
    AlertCircle,
    XCircle,
    Moon,
    Sun,
    Loader2,
    X,
    Info
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';

export default function WebsiteSettings() {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('branding');
    const addToast = useToast();

    const handleSave = (e) => {
        e.preventDefault();
        setLoading(true);
        addToast('Synchronizing global website variables...', 'info');
        setTimeout(() => {
            setLoading(false);
            addToast('Branding & identity updated globally!', 'success');
        }, 1500);
    };

    const menuItems = [
        { id: 'branding', label: 'Identity', icon: Globe },
        { id: 'layout', label: 'Navigation', icon: Layout },
        { id: 'theme', label: 'Design System', icon: Palette },
        { id: 'social', label: 'Connectivity', icon: Share2 },
        { id: 'security', label: 'Integrity', icon: ShieldCheck },
    ];

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2 uppercase tracking-tighter">Site Intelligence</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Manage the core identity or Digital Parth Patel</p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => addToast('Resetting configuration to factory defaults...', 'warning')}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-300 font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]"
                    >
                        <RotateCcw size={16} /> Revert
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="flex items-center gap-2 px-10 py-5 btn-gradient rounded-[28px] font-black shadow-blue-500/30 shadow-2xl group transition-all shrink-0 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : (
                            <>
                                <Save size={20} className="group-hover:translate-x-1 transition-transform" />
                                Commit Protocol
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Navigation Sidebar */}
                <div className="xl:col-span-1 space-y-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full group flex items-center justify-between p-6 rounded-[32px] border-2 transition-all text-left ${activeTab === item.id ? 'bg-blue-600/10 border-blue-600 shadow-xl shadow-blue-600/10' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                        >
                            <div className="flex items-center gap-5">
                                <div className={`p-3.5 rounded-2xl transition-all ${activeTab === item.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 scale-110' : 'bg-white/5 text-slate-500'}`}>
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1.5 ${activeTab === item.id ? 'text-blue-400' : 'text-slate-500'}`}>{item.label}</p>
                                    <p className={`text-xs font-bold ${activeTab === item.id ? 'text-white' : 'text-slate-700'}`}>Protocol: ACTIVE</p>
                                </div>
                            </div>
                            <ChevronRight size={18} className={`transition-all ${activeTab === item.id ? 'text-blue-500 translate-x-1' : 'text-slate-700 opacity-0 group-hover:opacity-100'}`} />
                        </button>
                    ))}
                </div>

                {/* Dynamic Settings Pane */}
                <div className="xl:col-span-3 space-y-8">
                    <AnimatePresence mode="wait">
                        {activeTab === 'branding' && (
                            <motion.div
                                key="branding" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <GlassCard title="Entity Branding Assets">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none">Logo Primary Node</label>
                                            <div className="h-48 rounded-[40px] border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center group cursor-pointer hover:border-blue-500/50 hover:bg-blue-600/5 transition-all overflow-hidden relative shadow-inner">
                                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-700 mb-4 group-hover:scale-110 group-hover:text-blue-500 transition-all">
                                                    <Upload size={24} />
                                                </div>
                                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest italic italic-none">Select File Identity</p>
                                                <p className="text-[8px] text-slate-700 font-bold uppercase tracking-[0.2em] mt-1 italic italic-none">SVG, PNG (MAX 5MB)</p>
                                                <button type="button" onClick={() => addToast('Opening Cloud File Interface...', 'info')} className="absolute inset-0 z-10" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none">Favicon Resolution</label>
                                            <div className="h-48 rounded-[40px] border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center group cursor-pointer hover:border-blue-500/50 hover:bg-blue-600/5 transition-all overflow-hidden relative shadow-inner">
                                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-700 mb-4 group-hover:scale-110 group-hover:text-blue-500 transition-all">
                                                    <Monitor size={24} />
                                                </div>
                                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest italic italic-none">Select Icon Data</p>
                                                <p className="text-[8px] text-slate-700 font-bold uppercase tracking-[0.2em] mt-1 italic italic-none">ICO, PNG (32x32px)</p>
                                                <button type="button" onClick={() => addToast('Opening Icon Asset Manager...', 'info')} className="absolute inset-0 z-10" />
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>

                                <GlassCard title="Entity Metadata Specification">
                                    <div className="space-y-8 pt-4">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none flex items-center gap-2"><Globe size={12} className="text-blue-500" /> Site Identity Title</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white font-bold focus:outline-none focus:border-blue-500 transition-all" defaultValue="Digital Parth Patel" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none flex items-center gap-2"><Layout size={12} className="text-blue-500" /> Slogan / Catchphrase Node</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-slate-300 font-medium italic italic-none focus:outline-none focus:border-blue-500 transition-all" defaultValue="Empowering Businesses, Transforming Brands Globally" />
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        )}

                        {activeTab === 'social' && (
                            <motion.div
                                key="social" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <GlassCard title="Global Signal Mapping">
                                    <div className="space-y-8 pt-4">
                                        {[
                                            { icon: Facebook, label: 'Facebook Endpoint', color: 'text-blue-500' },
                                            { icon: Twitter, label: 'Twitter Node', color: 'text-sky-400' },
                                            { icon: Instagram, label: 'Instagram Feed', color: 'text-rose-500' },
                                            { icon: Linkedin, label: 'Linkedin Network', color: 'text-blue-600' }
                                        ].map((soc, i) => (
                                            <div key={i} className="space-y-3 group/row">
                                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic flex items-center gap-2 italic-none"><soc.icon size={12} className={soc.color} /> {soc.label}</label>
                                                <div className="relative group">
                                                    <soc.icon size={18} className={`absolute left-6 top-1/2 -translate-y-1/2 ${soc.color} opacity-40 group-focus-within:opacity-100 transition-opacity pointer-events-none`} />
                                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4.5 pl-16 pr-6 text-white font-mono text-xs focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 italic italic-none" placeholder="https://" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        )}

                        {activeTab === 'theme' && (
                            <motion.div
                                key="theme" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <GlassCard title="Design System Infrastructure">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none">Primary Hue Specification</label>
                                            <div className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-3xl items-center justify-between cursor-pointer hover:border-blue-500/50 transition-all">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-blue-600 shadow-xl shadow-blue-600/30" />
                                                    <span className="text-xs font-black text-white italic">#2563EB</span>
                                                </div>
                                                <Palette size={16} className="text-slate-700" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none">Global Darkness Protocol</label>
                                            <div className="flex p-2 bg-white/5 border border-white/10 rounded-[24px] items-center relative gap-1">
                                                <button onClick={() => addToast('System theme locked to Dark Protocol', 'info')} className="flex-1 py-3.5 rounded-2xl bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20"><Moon size={14} /> Dark</button>
                                                <button onClick={() => addToast('System theme set to Luminosity Protocol', 'info')} className="flex-1 py-3.5 rounded-2xl text-slate-500 font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/5 transition-all"><Sun size={14} /> Light</button>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic italic-none">Font Scaling Node</label>
                                            <div className="flex p-4 bg-white/5 border border-white/10 rounded-3xl items-center justify-between cursor-pointer italic italic-none">
                                                <span className="text-xs font-black text-white lowercase tracking-widest italic italic-none">Inter-Var</span>
                                                <div className="flex gap-1">
                                                    {[1, 2, 3].map(i => <div key={i} className={`w-1 h-3 rounded-full ${i === 2 ? 'bg-blue-500' : 'bg-white/10'}`} />)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <GlassCard border="blue" className="border-blue-500/10">
                        <div className="flex items-start gap-5 p-2 italic italic-none">
                            <div className="p-3 bg-blue-600/10 border border-blue-500/30 rounded-2xl text-blue-500 shrink-0 shadow-lg shadow-blue-600/10">
                                <Zap size={22} />
                            </div>
                            <div>
                                <h5 className="text-lg font-black text-white italic italic-none mb-1 uppercase tracking-tight">Identity Synchronization</h5>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium italic italic-none">
                                    Changes to your site identity and global design tokens are synchronized across your distributed CDN nodes immediately after committing protocol.
                                </p>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                                        <CheckCircle2 size={12} /> Node Status: Resolved
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                                        <Clock size={12} /> Last Commit: 14:22 GMT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
