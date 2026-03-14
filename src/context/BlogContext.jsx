import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

const initialPosts = [
    {
        id: 'seo-tips-2024',
        title: '10 SEO Tips to Rank #1 on Google in 2024',
        excerpt: 'Discover the latest SEO strategies that are working right now, from E-E-A-T to voice search optimization.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
        date: 'Oct 24, 2024',
        author: 'Parth Patel',
        category: 'SEO',
        status: 'Published',
        content: 'SEO is constantly evolving...'
    },
    {
        id: 'facebook-ads-scale',
        title: 'How to Scale Your Business with Facebook Ads',
        excerpt: 'A comprehensive guide to building profitable Facebook ad campaigns that actually convert.',
        image: 'https://images.unsplash.com/photo-1611926653458-39291b6fbc97?auto=format&fit=crop&q=80&w=1200',
        date: 'Oct 18, 2024',
        author: 'Parth Patel',
        category: 'Paid Ads',
        status: 'Published',
        content: 'Facebook Ads remain one of the most powerful...'
    }
];

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('blog_posts');
        return savedPosts ? JSON.parse(savedPosts) : initialPosts;
    });

    useEffect(() => {
        localStorage.setItem('blog_posts', JSON.stringify(posts));
    }, [posts]);

    const addPost = (post) => {
        setPosts(prev => [post, ...prev]);
    };

    const updatePost = (updatedPost) => {
        setPosts(prev => prev.map(p => p.id === updatedPost.id ? updatedPost : p));
    };

    const deletePost = (id) => {
        setPosts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <BlogContext.Provider value={{ posts, setPosts, addPost, updatePost, deletePost }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
};
