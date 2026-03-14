import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Search as SearchIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBlog } from '../context/BlogContext'

const Blog = () => {
    const { posts } = useBlog();

    // Only show published posts on the public blog page
    const publishedPosts = posts.filter(post => post.status === 'Published');

    return (
        <div className="pt-24 min-h-screen bg-slate-950">
            {/* Header */}
            <section className="py-20 border-b border-white/5 bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="md:w-2/3">
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-4xl md:text-7xl font-bold text-white mb-6"
                            >
                                Our <span className="text-gradient">Blog</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-slate-400 text-xl"
                            >
                                Insights, tips, and strategies to help you navigate the digital world.
                            </motion.p>
                        </div>

                        <div className="md:w-1/3 w-full">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white focus:outline-none focus:border-primary transition-all pr-12"
                                />
                                <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    {publishedPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {publishedPosts.map((post, i) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <Link to={`/blog/${post.id}`} className="block cursor-pointer">
                                        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden glass-card p-2 border-white/10 mb-8">
                                            {post.image ? (
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-slate-900 flex items-center justify-center rounded-2xl">
                                                    <span className="text-slate-600 font-bold uppercase tracking-widest">No Image</span>
                                                </div>
                                            )}
                                            <div className="absolute top-6 left-6 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                                                {post.category}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-6 text-xs text-slate-500 font-bold uppercase tracking-widest">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={14} className="text-primary" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <User size={14} className="text-primary" />
                                                    {post.author}
                                                </div>
                                            </div>

                                            <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                                {post.title}
                                            </h2>

                                            <p className="text-slate-400 leading-relaxed line-clamp-2">
                                                {post.excerpt || post.content?.substring(0, 150) + '...'}
                                            </p>

                                            <div className="pt-4 flex items-center gap-3 text-white font-bold group-hover:gap-5 transition-all">
                                                Read More
                                                <ArrowRight size={20} className="text-primary" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-2xl text-slate-500 font-bold">No articles published yet.</h3>
                        </div>
                    )}

                    {publishedPosts.length > 4 && (
                        <div className="mt-20 text-center">
                            <button className="bg-white/5 border border-white/10 px-12 py-5 rounded-full text-white font-bold hover:bg-white/10 transition-all">
                                Load More Articles
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Blog
