import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react'
import { useBlog } from '../context/BlogContext'
import FinalCTA from '../components/FinalCTA'

const BlogPost = () => {
    const { id } = useParams()
    const { posts } = useBlog()
    const post = posts.find(p => p.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!post) {
        return (
            <div className="pt-40 pb-20 text-center min-h-screen">
                <h1 className="text-4xl text-white font-bold mb-8">Post Not Found</h1>
                <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
            </div>
        )
    }

    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Header / Hero */}
            <section className="relative py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Insights
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                            {post.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 pt-4 text-slate-400 font-bold text-sm uppercase tracking-widest">
                            <div className="flex items-center gap-3">
                                <Calendar size={18} className="text-primary" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-3">
                                <User size={18} className="text-primary" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-3">
                                <MessageSquare size={18} className="text-primary" />
                                12 Comments
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-3/4">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <div className="text-slate-300 leading-relaxed space-y-8 whitespace-pre-line text-lg md:text-xl font-light">
                                {post.content}
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-white font-bold uppercase tracking-widest text-xs">Share:</span>
                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all cursor-pointer">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="lg:w-1/4 space-y-12">
                        <div className="glass-card p-8 rounded-3xl border-white/10">
                            <h3 className="text-white font-bold mb-6 uppercase tracking-widest">About Author</h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-black text-white">PP</div>
                                <div>
                                    <div className="text-white font-bold">Parth Patel</div>
                                    <div className="text-xs text-slate-500">Founder & CEO</div>
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">Helping businesses scale their digital footprint with result-driven strategies.</p>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border-white/10 sticky top-32">
                            <h3 className="text-white font-bold mb-6 uppercase tracking-widest">Need Help?</h3>
                            <p className="text-slate-400 text-sm mb-6">Want similar results for your business? Let's talk.</p>
                            <Link to="/contact" className="btn-gradient px-6 py-3 rounded-xl text-sm font-bold block text-center">
                                Book Audit
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>

            <FinalCTA />
        </div>
    )
}

export default BlogPost
