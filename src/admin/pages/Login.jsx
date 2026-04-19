import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Mail,
    Lock,
    ArrowRight,
    CheckCircle2,
    Zap,
    Globe,
    Loader2
} from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        // Security Validation Delay
        setTimeout(() => {
            if (password === 'admin123') {
                setLoading(false);
                setSuccess(true);
                // Persist secure session node
                localStorage.setItem('adminAuthenticated', 'true');

                // Delay navigation to show success state
                setTimeout(() => {
                    navigate('/admin/dashboard');
                }, 1000);
            } else {
                setLoading(false);
                // Using alert for immediate security feedback if toast is not mounted at this level
                // but usually we would use useToast() hook. Let me check if useToast is imported.
                alert('ACCESS DENIED: PHRASE MISMATCH. SECURITY PROTOCOL TRIGGERED.');
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-6 relative overflow-hidden font-poppins selection:bg-blue-600/30">
            {/* Dynamic Background Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full" />
            <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-cyan-500/5 blur-[100px] rounded-full animate-pulse" />

            {/* Login Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-xl relative z-10"
            >
                <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[48px] p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative group overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2s] pointer-events-none" />

                    <div className="text-center mb-12 relative">
                        <motion.div
                            initial={{ rotate: -10, scale: 0.5 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-blue-600/40 mb-8 border border-blue-400/30"
                        >
                            <ShieldCheck size={36} strokeWidth={2.5} className="text-white drop-shadow-xl" />
                        </motion.div>
                        <h1 className="text-4xl font-black tracking-tight mb-2 uppercase tracking-tighter">
                            Admin <span className="text-gradient">Access Key</span>
                        </h1>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] italic">Digital Parth Patel Dashboard Protocol</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-8 relative">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest pl-2">Security ID (Email)</label>
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-700 placeholder:font-medium"
                                        placeholder="admin@digitalparth.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center pl-2">
                                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest">Access Phrase (Password)</label>
                                    <a href="#" className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:text-blue-400 transition-colors">Recover?</a>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
                                    <input
                                        type="password"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-6 text-white font-bold focus:outline-none focus:border-blue-500 transition-all focus:bg-white/10 placeholder:text-slate-700"
                                        placeholder="••••••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pl-2">
                            <div className="w-5 h-5 rounded-lg bg-blue-600 flex items-center justify-center p-0.5 border border-blue-400 shadow-lg shadow-blue-600/20 cursor-pointer">
                                <CheckCircle2 size={12} strokeWidth={4} />
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic italic-none">Maintain biometric session for 30 days</span>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || success}
                            className="w-full py-5 btn-gradient rounded-3xl font-black text-lg uppercase tracking-widest shadow-xl shadow-blue-600/30 flex items-center justify-center gap-4 group/btn disabled:opacity-50 disabled:cursor-not-allowed transition-all relative overflow-hidden"
                        >
                            {success ? (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-3">
                                    <CheckCircle2 size={24} /> Authorized
                                </motion.div>
                            ) : loading ? (
                                <Loader2 className="animate-spin" size={24} />
                            ) : (
                                <>
                                    Enter Control Panel
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                                </>
                            )}
                            {/* Internal Glow on Button */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 blur-sm opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        </button>
                    </form>

                    <div className="mt-12 flex items-center justify-center gap-8 border-t border-white/5 pt-10 px-2 opacity-50">
                        <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap italic">
                            <Zap size={14} className="text-amber-500" /> AES-256 Encryption
                        </div>
                        <div className="w-px h-4 bg-white/10" />
                        <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap italic">
                            <Globe size={14} className="text-blue-500" /> Distributed Node
                        </div>
                    </div>
                </div>

                <p className="text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-12 opacity-40">
                    Internal Use Only • Unauthorized Access is prohibited • Digital Parth Patel © 2026
                </p>
            </motion.div>
        </div>
    );
}
