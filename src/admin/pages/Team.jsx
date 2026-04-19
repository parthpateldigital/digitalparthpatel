import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    User,
    Trash2,
    Edit3,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Globe,
    MoreVertical,
    Briefcase,
    ExternalLink,
    Save,
    ChevronDown,
    X,
    Search,
    Filter,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';

const initialTeam = [
    { id: 1, name: 'Parth Patel', role: 'Founder & CEO', bio: 'Digital marketing expert with 8+ years of experience helping brands scale globally through data-driven SEO and Ads.', image: '#', social: ['Linkedin', 'Twitter'] },
    { id: 2, name: 'Megha Sharma', role: 'Head of SEO', bio: 'Expert in technical SEO and content strategy with a proven track record of ranking complex websites in competitive niches.', image: '#', social: ['Linkedin', 'Instagram'] },
    { id: 3, name: 'Rahul Varma', role: 'Ads Manager', bio: 'Certified Google Ads specialist focused on maximizing ROI and scaling PPC campaigns for high-growth startups.', image: '#', social: ['Linkedin', 'Facebook'] },
];

export default function Team() {
    const [team, setTeam] = useState(initialTeam);
    const [showModal, setShowModal] = useState(false);
    const [currentMember, setCurrentMember] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const addToast = useToast();

    const handleDelete = (id) => {
        if (window.confirm('Remove this team member from the directory?')) {
            setTeam(team.filter(m => m.id !== id));
            addToast('Team member erased successfully', 'error');
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (currentMember) {
            setTeam(team.map(m => m.id === currentMember.id ? currentMember : m));
            addToast('Member info synchronized!', 'success');
        } else {
            addToast('New member added to the roster!', 'success');
        }
        setShowModal(false);
    };

    const filtered = team.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.role.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">Talent Roster</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Manage the internal talent behind Digital Parth Patel</p>
                </div>

                <button
                    onClick={() => { setCurrentMember(null); setShowModal(true); }}
                    className="flex items-center gap-2 px-8 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl group transition-all shrink-0"
                >
                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    Add Member
                </button>
            </div>

            {/* Control Area */}
            <GlassCard className="!p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-blue-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search team by name or role access..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <Filter size={16} className="text-slate-500 shrink-0" />
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 whitespace-nowrap">
                            {['All Talent', 'Admins', 'Editors', 'Support'].map((label) => (
                                <button
                                    key={label}
                                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${label === 'All Talent' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/10' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filtered.map((m) => (
                        <motion.div
                            layout
                            key={m.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <GlassCard className="h-full flex flex-col group/card hover:bg-white/[0.04] transition-all relative overflow-hidden">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-24 h-24 rounded-[32px] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-2 border-white/10 overflow-hidden flex items-center justify-center text-blue-500 group-hover/card:scale-110 transition-all duration-700 shadow-2xl shadow-blue-600/10 relative">
                                        <User size={48} />
                                        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="relative group/more">
                                        <button className="p-3 hover:bg-white/5 rounded-2xl text-slate-500 hover:text-white transition-all">
                                            <MoreVertical size={20} />
                                        </button>
                                        <div className="absolute top-12 right-0 w-48 bg-[#0f172a] border border-white/10 rounded-2xl p-2 opacity-0 group-hover/more:opacity-100 translate-y-2 group-hover/more:translate-y-0 transition-all z-20 shadow-2xl pointer-events-none group-hover/more:pointer-events-auto">
                                            <button onClick={() => addToast('Opening shared drive for ' + m.name, 'info')} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-600/10 text-xs font-bold text-slate-300 hover:text-blue-400 transition-colors">
                                                <ExternalLink size={14} /> View Assets
                                            </button>
                                            <button onClick={() => addToast('Profile details updated globally', 'success')} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-emerald-600/10 text-xs font-bold text-emerald-400 transition-colors mt-1">
                                                <CheckCircle2 size={14} /> Mark Active
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4 mb-8">
                                    <div>
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover/card:text-blue-400 transition-colors italic italic-none">{m.name}</h3>
                                        <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1 flex items-center gap-2 italic italic-none"><div className="w-1 h-1 bg-white rounded-full opacity-50" /> {m.role}</p>
                                    </div>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed italic line-clamp-3 italic-none">
                                        "{m.bio}"
                                    </p>
                                    <div className="flex items-center gap-3 pt-2">
                                        {m.social.map((s, i) => (
                                            <div key={i} onClick={() => addToast(`Opening ${s} profile...`, 'info')} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 hover:text-white hover:border-blue-500/30 transition-all cursor-pointer transform hover:scale-110 active:scale-90">
                                                {s === 'Linkedin' && <Linkedin size={18} />}
                                                {s === 'Twitter' && <Twitter size={18} />}
                                                {s === 'Instagram' && <Instagram size={18} />}
                                                {s === 'Facebook' && <Facebook size={18} />}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    <button
                                        onClick={() => { setCurrentMember(m); setShowModal(true); }}
                                        className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-bold hover:bg-white/10 hover:text-white hover:border-blue-500/30 transition-all transition-colors shadow-inner"
                                    >
                                        <Edit3 size={16} /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(m.id)}
                                        className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-rose-600/10 border border-rose-500/20 text-rose-400 font-bold hover:bg-rose-600/20 hover:text-rose-300 hover:border-rose-500/50 transition-all transition-colors"
                                    >
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Team Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
                            onClick={() => setShowModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-[48px] p-12 overflow-hidden pointer-events-auto shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            <h2 className="text-3xl font-black text-white mb-10 border-b border-white/5 pb-6 uppercase tracking-tighter italic italic-none">
                                {currentMember ? 'Edit Personnel Data' : 'Add Professional Talent'}
                            </h2>
                            <form onSubmit={handleSave} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2 italic italic-none">Legal Identity</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800" defaultValue={currentMember?.name} placeholder="E.g. Parth Patel" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2 italic italic-none">Company Designation</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800" defaultValue={currentMember?.role} placeholder="E.g. SEO Specialist" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2 italic italic-none">Professional Summary</label>
                                    <textarea required rows="4" className="w-full bg-white/5 border border-white/10 rounded-[28px] p-6 text-slate-300 font-medium leading-relaxed focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800 italic italic-none" defaultValue={currentMember?.bio} placeholder="Share their expertise and career highlights..." />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4">
                                    <div className="space-y-4">
                                        <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2 italic italic-none">Portrait Asset</label>
                                        <div onClick={() => addToast('Opening Asset Selector...', 'info')} className="h-[62px] cursor-pointer rounded-2xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-slate-600 font-bold text-[10px] uppercase tracking-widest hover:border-blue-500/50 hover:bg-blue-600/5 hover:text-blue-400 transition-all group overflow-hidden relative">
                                            <User size={18} className="mr-3 group-hover:scale-110 transition-transform" />
                                            Resolve Image
                                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2 italic italic-none">LinkedIn Resolution</label>
                                        <div className="relative group">
                                            <Linkedin size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-500/50" />
                                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-xs font-bold text-slate-400 focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10" placeholder="https://linkedin.com/in/..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-12 pb-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all transition-colors"
                                    >
                                        Discard
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-[2] py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl uppercase tracking-widest text-xs transition-transform hover:scale-105 active:scale-95"
                                    >
                                        Push Changes
                                    </button>
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
