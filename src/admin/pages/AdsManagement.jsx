import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Target,
    TrendingUp,
    Users,
    MousePointer2,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Linkedin,
    Twitter,
    Plus,
    ArrowRight,
    MoreVertical,
    Zap,
    CheckCircle2,
    XCircle,
    Settings,
    Download,
    Search,
    Filter,
    Eye,
    Trash2,
    Lock
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import StatCard from '../components/StatCard';
import { useToast } from '../context/ToastContext';

const campaignData = [
    { id: 1, name: 'Google SEO Boost Q1', platform: 'Google', budget: '₹45,000', leads: 124, status: 'Active', spend: '₹22,450', reach: '45.2K', ctr: '4.2%' },
    { id: 2, name: 'Facebook Retargeting', platform: 'Facebook', budget: '₹12,000', leads: 42, status: 'Active', spend: '₹8,900', reach: '12.8K', ctr: '3.8%' },
    { id: 3, name: 'Instagram Branding', platform: 'Instagram', budget: '₹15,000', leads: 68, status: 'Paused', spend: '₹15,000', reach: '82.4K', ctr: '1.2%' },
    { id: 4, name: 'Linkedin B2B Sales', platform: 'Linkedin', budget: '₹80,000', leads: 18, status: 'Active', spend: '₹12,400', reach: '4.2K', ctr: '0.8%' },
];

export default function AdsManagement() {
    const [campaigns, setCampaigns] = useState(campaignData);
    const [activePlatform, setActivePlatform] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const addToast = useToast();

    const handleToggleStatus = (id) => {
        setCampaigns(campaigns.map(c => c.id === id ? { ...c, status: c.status === 'Active' ? 'Paused' : 'Active' } : c));
        addToast('Campaign status synchronized with server', 'info');
    };

    const handleCreate = () => {
        addToast('Opening Ads Creative Studio...', 'info');
    };

    const filteredCampaigns = campaigns.filter(c => {
        const matchesPlatform = activePlatform === 'All' || c.platform === activePlatform;
        const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesPlatform && matchesSearch;
    });

    return (
        <div className="space-y-8 pb-10">
            {/* Header & Main Stats */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">Ads & Traffic Management</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Monitor multi-platform ROI and campaign performance</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => addToast('Downloading consolidated Ads report...', 'info')}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-300 font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]"
                    >
                        <Download size={16} /> Data Export
                    </button>
                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 px-8 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl group transition-all"
                    >
                        <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        Launch Campaign
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Total Ad Spend" value="₹2,45,000" icon={TrendingUp} trend="up" trendValue="15.2" color="blue" />
                <StatCard label="Leads Generated" value="1,842" icon={Users} trend="up" trendValue="8.4" color="green" />
                <StatCard label="Average CTR" value="3.85%" icon={MousePointer2} trend="down" trendValue="1.2" color="amber" />
                <StatCard label="Total Impressions" value="4.2M" icon={Target} trend="up" trendValue="22.5" color="purple" />
            </div>

            {/* Campaign Controls */}
            <GlassCard className="!p-4">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-blue-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search by campaign name..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                        <Filter size={16} className="text-slate-500 shrink-0" />
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 whitespace-nowrap">
                            {['All', 'Google', 'Facebook', 'Instagram', 'Linkedin'].map((platform) => (
                                <button
                                    key={platform}
                                    onClick={() => setActivePlatform(platform)}
                                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activePlatform === platform ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/10' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Campaigns Listing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredCampaigns.map((c) => (
                        <motion.div
                            layout
                            key={c.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, x: -50 }}
                        >
                            <GlassCard className="group hover:bg-white/[0.04] transition-all">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform ${c.status === 'Active' ? 'text-blue-400 shadow-blue-500/10' : 'text-slate-500 grayscale'}`}>
                                            {c.platform === 'Google' && <Target size={24} />}
                                            {c.platform === 'Facebook' && <FacebookIcon size={24} />}
                                            {c.platform === 'Instagram' && <InstagramIcon size={24} />}
                                            {c.platform === 'Linkedin' && <Linkedin size={24} />}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-white italic italic-none leading-none mb-1">{c.name}</h3>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Platform: {c.platform}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`px-2.5 py-1 rounded-lg border text-[9px] font-black uppercase tracking-widest cursor-pointer transition-all ${c.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-lg shadow-emerald-500/10' : 'bg-slate-800 text-slate-500 border-white/10'}`} onClick={() => handleToggleStatus(c.id)}>
                                            {c.status}
                                        </span>
                                        <div className="relative group/more">
                                            <button className="p-2 hover:bg-white/5 rounded-xl text-slate-600 group-hover/more:text-white transition-all">
                                                <MoreVertical size={18} />
                                            </button>
                                            <div className="absolute top-12 right-0 w-48 bg-[#0f172a] border border-white/10 rounded-2xl p-2 opacity-0 group-hover/more:opacity-100 translate-y-2 group-hover/more:translate-y-0 transition-all z-20 shadow-2xl pointer-events-none group-hover/more:pointer-events-auto">
                                                <button onClick={() => addToast('Opening Campaign Settings...', 'info')} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-600/10 text-xs font-bold text-slate-300 hover:text-blue-400 transition-colors">
                                                    <Settings size={14} /> Campaign Rules
                                                </button>
                                                <button onClick={() => addToast('Campaign deleted successfully!', 'error')} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-rose-600/10 text-xs font-bold text-rose-500/60 hover:text-rose-400 transition-colors mt-1">
                                                    <Trash2 size={14} /> Remove Ad
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-white/5">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Leads</p>
                                        <p className="text-lg font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{c.leads}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">CTR</p>
                                        <p className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{c.ctr}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Spend</p>
                                        <p className="text-lg font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{c.spend}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] italic">Real-time tracking active</span>
                                    </div>
                                    <button
                                        onClick={() => addToast(`Analyzing platform analytics for ${c.platform}...`, 'info')}
                                        className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-600/5 transition-all shadow-inner"
                                    >
                                        <TrendingUp size={18} />
                                    </button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <GlassCard className="border-emerald-500/10">
                <div className="flex items-center gap-6 p-2">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-black text-white uppercase tracking-tight italic">Optimization Suggestion</h4>
                        <p className="text-sm text-slate-500 font-medium">Your <span className="text-emerald-400 font-bold">Google Ads</span> campaign is performing 24% better than average. Consider increasing budget for scaled results.</p>
                    </div>
                    <button
                        onClick={() => addToast('Adjusting campaign budget for scaling...', 'success')}
                        className="ml-auto px-6 py-3 bg-emerald-600/10 border border-emerald-500/20 rounded-xl text-emerald-400 font-black text-xs uppercase tracking-[0.2em] transform hover:scale-105 active:scale-95 transition-all shadow-xl shadow-emerald-600/10"
                    >
                        Scale Now
                    </button>
                </div>
            </GlassCard>
        </div>
    );
}
