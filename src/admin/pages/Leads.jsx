import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Filter,
    Download,
    Plus,
    MoreVertical,
    Mail,
    Phone,
    MessageSquare,
    Trash2,
    ExternalLink,
    CheckCircle2,
    AlertCircle,
    Eye,
    Settings,
    X
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';

const initialLeads = [
    { id: 1, name: 'Suresh Kumar', email: 'suresh@gmail.com', phone: '+91 98765 43210', message: 'Looking for SEO services for my e-commerce brand.', status: 'New', date: '2026-02-28', source: 'Google' },
    { id: 2, name: 'Aditi Sharma', email: 'aditi@yahoo.com', phone: '+91 87654 32109', message: 'Interested in Google Ads management.', status: 'In Progress', date: '2026-02-27', source: 'Instagram' },
    { id: 3, name: 'Rahul Mehta', email: 'rahul@outlook.com', phone: '+91 76543 21098', message: 'Need a custom website for my startup.', status: 'Converted', date: '2026-02-26', source: 'Referral' },
    { id: 4, name: 'Priya Verma', email: 'priya@icloud.com', phone: '+91 65432 10987', message: 'Facebook marketing inquiry.', status: 'New', date: '2026-02-25', source: 'Facebook' },
    { id: 5, name: 'Vikram Singh', email: 'vikram@biz.com', phone: '+91 54321 09876', message: 'SEO audit for my existing site.', status: 'Converted', date: '2026-02-24', source: 'Google' },
];

export default function Leads() {
    const [leads, setLeads] = useState(initialLeads);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedLead, setSelectedLead] = useState(null);
    const addToast = useToast();

    const handleStatusChange = (id, newStatus) => {
        setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
        addToast(`Status updated to ${newStatus}`, 'success');
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this lead?')) {
            setLeads(leads.filter(lead => lead.id !== id));
            addToast('Lead deleted successfully', 'error');
        }
    };

    const handleExport = () => {
        addToast('Preparing CSV file...', 'info');
        setTimeout(() => {
            addToast('Leads exported successfully as CSV!', 'success');
        }, 1000);
    };

    const filteredLeads = leads.filter(lead => {
        const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-8 pb-10">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">Leads Management</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Monitor and respond to every client inquiry</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-300 font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]"
                    >
                        <Download size={16} /> Export CSV
                    </button>
                    <button
                        onClick={() => addToast('Opening Lead Creation Modal...', 'info')}
                        className="flex items-center gap-2 px-8 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl group transition-all"
                    >
                        <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        Add New Lead
                    </button>
                </div>
            </div>

            {/* Filters & Actions Bar */}
            <GlassCard className="!p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-blue-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter size={18} className="text-slate-500" />
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                            {['All', 'New', 'In Progress', 'Converted'].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setStatusFilter(status)}
                                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${statusFilter === status ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/10' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Leads Table */}
            <GlassCard>
                <div className="overflow-x-auto -mx-8">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="px-8 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Contact</th>
                                <th className="px-8 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-[0.2em] hidden md:table-cell">Source</th>
                                <th className="px-8 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Status</th>
                                <th className="px-8 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-[0.2em] hidden lg:table-cell">Date</th>
                                <th className="px-8 py-4 text-right text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <AnimatePresence mode="popLayout">
                                {filteredLeads.map((lead) => (
                                    <motion.tr
                                        layout
                                        key={lead.id}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="group hover:bg-white/[0.03] transition-colors"
                                    >
                                        <td className="px-8 py-5">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{lead.name}</span>
                                                <div className="flex items-center gap-3 mt-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                                    <span className="flex items-center gap-1"><Mail size={10} className="text-blue-500/50" /> {lead.email}</span>
                                                    <span className="flex items-center gap-1"><Phone size={10} className="text-emerald-500/50" /> {lead.phone}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 hidden md:table-cell">
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 w-fit">
                                                <div className="w-1 h-1 rounded-full bg-blue-500" />
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{lead.source}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <select
                                                value={lead.status}
                                                onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                                                className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border appearance-none cursor-pointer focus:outline-none transition-all ${lead.status === 'New' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                                                        lead.status === 'In Progress' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                                                            'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                                    }`}
                                            >
                                                <option value="New" className="bg-[#0f172a]">New</option>
                                                <option value="In Progress" className="bg-[#0f172a]">In Progress</option>
                                                <option value="Converted" className="bg-[#0f172a]">Converted</option>
                                            </select>
                                        </td>
                                        <td className="px-8 py-5 hidden lg:table-cell">
                                            <span className="text-[10px] font-bold text-slate-500 italic flex items-center gap-2">
                                                <CheckCircle2 size={12} className="text-blue-500/30" />
                                                {lead.date}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setSelectedLead(lead)}
                                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all shadow-xl shadow-transparent hover:shadow-blue-600/20"
                                                >
                                                    <Eye size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(lead.id)}
                                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-rose-400 hover:bg-rose-600 hover:text-white hover:border-rose-500 transition-all shadow-xl shadow-transparent hover:shadow-rose-600/20"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
            </GlassCard>

            {/* Slide-over/Sidebar Detail View */}
            <AnimatePresence>
                {selectedLead && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedLead(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] cursor-crosshair"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-xl bg-[#020617] border-l border-white/10 z-[70] p-12 shadow-[0_0_100px_rgba(59,130,246,0.1)] overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Lead Intelligence</h2>
                                <button onClick={() => setSelectedLead(null)} className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-[30px] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-3xl font-black text-white shadow-2xl shadow-blue-600/30">
                                        {selectedLead.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white">{selectedLead.name}</h3>
                                        <p className="text-blue-500 text-xs font-black uppercase tracking-widest mt-1 italic italic-none">Acquired via {selectedLead.source}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/5">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Address</p>
                                        <p className="text-sm font-bold text-white flex items-center gap-2"><Mail size={14} className="text-blue-500" /> {selectedLead.email}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Phone Number</p>
                                        <p className="text-sm font-bold text-white flex items-center gap-2"><Phone size={14} className="text-emerald-500" /> {selectedLead.phone}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                        <MessageSquare size={14} className="text-blue-500" /> Client Inquiry Message
                                    </p>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-slate-300 font-medium leading-relaxed italic border-l-4 border-l-blue-600 shadow-inner">
                                        "{selectedLead.message}"
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                                    <button
                                        onClick={() => addToast('Opening email composer...', 'info')}
                                        className="flex-1 py-4 bg-blue-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-600/30 hover:bg-blue-500 transition-all"
                                    >
                                        Email Client
                                    </button>
                                    <button
                                        onClick={() => addToast('Calling client securely...', 'info')}
                                        className="flex-1 py-4 bg-emerald-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-emerald-600/30 hover:bg-emerald-500 transition-all"
                                    >
                                        WhatsApp
                                    </button>
                                </div>

                                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Auto-Response Status</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Delivered</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full w-full bg-emerald-500 opacity-30 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
