import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Search,
    Filter,
    Image as ImageIcon,
    File,
    Trash2,
    Download,
    Copy,
    ExternalLink,
    MoreVertical,
    CheckCircle2,
    XCircle,
    Clock,
    LayoutGrid,
    List,
    UploadCloud,
    X,
    PlusCircle,
    Files,
    Info
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';

const initialMedia = [
    { id: 1, name: 'hero-banner.png', size: '1.2 MB', type: 'image/png', date: '28 Feb 2026', dimensions: '1920x1080', url: '#' },
    { id: 2, name: 'logo-dark.svg', size: '45 KB', type: 'image/svg+xml', date: '27 Feb 2026', dimensions: '512x512', url: '#' },
    { id: 3, name: 'seo-infographic.jpg', size: '850 KB', type: 'image/jpeg', date: '25 Feb 2026', dimensions: '1200x800', url: '#' },
    { id: 4, name: 'team-photo.png', size: '2.5 MB', type: 'image/png', date: '24 Feb 2026', dimensions: '3840x2160', url: '#' },
    { id: 5, name: 'favicon.ico', size: '12 KB', type: 'image/x-icon', date: '22 Feb 2026', dimensions: '32x32', url: '#' },
];

export default function Media() {
    const [media, setMedia] = useState(initialMedia);
    const [selectedFile, setSelectedFile] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const addToast = useToast();

    const handleUpload = () => {
        setIsUploading(true);
        addToast('Allocating cloud storage for upload...', 'info');
        setTimeout(() => {
            setIsUploading(false);
            addToast('Asset uploaded successfully to Global Node', 'success');
        }, 2000);
    };

    const handleDelete = (id) => {
        if (window.confirm('Erase this asset permanently from cloud?')) {
            setMedia(media.filter(m => m.id !== id));
            if (selectedFile?.id === id) setSelectedFile(null);
            addToast('Media asset erased', 'error');
        }
    };

    const handleCopy = (url) => {
        // navigator.clipboard.writeText(url);
        addToast('Public Link copied to clipboard!', 'success');
    };

    const filtered = media.filter(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="flex h-[calc(100vh-140px)] gap-8 overflow-hidden">
            {/* Media Browser Left */}
            <div className="flex-1 space-y-8 overflow-y-auto scrollbar-hide pb-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pr-4">
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight mb-2">Cloud Edge Media</h1>
                        <p className="text-slate-400 font-medium italic italic-none">Manage assets across Digital Parth Patel distributed network</p>
                    </div>
                    <button
                        onClick={handleUpload}
                        disabled={isUploading}
                        className="flex items-center gap-2 px-8 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl group transition-all shrink-0 disabled:opacity-50"
                    >
                        <UploadCloud size={20} className={`${isUploading ? 'animate-bounce' : 'group-hover:translate-y-[-2px]'} transition-transform`} />
                        {isUploading ? 'Syncing...' : 'Upload Asset'}
                    </button>
                </div>

                {/* Control Bar */}
                <GlassCard className="!p-4 mr-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-blue-500 transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search indexed assets by filename..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-xs focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10 italic italic-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                                <button className="p-2 rounded-lg bg-blue-600/20 text-blue-500 shadow-xl shadow-blue-600/10"><LayoutGrid size={18} /></button>
                                <button className="p-2 rounded-lg text-slate-600 hover:text-slate-400"><List size={18} /></button>
                            </div>
                            <button onClick={() => addToast('Applying global filters...', 'info')} className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-500 hover:text-white transition-all"><Filter size={18} /></button>
                        </div>
                    </div>
                </GlassCard>

                {/* Media Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pr-4">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((m) => (
                            <motion.div
                                layout
                                key={m.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                onClick={() => setSelectedFile(m)}
                            >
                                <GlassCard className={`group cursor-pointer !p-2 border-2 transition-all ${selectedFile?.id === m.id ? 'border-blue-600 bg-blue-600/5 shadow-2xl shadow-blue-500/20' : 'border-transparent hover:border-white/10'}`}>
                                    <div className="aspect-square rounded-2xl bg-[#020617] mb-3 overflow-hidden flex flex-col items-center justify-center relative">
                                        {m.type.includes('image') ? (
                                            <div className="w-full h-full bg-gradient-to-br from-blue-900/10 to-indigo-900/10 flex items-center justify-center text-blue-600 opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700">
                                                <ImageIcon size={48} />
                                            </div>
                                        ) : (
                                            <File size={48} className="text-slate-700" />
                                        )}
                                        <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-black text-white/50 uppercase tracking-widest">
                                            {m.type.split('/')[1].toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="px-2 pb-2">
                                        <p className="text-[10px] font-black text-white truncate uppercase tracking-tight italic italic-none">{m.name}</p>
                                        <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{m.size} • {m.date}</p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Media Details Sidebar Right */}
            <AnimatePresence>
                {selectedFile ? (
                    <motion.div
                        initial={{ x: 400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 400, opacity: 0 }}
                        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                        className="w-96 bg-white/[0.02] border border-white/10 rounded-[40px] p-10 flex flex-col gap-8 shadow-2xl overflow-y-auto scrollbar-hide backdrop-blur-3xl"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">Asset Intelligence</h2>
                            <button onClick={() => setSelectedFile(null)} className="p-2.5 rounded-xl bg-white/5 text-slate-500 hover:text-white transition-all"><X size={20} /></button>
                        </div>

                        <div className="aspect-video w-full rounded-2xl bg-black border border-white/10 flex items-center justify-center text-slate-800 shadow-inner group overflow-hidden relative">
                            <ImageIcon size={48} className="opacity-20 group-hover:scale-110 group-active:scale-95 transition-all duration-700" />
                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Global Asset Name</label>
                                <div className="flex items-center justify-between mt-1 pt-1 border-b border-white/5 pb-1">
                                    <p className="text-sm font-black text-white uppercase tracking-tight">{selectedFile.name}</p>
                                    <Edit3 size={12} className="text-slate-700 cursor-pointer hover:text-blue-500 transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Digital Weight</p>
                                    <p className="text-sm font-bold text-slate-300">{selectedFile.size}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Node Resolved</p>
                                    <p className="text-sm font-bold text-slate-300 uppercase italic tracking-tight">{selectedFile.date}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Dimensions</p>
                                    <p className="text-sm font-bold text-slate-300">{selectedFile.dimensions}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Security Status</p>
                                    <p className="text-sm font-bold text-emerald-500 flex items-center gap-1.5"><CheckCircle2 size={12} /> Encrypted</p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4">
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Public Asset URL</p>
                                <div className="flex bg-[#020617] border border-white/10 rounded-2xl p-4 items-center justify-between group overflow-hidden">
                                    <span className="text-[10px] text-blue-400 font-mono truncate mr-2 opacity-60">https://cdn.dpp.com/{selectedFile.name}</span>
                                    <button onClick={() => handleCopy(selectedFile.url)} className="p-2 rounded-lg bg-blue-600/10 text-blue-500 hover:bg-blue-600 hover:text-white transition-all transform active:scale-90"><Copy size={12} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <button
                                onClick={() => addToast('Opening asset in fullscreen monitor...', 'info')}
                                className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:border-blue-500/50 transition-all uppercase tracking-widest text-[10px] font-black font-sans shadow-lg shadow-transparent hover:shadow-white/5"
                            >
                                View Full
                            </button>
                            <button
                                onClick={() => handleDelete(selectedFile.id)}
                                className="flex-1 py-4 bg-rose-600/10 border border-rose-500/20 rounded-2xl text-rose-500 font-black uppercase tracking-widest text-[10px] hover:bg-rose-600 hover:text-white transition-all shadow-xl shadow-rose-600/10"
                            >
                                Delete Cloud
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <div className="w-96 border border-white/5 rounded-[40px] flex flex-col items-center justify-center p-12 text-center bg-white/[0.01]">
                        <div className="w-20 h-20 rounded-[32px] bg-white/5 border border-dashed border-white/10 flex items-center justify-center text-slate-700 mb-6 animate-pulse">
                            <Files size={32} />
                        </div>
                        <p className="text-xs font-black text-slate-600 uppercase tracking-[0.2em] italic mb-2">Node Inspector Offline</p>
                        <p className="text-[10px] text-slate-700 font-bold uppercase tracking-widest leading-relaxed">Select a media asset from the grid to resolve metadata and CDN controls.</p>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
