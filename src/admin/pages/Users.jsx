import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users as UsersIcon,
    UserPlus,
    Trash2,
    Edit3,
    Shield,
    Key,
    Search,
    Filter,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Clock,
    Lock,
    Unlock,
    ShieldAlert,
    Save,
    Mail,
    Smartphone,
    ChevronRight,
    Info,
    X,
    UserCheck,
    Zap,
    ShieldCheck,
    AlertCircle
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';

const initialUsers = [
    { id: 1, name: 'Parth Patel', email: 'parth@digitalparth.com', role: 'Super Admin', status: 'Active', lastLogin: '2 Hours ago', loginIp: '192.168.1.1' },
    { id: 2, name: 'Megha Sharma', email: 'megha@digitalparth.com', role: 'Editor', status: 'Active', lastLogin: 'Yesterday', loginIp: '192.168.1.45' },
    { id: 3, name: 'Rahul Varma', role: 'Ad Manager', email: 'rahul@digitalparth.com', status: 'Inactive', lastLogin: '5 Days ago', loginIp: '102.45.1.2' },
];

export default function Users() {
    const [users, setUsers] = useState(initialUsers);
    const [showInviteModal, setShowInviteModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const addToast = useToast();

    const handleToggleStatus = (id) => {
        setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u));
        addToast('Security access status modified!', 'info');
    };

    const handleInvite = (e) => {
        e.preventDefault();
        addToast('Authorization invite sent to ' + e.target.email.value, 'success');
        setShowInviteModal(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Revoke all access for this identity?')) {
            setUsers(users.filter(u => u.id !== id));
            addToast('Security credentials purged', 'error');
        }
    };

    const filtered = users.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2 uppercase tracking-tighter">Security & Personnel</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Manage authenticated administrative identities and access level routing</p>
                </div>

                <button
                    onClick={() => setShowInviteModal(true)}
                    className="flex items-center gap-3 px-8 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl group transition-all shrink-0"
                >
                    <UserPlus size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Invite Sub-Admin
                </button>
            </div>

            {/* Control Area */}
            <GlassCard className="!p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-blue-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search authenticated identities by name or email..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10 italic italic-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <Filter size={16} className="text-slate-500 shrink-0" />
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 whitespace-nowrap">
                            {['All Access', 'Super Admin', 'Editors', 'Inactive'].map((label) => (
                                <button
                                    key={label}
                                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${label === 'All Access' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/10' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Identities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filtered.map((u) => (
                        <motion.div
                            layout
                            key={u.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <GlassCard className="h-full flex flex-col group/card hover:bg-white/[0.04] transition-all relative overflow-hidden">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-2 border-white/10 overflow-hidden flex items-center justify-center text-blue-400 shadow-2xl shadow-blue-600/10 group-hover/card:scale-110 transition-all duration-700 relative">
                                            <UsersIcon size={32} />
                                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-white italic italic-none leading-none mb-1.5">{u.name}</h3>
                                            <p className={`text-[10px] font-black uppercase tracking-[0.2em] italic italic-none ${u.role === 'Super Admin' ? 'text-amber-500 shadow-amber-500/20 shadow-xl' : 'text-blue-500'}`}>{u.role}</p>
                                        </div>
                                    </div>
                                    <div className="relative group/more">
                                        <button className="p-3 hover:bg-white/5 rounded-2xl text-slate-500 hover:text-white transition-all">
                                            <MoreVertical size={20} />
                                        </button>
                                        <div className="absolute top-12 right-0 w-52 bg-[#0f172a] border border-white/10 rounded-2xl p-2 opacity-0 group-hover/more:opacity-100 translate-y-2 group-hover/more:translate-y-0 transition-all z-20 shadow-2xl pointer-events-none group-hover/more:pointer-events-auto">
                                            <button onClick={() => addToast('Reset password link sent to ' + u.email, 'warning')} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-600/10 text-xs font-bold text-slate-300 hover:text-blue-400 transition-colors">
                                                <Key size={14} /> Reset Password
                                            </button>
                                            <button onClick={() => addToast('Viewing security logs for ' + u.name, 'info')} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-700/30 text-xs font-bold text-slate-400 hover:text-white transition-colors mt-1">
                                                <ShieldAlert size={14} /> Security Logs
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 flex-1 mb-8">
                                    <div className="p-4 rounded-2xl bg-[#020617] border border-white/10 space-y-3 shadow-inner">
                                        <div className="flex items-center justify-between text-[10px]">
                                            <span className="text-slate-500 font-bold uppercase tracking-widest italic italic-none flex items-center gap-2"><Mail size={12} className="text-blue-500" /> Authorized Mail</span>
                                            <span className="text-blue-400 font-bold italic truncate ml-2 italic-none">{u.email}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-[10px]">
                                            <span className="text-slate-500 font-bold uppercase tracking-widest italic italic-none flex items-center gap-2"><Globe size={12} className="text-blue-500" /> Identity Node IP</span>
                                            <span className="text-slate-400 font-mono italic italic-none text-blue-500/50">{u.loginIp}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 italic italic-none border-b border-white/5 pb-2">
                                        <span className="flex items-center gap-2">Last Resolved: <Clock size={12} /> {u.lastLogin}</span>
                                        <span className={`px-2 py-1 rounded-lg border flex items-center gap-1.5 cursor-pointer transition-all ${u.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-lg shadow-emerald-500/5' : 'bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-lg shadow-rose-500/5'}`} onClick={() => handleToggleStatus(u.id)}>
                                            {u.status === 'Active' ? <Unlock size={10} /> : <Lock size={10} />} {u.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => addToast('Opening identity modifier...', 'info')}
                                        className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-bold hover:bg-white/10 hover:text-white hover:border-blue-500/30 transition-all transition-colors shadow-inner"
                                    >
                                        <Edit3 size={16} /> Edit Access
                                    </button>
                                    <button
                                        onClick={() => handleDelete(u.id)}
                                        className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-rose-600/10 border border-rose-500/20 text-rose-400 font-bold hover:bg-rose-600/20 hover:text-rose-300 hover:border-rose-500/50 transition-all transition-colors"
                                    >
                                        <Trash2 size={16} /> Revoke Access
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Invite Modal */}
            <AnimatePresence>
                {showInviteModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
                            onClick={() => setShowInviteModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="relative w-full max-w-xl bg-[#0f172a] border border-white/10 rounded-[48px] p-12 overflow-hidden pointer-events-auto shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
                        >
                            <h2 className="text-3xl font-black text-white mb-10 border-b border-white/5 pb-2 uppercase tracking-tighter italic italic-none flex items-center gap-4">
                                <ShieldCheck size={32} className="text-blue-500" /> Authorized Identity Invitation
                            </h2>
                            <form onSubmit={handleInvite} className="space-y-8">
                                <div className="space-y-3">
                                    <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2 italic italic-none">Recipient Legal Name</label>
                                    <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800" placeholder="E.g. Megha Sharma" />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2 italic italic-none">Authorized Communication Node (Email)</label>
                                    <div className="relative group">
                                        <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-700 group-focus-within:text-blue-500 transition-colors pointer-events-none" />
                                        <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800" placeholder="user@digitalparth.com" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3 relative">
                                        <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2 italic italic-none">Clearance Level</label>
                                        <select className="w-full bg-[#020617] border border-white/10 rounded-2xl p-5 text-blue-500 font-black text-xs uppercase tracking-widest appearance-none cursor-pointer focus:border-blue-500 transition-all">
                                            <option>Standard Editor</option>
                                            <option>SEO Intelligence Lead</option>
                                            <option>Ads Routing Architect</option>
                                            <option>Super User Bypass</option>
                                        </select>
                                        <ChevronDown size={14} className="absolute right-6 top-[68px] text-slate-700 pointer-events-none" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2 italic italic-none">Temporal Access Key</label>
                                        <div className="h-[62px] px-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between pointer-events-none italic italic-none">
                                            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">Permanent Key</span>
                                            <Shield size={16} className="text-emerald-500/30" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-5 mt-12 pb-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowInviteModal(false)}
                                        className="flex-1 py-4.5 bg-white/5 border border-white/10 rounded-[28px] text-slate-400 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                                    >
                                        Disconnect
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-[2] py-4.5 btn-gradient rounded-[28px] font-black shadow-blue-500/30 shadow-2xl uppercase tracking-widest text-xs transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                                    >
                                        Authorize & Dispatch <ChevronRight size={16} className="text-white/50" />
                                    </button>
                                </div>
                            </form>
                            <button onClick={() => setShowInviteModal(false)} className="absolute top-10 right-10 text-slate-700 hover:text-white transition-colors">
                                <X size={28} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <GlassCard className="border-emerald-500/10 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                <div className="flex items-center gap-6 p-2 italic italic-none">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-xl shadow-emerald-500/10 shrink-0">
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <h4 className="text-lg font-black text-white uppercase tracking-tight italic">Identity Guard Protocol Active</h4>
                        <p className="text-xs text-slate-500 font-medium italic italic-none">Two-factor authentication (2FA) is enforced globally for all identities with "Super Admin" clearance level.</p>
                    </div>
                    <div className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-[#020617] border border-white/10 text-[10px] font-black uppercase tracking-widest text-emerald-400 italic">
                        <Zap size={14} fill="currentColor" /> System Hardened
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
