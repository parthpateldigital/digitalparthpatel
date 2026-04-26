import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useBlog } from '../context/BlogContext'

const BlogPreview = () => {
    const { posts } = useBlog();
    const latestPosts = posts.filter(post => post.status === 'Published').slice(0, 3);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4"
                        >
                            Latest from Our <span className="text-gradient">Blog</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg"
                        >
                            Expert insights and strategies to help you stay ahead in the digital landscape.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors group"
                        >
                            View All Posts
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post, i) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <Link to={`/blog/${post.id}`} className="block">
                                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-card p-2 border-white/10 mb-6">
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-900 flex items-center justify-center rounded-xl font-bold text-slate-700">NO IMAGE</div>
                                    )}
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {post.date}</span>
                                        <span className="flex items-center gap-1.5"><User size={12} className="text-primary" /> {post.author}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogPreview
