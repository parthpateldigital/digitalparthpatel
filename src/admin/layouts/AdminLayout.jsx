import React, { useState, useEffect } from 'react';
import { Outlet, Navigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';
import { useToast } from '../context/ToastContext';

export default function AdminLayout() {
    const addToast = useToast();
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
    const { pathname } = useLocation();

    // Handle responsive sidebar behavior
    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth > 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update navbar width on sidebar toggle
    const navbarWidth = isSidebarOpen ? 'calc(100% - 280px)' : 'calc(100% - 80px)';
    const mainMargin = isSidebarOpen ? 'ml-[280px]' : 'ml-[80px]';

    return (
        <div className="min-h-screen bg-[#020617] text-slate-100 flex overflow-x-hidden font-poppins selection:bg-blue-600/30">
            <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className={`flex-1 flex flex-col transition-all duration-300 ${mainMargin}`}>
                <header
                    className="fixed top-0 right-0 h-24 border-b border-white/5 z-40 bg-[#020617]/40 backdrop-blur-xl px-10 flex items-center justify-between transition-all duration-300"
                    style={{ width: navbarWidth }}
                >
                    <AdminNavbar />
                </header>

                <main className="mt-24 p-6 lg:p-10 flex-1 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>

                <footer className="p-10 border-t border-white/5 text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center glass-card !rounded-none border-x-0 border-b-0 gap-6">
                    <p>© 2026 Admin Intelligence Deck - <Link to="/" className="text-blue-500 font-black uppercase tracking-tighter hover:text-white transition-colors italic italic-none">Digital Parth Patel</Link>.</p>
                    <div className="flex gap-8">
                        <button onClick={() => addToast('Opening Regulatory Protocol: Privacy...', 'info')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-all hover:translate-y-[-1px]">Privacy Policy</button>
                        <button onClick={() => addToast('Opening Administrative Protocol: Terms...', 'info')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-all hover:translate-y-[-1px]">Terms</button>
                        <button onClick={() => addToast('Opening Support Resolution Terminal...', 'info')} className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-all hover:translate-y-[-1px]">Support</button>
                    </div>
                </footer>
            </div>

            {/* Premium Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
            </div>
        </div>
    );
}
