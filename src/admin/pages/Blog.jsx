import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Edit3,
    Trash2,
    Eye,
    Calendar,
    User,
    CheckCircle2,
    XCircle,
    MessageSquare,
    ChevronRight,
    Save,
    Globe,
    ImageIcon,
    Settings,
    X,
    PlusCircle,
    Clock,
    ExternalLink,
    Loader2
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useToast } from '../context/ToastContext';
import { useBlog } from '../../context/BlogContext';

const initialPosts = [
    { id: 1, title: 'How SEO is Changing in 2026', author: 'Parth Patel', category: 'SEO', status: 'Published', date: '2026-02-28', views: 1240, content: 'SEO is evolving rapidly with AI...' },
    { id: 2, title: 'The Ultimate Guide to Google Ads ROI', author: 'Megha Sharma', category: 'Ads', status: 'Draft', date: '2026-02-27', views: 0, content: 'Google Ads can be complex but rewarding...' },
    { id: 3, title: 'Why Branding is Important for Small Businesses', author: 'Rahul Varma', category: 'Branding', status: 'Published', date: '2026-02-25', views: 852, content: 'Branding is about more than just a logo...' },
    { id: 4, title: 'Top 10 Marketing Trends to Watch Out', author: 'Parth Patel', category: 'Trends', status: 'Published', date: '2026-02-24', views: 2105, content: 'Marketing trends in 2026 include personalization...' },
];

export default function Blog() {
    const { posts, addPost, updatePost, deletePost: removePost } = useBlog();
    const [showEditor, setShowEditor] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const addToast = useToast();

    const handlePublish = (id) => {
        const post = posts.find(p => p.id === id);
        if (post) {
            updatePost({ ...post, status: 'Published' });
            addToast('Article published live!', 'success');
        }
    };

    const handleDraft = (id) => {
        const post = posts.find(p => p.id === id);
        if (post) {
            updatePost({ ...post, status: 'Draft' });
            addToast('Article saved to drafts', 'info');
        }
    };

    const handleDelete = (id) => {
        const post = posts.find(p => p.id === id);
        if (!post) return;

        if (post.status === 'Trash') {
            if (window.confirm('Delete this article permanently?')) {
                removePost(id);
                addToast('Article permanently deleted', 'error');
            }
        } else {
            updatePost({ ...post, status: 'Trash' });
            addToast('Article moved to trash', 'warning');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (e, targetStatus) => {
        if (e && e.preventDefault) e.preventDefault();
        setLoading(true);

        const form = document.getElementById('blog-editor-form');
        const formData = new FormData(form);
        const title = formData.get('title');
        const content = formData.get('content');
        const category = formData.get('category').split(' ')[0];

        setTimeout(() => {
            if (currentPost) {
                updatePost({
                    ...currentPost,
                    title,
                    category,
                    content,
                    image: imagePreview,
                    status: targetStatus || currentPost.status
                });
            } else {
                const newPost = {
                    id: Date.now().toString(),
                    title,
                    content,
                    author: 'Parth Patel',
                    category,
                    status: targetStatus || 'Draft',
                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                    views: 0,
                    image: imagePreview
                };
                addPost(newPost);
            }
            setLoading(false);
            setShowEditor(false);
            addToast(targetStatus === 'Published' ? 'Article published live!' : (currentPost ? 'Article updated!' : 'New article created!'), 'success');
        }, 1200);
    };

    const filteredPosts = posts.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = activeFilter === 'All' ? p.status !== 'Trash' :
            activeFilter === 'Trash' ? p.status === 'Trash' :
                p.status === activeFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">Internal Blog Manager</h1>
                    <p className="text-slate-400 font-medium italic italic-none">Create and publish strategic content to win organic traffic</p>
                </div>

                <button
                    onClick={() => { setCurrentPost(null); setShowEditor(true); setImagePreview(null); }}
                    className="flex items-center gap-2 px-8 py-4 btn-gradient rounded-2xl font-black shadow-blue-500/30 shadow-xl group transition-all shrink-0"
                >
                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    Create New Post
                </button>
            </div>

            {/* Control Area */}
            <GlassCard className="!p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-blue-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search by article title or author..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all focus:bg-white/10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <Filter size={16} className="text-slate-500 shrink-0" />
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 whitespace-nowrap">
                            {['All', 'Published', 'Draft', 'Trash'].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setActiveFilter(status)}
                                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === status ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/10' : 'text-slate-500 hover:text-slate-300'}`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </GlassCard>

            {/* Posts Grid/List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post) => (
                        <motion.div
                            layout
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <GlassCard className="group hover:bg-white/[0.04] transition-all">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform shadow-inner">
                                            {post.category === 'SEO' && <Globe size={24} />}
                                            {post.category === 'Ads' && <PlusCircle size={24} />}
                                            {post.category === 'Branding' && <ImageIcon size={24} />}
                                            {post.category === 'Trends' && <Clock size={24} />}
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest italic mb-1 italic-none">{post.category} Intelligence</p>
                                            <h3 className="text-xl font-black text-white leading-tight uppercase tracking-tight group-hover:text-blue-400 transition-colors line-clamp-2">{post.title}</h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`px-2.5 py-1.5 rounded-lg border text-[9px] font-black uppercase tracking-[0.2em] transition-all ${post.status === 'Published' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-lg shadow-emerald-500/10' : 'bg-slate-800 text-slate-500 border-white/10'}`}>
                                            {post.status}
                                        </span>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-lg shadow-rose-500/5 group/del"
                                            title={post.status === 'Trash' ? 'Delete Permanently' : 'Move to Trash'}
                                        >
                                            <Trash2 size={14} className="group-hover/del:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between py-6 border-y border-white/5 mb-8">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <User size={14} className="text-slate-500" />
                                            <span className="text-xs font-bold text-slate-300 uppercase tracking-tight">{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Eye size={14} className="text-slate-500" />
                                            <span className="text-xs font-bold text-slate-300 uppercase tracking-tight">{post.views} Views</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest italic group-hover:text-blue-400/50 transition-colors">
                                        <Calendar size={12} /> {post.date}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => {
                                            setCurrentPost(post);
                                            setShowEditor(true);
                                            setImagePreview(post.image || null);
                                        }}
                                        className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-bold hover:bg-white/10 hover:text-white hover:border-blue-500/30 transition-all"
                                    >
                                        <Edit3 size={16} /> Edit
                                    </button>
                                    {post.status === 'Draft' ? (
                                        <button
                                            onClick={() => handlePublish(post.id)}
                                            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold hover:bg-emerald-500 hover:text-white transition-all shadow-lg shadow-emerald-500/10"
                                        >
                                            <CheckCircle2 size={16} /> Publish
                                        </button>
                                    ) : (
                                        <div className="relative group/more">
                                            <button className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 font-bold hover:bg-white/10 hover:text-white transition-all">
                                                <MoreVertical size={16} /> Options
                                            </button>
                                            <div className="absolute top-14 right-0 w-48 bg-[#0f172a] border border-white/10 rounded-2xl p-2 opacity-0 group-hover/more:opacity-100 translate-y-2 group-hover/more:translate-y-0 transition-all z-20 shadow-2xl pointer-events-none group-hover/more:pointer-events-auto">
                                                {post.status === 'Draft' || post.status === 'Trash' ? (
                                                    <button onClick={() => handlePublish(post.id)} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-emerald-600/10 text-xs font-bold text-emerald-400 transition-colors">
                                                        <CheckCircle2 size={14} /> {post.status === 'Trash' ? 'Restore & Publish' : 'Go Live'}
                                                    </button>
                                                ) : (
                                                    <button onClick={() => handleDraft(post.id)} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-amber-600/10 text-xs font-bold text-amber-400 transition-colors">
                                                        <Clock size={14} /> Make Draft
                                                    </button>
                                                )}
                                                <button onClick={() => handleDelete(post.id)} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-rose-600/10 text-xs font-bold text-rose-500/60 hover:text-rose-400 transition-colors mt-1">
                                                    <Trash2 size={14} /> {post.status === 'Trash' ? 'Delete Permanently' : 'Move to Trash'}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Editor Slide-over */}
            <AnimatePresence>
                {showEditor && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setShowEditor(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[80] cursor-crosshair"
                        />
                        <motion.div
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-4xl bg-[#020617] border-l border-white/10 z-[90] p-12 shadow-[0_0_100px_rgba(59,130,246,0.1)] overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <div>
                                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">{currentPost ? 'Article Sync' : 'New Article Draft'}</h2>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest italic italic-none flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Cloud auto-save active • Distributed Node Sync
                                    </p>
                                </div>
                                <button onClick={() => setShowEditor(false)} className="p-4 bg-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                    <X size={28} />
                                </button>
                            </div>

                            <form id="blog-editor-form" onSubmit={(e) => handleSave(e)} className="space-y-10 pb-20">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Master Article Headline</label>
                                    <input
                                        required
                                        name="title"
                                        className="w-full bg-white/5 border border-white/10 rounded-[28px] p-6 text-2xl font-black text-white focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800"
                                        defaultValue={currentPost?.title}
                                        placeholder="E.g. The Paradox of Digital Growth in 2026..."
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Authority Category</label>
                                        <select
                                            name="category"
                                            className="w-full bg-[#0f172a] border border-white/10 rounded-2xl p-5 text-white font-bold cursor-pointer appearance-none transition-all focus:border-blue-500"
                                            defaultValue={currentPost?.category || "SEO"}
                                        >
                                            <option value="SEO">SEO Strategy</option>
                                            <option value="Ads">Google Ads ROI</option>
                                            <option value="Branding">Brand Identity Strategy</option>
                                            <option value="Trends">Market Trends</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Lead Author Access</label>
                                        <div className="flex bg-white/5 border border-white/10 rounded-2xl p-5 items-center justify-between cursor-pointer border-dashed border-white/20">
                                            <span className="text-sm font-bold text-slate-400 flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-lg bg-blue-500/20" /> Parth Patel (Admin)
                                            </span>
                                            <ChevronRight size={14} className="text-slate-700" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 flex items-center justify-between">
                                        Article Body Content
                                        <span className="text-[9px] text-blue-500 italic opacity-50">Markdown Intelligence Enabled</span>
                                    </label>
                                    <textarea
                                        required
                                        name="content"
                                        rows="12"
                                        className="w-full bg-white/5 border border-white/10 rounded-[32px] p-8 text-slate-300 font-medium leading-relaxed focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-800 italic italic-none"
                                        placeholder="Begin documenting your strategic marketing insights..."
                                        defaultValue={currentPost?.content}
                                    />
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    <GlassCard className="!p-6 border-dashed border-white/10 lg:col-span-2">
                                        <div className="flex items-center gap-6">
                                            <input
                                                type="file"
                                                id="image-upload"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                            <label
                                                htmlFor="image-upload"
                                                className="w-16 h-16 rounded-2xl bg-white/5 border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-slate-600 group hover:border-blue-500 transition-all cursor-pointer overflow-hidden"
                                            >
                                                {imagePreview ? (
                                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                                ) : (
                                                    <>
                                                        <ImageIcon size={24} className="group-hover:text-blue-500" />
                                                        <span className="text-[8px] mt-1 font-black uppercase tracking-widest">SVG/PNG</span>
                                                    </>
                                                )}
                                            </label>
                                            <div>
                                                <p className="text-xs font-black text-white italic italic-none">Primary Cover Asset</p>
                                                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">Recommended: 1920x1080px (MAX 2MB)</p>
                                            </div>
                                            <label
                                                htmlFor="image-upload"
                                                className="ml-auto p-3 bg-white/5 rounded-xl border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                                            >
                                                <PlusCircle size={18} />
                                            </label>
                                        </div>
                                    </GlassCard>
                                    <GlassCard className="!p-6 border-blue-500/10">
                                        <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
                                            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none">SEO Scoring</p>
                                            <p className="text-3xl font-black text-white tracking-widest uppercase tracking-tight italic">98/100</p>
                                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                                                <div className="w-[98%] h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                            </div>
                                        </div>
                                    </GlassCard>
                                </div>

                                <div className="flex items-center gap-4 pt-10">
                                    <button
                                        type="button"
                                        onClick={() => setShowEditor(false)}
                                        className="flex-1 py-5 bg-white/5 border border-white/10 rounded-[28px] text-slate-400 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="button"
                                        onClick={(e) => handleSave(e, 'Draft')}
                                        disabled={loading}
                                        className="flex-1 py-5 bg-blue-600/10 border border-blue-500/20 rounded-[28px] text-blue-400 font-black text-xs uppercase tracking-widest hover:bg-blue-600/20 transition-all flex items-center justify-center gap-2"
                                    >
                                        {loading ? <Loader2 className="animate-spin" size={16} /> : (
                                            <>
                                                <Clock size={16} />
                                                Save Draft
                                            </>
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={(e) => handleSave(e, 'Published')}
                                        disabled={loading}
                                        className="flex-[1.5] py-5 btn-gradient rounded-[28px] font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 group transition-all"
                                    >
                                        {loading ? <Loader2 className="animate-spin" size={20} /> : (
                                            <>
                                                Publish Now
                                                <Globe size={18} className="group-hover:scale-110 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
