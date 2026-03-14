import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe,
    Search,
    Settings,
    Save,
    RotateCcw,
    ExternalLink,
    CheckCircle2,
    AlertCircle,
    Link,
    Info,
    ChevronRight
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';

const initialSeoData = {
    home: { title: 'Digital Parth Patel | Leading Marketing Agency in Ahmedabad', description: 'Transform your business with Digital Parth Patel. Expert SEO, Google Ads, and Branding services designed to scale your ROI globally.', keywords: 'marketing agency, seo experts ahmedabad, google ads manager, digital parth patel', canonical: 'https://digitalparthpatel.com/' },
    services: { title: 'Our Digital Services | SEO, Ads & Branding | Digital Parth Patel', description: 'Explore our full suite of digital marketing services. From local SEO to international search dominance, we help you win.', keywords: 'seo services, ppc management, web design agency', canonical: 'https://digitalparthpatel.com/services' },
    blog: { title: 'Digital Marketing Insights & Tutorials | Digital Parth Patel Blog', description: 'Stay updated with the latest trends in digital marketing. Read expert guides on SEO, Google Ads, and content strategy.', keywords: 'marketing blog, seo tips, ads strategy', canonical: 'https://digitalparthpatel.com/blog' },
};

export default function SeoSettings() {
    const [seoData, setSeoData] = useState(initialSeoData);
    const [activePage, setActivePage] = useState('home');
    const [formData, setFormData] = useState(initialSeoData.home);
    const addToast = useToast();

    const handlePageChange = (page) => {
        setActivePage(page);
        setFormData(seoData[page]);
        addToast(`Configuration loaded for ${page.toUpperCase()} page`, 'info');
    };

    const handleSave = () => {
        setSeoData({ ...seoData, [activePage]: formData });
        addToast('SEO Metadata synchronized successfully!', 'success');
    };

    const handleReset = () => {
        setFormData(initialSeoData[activePage]);
        addToast('Resetting fields to default values', 'warning');
    };

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">SEO Intelligence</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Optimize your search presence for maximum visibility</p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-300 font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]"
                    >
                        <RotateCcw size={16} /> Reset
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-8 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl lg:px-12 group transition-all"
                    >
                        <Save size={20} className="group-hover:scale-110 transition-transform" />
                        Synchronize Meta
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Page Navigation Sidebar */}
                <div className="xl:col-span-1 space-y-4">
                    {Object.keys(seoData).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-full group flex items-center justify-between p-6 rounded-3xl border-2 transition-all text-left ${activePage === page ? 'bg-blue-600/10 border-blue-600 shadow-xl shadow-blue-600/10' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl transition-all ${activePage === page ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 scale-110' : 'bg-white/5 text-slate-500'}`}>
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <p className={`text-xs font-black uppercase tracking-widest leading-none mb-1 ${activePage === page ? 'text-blue-400' : 'text-slate-500'}`}>{page}</p>
                                    <p className={`text-xs font-bold truncate max-w-[120px] ${activePage === page ? 'text-white' : 'text-slate-600'}`}>{seoData[page].title}</p>
                                </div>
                            </div>
                            <ChevronRight size={18} className={`transition-all ${activePage === page ? 'text-blue-500 translate-x-1' : 'text-slate-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white'}`} />
                        </button>
                    ))}

                    <GlassCard className="mt-8 border-blue-500/10">
                        <div className="flex items-start gap-4">
                            <Info className="text-blue-500 shrink-0 mt-0.5" size={18} />
                            <p className="text-xs text-slate-500 font-medium leading-relaxed italic italic-none">
                                Updates to metadata can take 24-48 hours to reflect in Google Search results after indexing.
                            </p>
                        </div>
                    </GlassCard>
                </div>

                {/* SEO Management Form */}
                <div className="xl:col-span-3 space-y-8">
                    <GlassCard title={`Metadata Configuration: ${activePage.toUpperCase()}`}>
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <div className="flex justify-between items-end pl-2">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest italic flex items-center gap-2 italic-none"><Search size={14} className="text-blue-500" /> Meta Title</label>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${formData.title.length > 60 ? 'text-rose-500 animate-pulse' : 'text-emerald-500'}`}>{formData.title.length} / 60 Characters</span>
                                </div>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-end pl-2">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2 italic italic-none"><Settings size={14} className="text-blue-500" /> Meta Description</label>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${formData.description.length > 160 ? 'text-rose-500 animate-pulse' : 'text-emerald-500'}`}>{formData.description.length} / 160 Characters</span>
                                </div>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-slate-300 font-medium leading-relaxed focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2 italic flex items-center gap-2 italic-none"><Link size={14} className="text-blue-500" /> Canonical URL</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-mono text-blue-400 focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10"
                                        value={formData.canonical}
                                        onChange={(e) => setFormData({ ...formData, canonical: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest pl-2 italic flex items-center gap-2 italic-none"><Globe size={14} className="text-blue-500" /> Keywords (Comma Separated)</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-medium text-slate-300 focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10"
                                        value={formData.keywords}
                                        onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Realistic Google Search Preview */}
                    <GlassCard title="Google Search Snippet Preview">
                        <div className="p-8 rounded-[32px] bg-white border border-white/10 mb-4 shadow-2xl relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink size={14} className="text-slate-300" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-[12px] text-[#202124] mb-1">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                                        <Globe size={12} />
                                    </div>
                                    <span className="font-medium">digitalparthpatel.com</span>
                                    <span className="text-slate-500 text-[10px] uppercase">› {activePage}</span>
                                </div>
                                <h3 className="text-[20px] text-[#1a0dab] font-medium leading-tight group-hover:underline cursor-pointer">{formData.title}</h3>
                                <p className="text-[14px] text-[#4d5156] leading-relaxed max-w-[600px] line-clamp-2">
                                    <span className="font-bold text-slate-500 text-[11px] uppercase mr-2 tracking-widest">28-Feb-2026 —</span>
                                    {formData.description}
                                </p>
                            </div>
                            {/* Google Ads Mock badge for preview context */}
                            <div className="absolute bottom-4 right-8 flex items-center gap-2 opacity-5 pointer-events-none grayscale">
                                <Search size={48} />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-4 text-slate-500">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <p className="text-[10px] font-black uppercase tracking-widest py-2">Preview rendering based on standard desktop search protocols</p>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
