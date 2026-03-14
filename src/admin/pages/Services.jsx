import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Trash2,
    Edit3,
    Search,
    Monitor,
    Smartphone,
    Globe,
    Zap,
    CheckCircle2,
    XCircle,
    TrendingUp,
    X
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';

const initialServices = [
    { id: 1, name: 'SEO Optimization', icon: Globe, description: 'Rank higher on Google with our data-driven SEO strategies and technical audits.', status: 'Active', price: '₹14,999/mo' },
    { id: 2, name: 'Google Ads (PPC)', icon: Zap, description: 'Maximize ROI with high-converting ad campaigns and precise audience targeting.', status: 'Active', price: '₹9,999/mo' },
    { id: 3, name: 'Social Media', icon: Smartphone, description: 'Boost engagement and brand awareness across FB, IG, and LinkedIn platforms.', status: 'Inactive', price: '₹7,999/mo' },
    { id: 4, name: 'Web Development', icon: Monitor, description: 'Custom, high-performance websites built for speed and lead conversion.', status: 'Active', price: '₹49,999+' },
];

export default function Services() {
    const [services, setServices] = useState(initialServices);
    const [showModal, setShowModal] = useState(false);
    const [currentService, setCurrentService] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const addToast = useToast();

    const handleToggleStatus = (id) => {
        setServices(services.map(s => s.id === id ? { ...s, status: s.status === 'Active' ? 'Inactive' : 'Active' } : s));
        addToast('Service status toggled!', 'info');
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            setServices(services.filter(s => s.id !== id));
            addToast('Service deleted permanently', 'error');
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (currentService?.id) {
            addToast('Service updated successfully!', 'success');
        } else {
            addToast('New service added successfully!', 'success');
        }
        setShowModal(false);
    };

    return (
        <div className="space-y-8 pb-10">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">Service Portfolio</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Manage your core business offerings and pricing</p>
                </div>

                <button
                    onClick={() => { setCurrentService(null); setShowModal(true); }}
                    className="flex items-center gap-2 px-8 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl group transition-all"
                >
                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    Add Service
                </button>
            </div>

            {/* Control Bar */}
            <GlassCard className="!p-4">
                <div className="flex items-center gap-4">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-blue-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Filter services by name..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="hidden md:flex gap-4 px-6 items-center border-l border-white/5">
                        <div className="flex flex-col text-right">
                            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Active Services</span>
                            <span className="text-xl font-black text-white">{services.filter(s => s.status === 'Active').length}</span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {services.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((service) => (
                        <motion.div
                            layout
                            key={service.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <GlassCard className="h-full group hover:bg-white/[0.04] transition-all flex flex-col cursor-normal">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-2 border-white/10 overflow-hidden flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-700 shadow-2xl shadow-blue-600/10">
                                        {service.icon && <service.icon size={32} />}
                                    </div>
                                    <div className={`px-3 py-1.5 rounded-xl border text-[9px] font-black uppercase tracking-widest cursor-pointer transition-all ${service.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-lg shadow-emerald-500/10' : 'bg-slate-800 text-slate-500 border-white/10'}`}
                                        onClick={() => handleToggleStatus(service.id)}>
                                        {service.status}
                                    </div>
                                </div>

                                <div className="flex-1 space-y-3 mb-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors italic italic-none">{service.name}</h3>
                                        <span className="text-blue-500 font-black text-xs uppercase tracking-widest bg-blue-500/5 px-3 py-1.5 rounded-xl border border-blue-500/20 shadow-inner">{service.price}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed line-clamp-3">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-auto">
                                    <button
                                        onClick={() => { setCurrentService(service); setShowModal(true); }}
                                        className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-bold hover:bg-white/10 hover:text-white hover:border-blue-500/30 transition-all transition-colors"
                                    >
                                        <Edit3 size={16} /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service.id)}
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

            {/* Service Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 pointer-events-none">
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
                            <h2 className="text-3xl font-black text-white mb-10 border-b border-white/5 pb-6 uppercase tracking-tighter">
                                {currentService ? 'Service Intelligence Update' : 'Initialize New Service'}
                            </h2>
                            <form onSubmit={handleSave} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Service Title</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:outline-none focus:border-blue-500 transition-all" defaultValue={currentService?.name} />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Starting Price</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white font-bold focus:outline-none focus:border-blue-500 transition-all " defaultValue={currentService?.price} placeholder="₹ 14,999/mo" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Service Description</label>
                                    <textarea required rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-slate-300 font-medium leading-relaxed focus:outline-none focus:border-blue-500 transition-all italic italic-none" defaultValue={currentService?.description} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Visual Icon Class</label>
                                        <div className="flex bg-white/5 border border-white/10 rounded-2xl p-4 items-center justify-between cursor-pointer hover:border-white/20">
                                            <span className="text-sm font-bold text-slate-400">Globe / Web Icon</span>
                                            <Globe size={18} className="text-blue-500" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Initialization Status</label>
                                        <div className="flex items-center gap-4 pt-1">
                                            <button type="button" className="flex-1 py-3 bg-emerald-600/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-bold text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/5">Active</button>
                                            <button type="button" className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-500 font-bold text-xs uppercase tracking-widest opacity-40">Inactive</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-12">
                                    <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-xs">Disconnect</button>
                                    <button type="submit" className="flex-1 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl uppercase tracking-widest text-xs">Authorize Changes</button>
                                </div>
                            </form>
                            <button onClick={() => setShowModal(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
