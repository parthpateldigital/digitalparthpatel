import React from 'react';
import {
    Search,
    Bell,
    Sun,
    Moon,
    ChevronDown
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';

export default function AdminNavbar() {
    const { isDarkMode, toggleTheme } = useTheme();
    const addToast = useToast();

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            addToast(`Searching for: "${e.target.value}"`, 'info');
            e.target.value = '';
        }
    };

    return (
        <nav className="w-full h-full flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search Intelligence Terminal..."
                        onKeyDown={handleSearch}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-700 italic italic-none"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group overflow-hidden relative active:scale-90"
                    >
                        {isDarkMode ? (
                            <Sun className="text-slate-400 group-hover:text-amber-400 transition-colors" size={18} />
                        ) : (
                            <Moon className="text-slate-600 group-hover:text-blue-400 transition-colors" size={18} />
                        )}
                    </button>

                    <button
                        onClick={() => addToast('System monitoring: All nodes operational', 'success')}
                        className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group overflow-hidden relative active:scale-90"
                    >
                        <Bell className="text-slate-400 group-hover:text-blue-400 transition-colors" size={18} />
                        <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-blue-500 rounded-full border border-[#020617] shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse" />
                    </button>
                </div>

                <div className="w-px h-8 bg-white/5" />

                <div className="flex items-center gap-5 cursor-pointer group" onClick={() => addToast('Resolving User Identity Permissions...', 'info')}>
                    <div className="text-right hidden md:block">
                        <p className="text-[10px] font-black text-white uppercase tracking-tighter italic">Parth Patel</p>
                        <p className="text-[8px] text-blue-500 uppercase tracking-[0.2em] font-black opacity-60">Master Architect</p>
                    </div>
                    <div className="relative group-hover:scale-105 transition-transform duration-500">
                        <div className="w-11 h-11 rounded-[22px] overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-all shadow-2xl">
                            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center font-black text-white text-xs italic">
                                PP
                            </div>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-[3px] border-[#020617] shadow-lg shadow-emerald-500/20" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
