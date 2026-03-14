import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Users,
    Settings,
    FileText,
    Image,
    MessageSquare,
    TrendingUp,
    Globe,
    Share2,
    Mail,
    UsersRound,
    ShieldCheck,
    ChevronLeft,
    Menu,
    X,
    Briefcase,
    LogOut,
    ExternalLink,
    ChevronRight,
    UserCircle
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/leads', icon: Mail, label: 'Leads' },
    { path: '/admin/services', icon: Briefcase, label: 'Services' },
    { path: '/admin/seo', icon: Globe, label: 'SEO Settings' },
    { path: '/admin/ads', icon: TrendingUp, label: 'Ads Management' },
    { path: '/admin/blog', icon: FileText, label: 'Blog' },
    { path: '/admin/testimonials', icon: MessageSquare, label: 'Testimonials' },
    { path: '/admin/media', icon: Image, label: 'Media / Images' },
    { path: '/admin/team', icon: UsersRound, label: 'Team Members' },
    { path: '/admin/contact', icon: Share2, label: 'Contact Settings' },
    { path: '/admin/website', icon: Settings, label: 'Website Settings' },
    { path: '/admin/users', icon: ShieldCheck, label: 'Users / Admin' },
];

export default function AdminSidebar({ isOpen, toggleSidebar }) {
    const navigate = useNavigate();
    const addToast = useToast();

    const handleLogout = () => {
        // Clear secure session node
        localStorage.removeItem('adminAuthenticated');
        addToast('Admin Session Terminated Securely', 'warning');
        navigate('/admin/login');
    };

    const handleNavClick = () => {
        // Auto-close on mobile when a link is clicked
        if (window.innerWidth < 1024 && isOpen) {
            toggleSidebar();
        }
    };

    return (
        <>
            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleSidebar}
                        className="fixed inset-0 bg-[#020617]/80 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            <motion.aside
                initial={false}
                animate={{
                    width: isOpen ? 280 : 80,
                    x: 0
                }}
                className={`fixed left-0 top-0 h-screen glass-card !rounded-none border-y-0 border-l-0 z-50 overflow-hidden flex flex-col shadow-[20px_0_50px_rgba(0,0,0,0.5)] transition-all`}
            >
                <div className="flex items-center justify-between p-6 h-20 border-b border-white/5">
                    <Link to="/admin/dashboard" className="flex items-center gap-3 group/logo">
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="logo"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="font-black text-xl text-gradient whitespace-nowrap tracking-tighter italic uppercase"
                                >
                                    Digital Parth
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="mini-logo"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-blue-600/20 group-hover/logo:scale-110 transition-transform italic"
                                >
                                    P
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Link>
                    <button
                        onClick={toggleSidebar}
                        className="p-2.5 hover:bg-white/5 rounded-xl transition-all text-slate-500 hover:text-white border border-transparent hover:border-white/10 active:scale-95"
                    >
                        {isOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    onClick={handleNavClick}
                                    title={!isOpen ? item.label : ''}
                                    className={({ isActive }) => `
                                        flex items-center gap-4 px-4 py-3 rounded-2xl transition-all group relative
                                        ${isActive
                                            ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                                            : 'text-slate-500 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/5'}
                                    `}
                                >
                                    <item.icon size={20} className="shrink-0 transition-transform group-hover:scale-110" />
                                    <AnimatePresence mode="wait">
                                        {isOpen && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className="font-black uppercase tracking-widest text-[10px] whitespace-nowrap"
                                            >
                                                {item.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t border-white/5 space-y-4 bg-white/[0.01]">
                    <div
                        onClick={() => { navigate('/admin/users'); handleNavClick(); }}
                        className={`flex items-center gap-4 p-2.5 rounded-[24px] hover:bg-white/5 border border-transparent hover:border-white/10 cursor-pointer transition-all group ${isOpen ? '' : 'justify-center'}`}
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 flex items-center justify-center text-blue-400 font-black border border-blue-500/20 shadow-xl shadow-blue-600/10 group-hover:scale-105 transition-all">
                            P
                        </div>
                        {isOpen && (
                            <div className="overflow-hidden flex-1">
                                <p className="text-xs font-black text-white truncate uppercase tracking-tight italic">Parth Patel</p>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest truncate">Super Admin</p>
                            </div>
                        )}
                        {isOpen && <ChevronRight size={14} className="text-slate-700 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />}
                    </div>

                    <button
                        onClick={handleLogout}
                        className={`flex items-center gap-4 w-full px-4 py-4 rounded-[24px] text-rose-500/60 hover:text-rose-400 hover:bg-rose-500/10 transition-all border border-transparent hover:border-rose-500/20 group relative overflow-hidden ${isOpen ? '' : 'justify-center'}`}
                    >
                        <LogOut size={20} className="shrink-0 group-hover:scale-110 transition-transform" />
                        <AnimatePresence mode="wait">
                            {isOpen && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="font-black uppercase tracking-widest text-[9px] italic"
                                >
                                    Log out Protocol
                                </motion.span>
                            )}
                        </AnimatePresence>
                        {/* Shimmer effect for logout */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-rose-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s]" />
                    </button>
                </div>
            </motion.aside>
        </>
    );
}

