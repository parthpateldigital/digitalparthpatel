import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Trash2,
    Edit3,
    Star,
    Quote,
    User,
    Search,
    Filter,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Clock,
    ExternalLink,
    ChevronRight,
    Info,
    X
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';

const initialTestimonials = [
    { id: 1, name: 'Suresh Kumar', role: 'CEO, TechNext', review: 'Parth and his team transformed our digital presence. Our organic traffic grew by 300% within 6 months of starting their SEO services.', rating: 5, date: '20 Feb 2026', status: 'Published' },
    { id: 2, name: 'Aditi Sharma', role: 'Founder, GlamourHub', review: 'The Google Ads strategy implemented by Digital Parth Patel delivered an incredible ROI of 5x. Their data-driven approach is truly unique.', rating: 5, date: '18 Feb 2026', status: 'Published' },
    { id: 3, name: 'Rahul Varma', role: 'CTO, DevX Solutions', review: 'Professional, strategic and results-oriented. They don’t just deliver reports; they deliver growth. Highly recommended for any serious business.', rating: 4, date: '15 Feb 2026', status: 'Draft' },
];

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [showModal, setShowModal] = useState(false);
    const [currentReview, setCurrentReview] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const addToast = useToast();

    const handleToggleStatus = (id) => {
        setTestimonials(testimonials.map(t => t.id === id ? { ...t, status: t.status === 'Published' ? 'Draft' : 'Published' } : t));
        addToast('Status updated successfully!', 'info');
    };

    const handleDelete = (id) => {
        if (window.confirm('Remove this testimonial?')) {
            setTestimonials(testimonials.filter(t => t.id !== id));
            addToast('Review deleted permanently', 'error');
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        addToast(currentReview ? 'Review updated!' : 'New review added!', 'success');
        setShowModal(false);
    };

    const filtered = testimonials.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">Social Proof & Reviews</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Manage client testimonials and reputation across the site</p>
                </div>

                <button
                    onClick={() => { setCurrentReview(null); setShowModal(true); }}
                    className="flex items-center gap-2 px-8 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl group transition-all"
                >
                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    Add Feedback
                </button>
            </div>

            <GlassCard className="!p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-blue-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Filter by client name or company..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <Filter size={16} className="text-slate-500 shrink-0" />
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 whitespace-nowrap">
                            {['All Reviews', 'Published', 'Drafts', 'Ratings'].map((label) => (
                                <button
                                    key={label}
                                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${label === 'All Reviews' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/10' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filtered.map((t) => (
                        <motion.div
                            layout
                            key={t.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <GlassCard className="h-full flex flex-col group hover:bg-white/[0.04] transition-all cursor-normal relative">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-2 border-white/10 overflow-hidden flex items-center justify-center text-blue-400 shadow-2xl shadow-blue-500/10 group-hover:scale-110 transition-transform duration-700">
                                        <User size={32} />
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-amber-400 shadow-lg shadow-amber-500/10">
                                        <Star size={12} fill="currentColor" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{t.rating}.0</span>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4 mb-10">
                                    <div className="flex items-center gap-2">
                                        <Quote size={24} className="text-blue-500/30 shrink-0" />
                                        <h3 className="text-xl font-black text-white italic italic-none leading-tight">{t.name}</h3>
                                    </div>
                                    <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest italic flex items-center gap-2 italic-none"><ChevronRight size={10} /> {t.role}</p>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed italic line-clamp-4">
                                        "{t.review}"
                                    </p>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/5 pt-6 mb-8">
                                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest italic italic-none">
                                        <Calendar size={12} /> {t.date}
                                    </div>
                                    <button onClick={() => handleToggleStatus(t.id)} className={`px-2.5 py-1 rounded-lg border text-[8px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${t.status === 'Published' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-lg shadow-emerald-500/10' : 'bg-slate-800 text-slate-500 border-white/10'}`}>
                                        {t.status}
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    <button
                                        onClick={() => { setCurrentReview(t); setShowModal(true); }}
                                        className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-bold hover:bg-white/10 hover:text-white hover:border-blue-500/30 transition-all transition-colors"
                                    >
                                        <Edit3 size={16} /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(t.id)}
                                        className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-rose-600/10 border border-rose-500/10 text-rose-400 font-bold hover:bg-rose-600/20 hover:text-rose-300 hover:border-rose-500/30 transition-all transition-colors shadow-inner"
                                    >
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
                            onClick={() => setShowModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-[48px] p-12 overflow-hidden pointer-events-auto shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            <h2 className="text-3xl font-black text-white mb-10 border-b border-white/5 pb-6 uppercase tracking-tighter italic">
                                {currentReview ? 'Edit Client Feedback' : 'Initialize New Endorsement'}
                            </h2>
                            <form onSubmit={handleSave} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic flex items-center gap-2 italic-none"><User size={12} className="text-blue-500" /> Client Identity</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800" placeholder="E.g. Suresh Kumar" defaultValue={currentReview?.name} />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic flex items-center gap-2 italic-none"><ChevronRight size={12} className="text-blue-500" /> Role & Company</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800" placeholder="E.g. CEO, TechNext" defaultValue={currentReview?.role} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic flex items-center gap-2 italic-none"><Quote size={12} className="text-blue-500" /> Detailed Review Experience</label>
                                    <textarea required rows="4" className="w-full bg-white/5 border border-white/10 rounded-[28px] p-6 text-slate-300 font-medium leading-relaxed focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800 italic italic-none" placeholder="Paste or type the client's original feedback here..." defaultValue={currentReview?.review} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 italic flex items-center gap-2 italic-none"><Star size={12} className="text-blue-500" /> Star Architecture (1-5)</label>
                                        <div className="flex bg-white/5 border border-white/10 rounded-2xl p-4 items-center justify-between group overflow-hidden relative">
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map(i => (
                                                    <Star key={i} size={18} fill={i <= (currentReview?.rating || 5) ? 'currentColor' : 'none'} className={i <= (currentReview?.rating || 5) ? 'text-amber-400' : 'text-slate-700'} />
                                                ))}
                                            </div>
                                            <span className="text-xs font-black text-white italic italic-none">Score Locked</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 flex items-center gap-2 italic italic-none"><Clock size={12} className="text-blue-500" /> Status Routing</label>
                                        <div className="flex items-center gap-4 pt-1">
                                            <button type="button" className="flex-1 py-3 bg-emerald-600/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-emerald-500/5">Published</button>
                                            <button type="button" className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-500 font-bold text-[10px] uppercase tracking-widest opacity-40">Draft Mode</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-12 pb-2">
                                    <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all transition-colors">Discard</button>
                                    <button type="submit" className="flex-[2] py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl uppercase tracking-widest text-xs transition-transform hover:scale-105 active:scale-95">Authorize Feedback</button>
                                </div>
                            </form>

                            <button onClick={() => setShowModal(false)} className="absolute top-10 right-10 text-slate-600 hover:text-white transition-colors">
                                <X size={28} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
