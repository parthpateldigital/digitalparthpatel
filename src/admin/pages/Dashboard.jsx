import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    UserPlus,
    Target,
    Eye,
    TrendingUp,
    ArrowRight,
    MoreVertical,
    Calendar,
    Filter,
    Download
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/StatCard'
import GlassCard from '../components/GlassCard'
import { useToast } from '../context/ToastContext';

const visitorData = [
    { name: 'Jan', visitors: 4000, leads: 2400 },
    { name: 'Feb', visitors: 3000, leads: 1398 },
    { name: 'Mar', visitors: 2000, leads: 9800 },
    { name: 'Apr', visitors: 2780, leads: 3908 },
    { name: 'May', visitors: 1890, leads: 4800 },
    { name: 'Jun', visitors: 2390, leads: 3800 },
    { name: 'Jul', visitors: 3490, leads: 4300 },
];

const recentLeads = [
    { id: 1, name: 'Suresh Kumar', email: 'suresh@gmail.com', service: 'SEO', status: 'In Progress', date: '2 Hours ago', amount: '₹12,000' },
    { id: 2, name: 'Aditi Sharma', email: 'aditi@yahoo.com', service: 'Ads', status: 'New', date: '4 Hours ago', amount: '₹25,000' },
    { id: 3, name: 'Rahul Mehta', email: 'rahul@outlook.com', service: 'Web Dev', status: 'Converted', date: 'Yesterday', amount: '₹8,500' },
    { id: 4, name: 'Priya Verma', email: 'priya@icloud.com', service: 'Social Media', status: 'New', date: '2 Days ago', amount: '₹15,000' },
    { id: 5, name: 'Vikram Singh', email: 'vikram@biz.com', service: 'SEO', status: 'Converted', date: '3 Days ago', amount: '₹20,000' },
];

const statusColors = {
    'New': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'In Progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Converted': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

export default function Dashboard() {
    const addToast = useToast();
    const navigate = useNavigate();

    const handleExport = () => {
        addToast('Generating export file. Please wait...', 'info');
        setTimeout(() => {
            addToast('Dashboard data exported successfully!', 'success');
        }, 1500);
    };

    return (
        <div className="space-y-8 pb-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-4xl font-black text-white tracking-tight mb-2">
                        Welcome Admin – <span className="text-gradient">Digital Parth Patel</span>
                    </h1>
                    <p className="text-slate-400 font-medium">Manage Your Business Easily • Track Your Growth</p>
                </motion.div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => addToast('Date filtering is coming soon!', 'info')}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-300 font-semibold hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                        <Calendar size={18} className="text-blue-500" />
                        Last 30 Days
                    </button>
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 px-6 py-3 btn-gradient rounded-2xl font-bold shadow-blue-600/20 shadow-lg"
                    >
                        <Download size={18} />
                        Export Data
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    label="Total Leads"
                    value="1,284"
                    icon={UserPlus}
                    trend="up"
                    trendValue="12.5"
                    color="blue"
                />
                <StatCard
                    label="Total Clients"
                    value="452"
                    icon={Users}
                    trend="up"
                    trendValue="5.2"
                    color="green"
                />
                <StatCard
                    label="Total Campaigns"
                    value="84"
                    icon={Target}
                    trend="down"
                    trendValue="2.1"
                    color="amber"
                />
                <StatCard
                    label="Website Visitors"
                    value="42.8K"
                    icon={Eye}
                    trend="up"
                    trendValue="18.9"
                    color="purple"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <GlassCard
                    className="xl:col-span-2 min-h-[450px]"
                    title="Traffic Growth"
                    action="View detailed report"
                    onActionClick={() => addToast('Loading detailed report analysis...', 'info')}
                >
                    <div className="h-[350px] w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={visitorData}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#64748b', fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#64748b', fontSize: 12 }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#0f172a',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                                    }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="visitors"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorValue)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>

                <GlassCard title="Source Breakdown">
                    <div className="h-[350px] w-full mt-4 flex flex-col justify-between">
                        <div className="space-y-6">
                            {[
                                { label: 'Google Search', value: '45%', color: 'bg-blue-500' },
                                { label: 'Social Media', value: '30%', color: 'bg-purple-500' },
                                { label: 'Direct Entry', value: '15%', color: 'bg-emerald-500' },
                                { label: 'Referrals', value: '10%', color: 'bg-amber-500' }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-semibold text-white">{item.label}</span>
                                        <span className="text-slate-400 font-bold">{item.value}</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: item.value }}
                                            transition={{ duration: 1.5, delay: i * 0.1 }}
                                            className={`h-full ${item.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            onClick={() => addToast('Milestone details: You have grown 20% compared to last quarter!', 'success')}
                            className="mt-8 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-blue-500/10 transition-colors"
                        >
                            <div>
                                <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">New Milestone</p>
                                <p className="text-sm text-white font-semibold">10k+ New Visitors reached</p>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                                <TrendingUp size={20} />
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Recent Enquiries */}
            <GlassCard
                title="Recent Enquiries"
                action="Manage all leads"
                onActionClick={() => navigate('/admin/leads')}
            >
                <div className="overflow-x-auto -mx-8">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="text-left px-8 py-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Client Name</th>
                                <th className="text-left px-8 py-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Service</th>
                                <th className="text-left px-8 py-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Amount</th>
                                <th className="text-left px-8 py-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Status</th>
                                <th className="text-left px-8 py-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Time</th>
                                <th className="text-right px-8 py-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {recentLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-blue-400 font-bold border border-white/10 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-all">
                                                {lead.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white leading-none mb-1">{lead.name}</p>
                                                <p className="text-xs text-slate-500">{lead.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-sm font-medium text-slate-300">
                                            {lead.service}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-sm font-black text-white">
                                            {lead.amount}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${statusColors[lead.status]}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${lead.status === 'New' ? 'bg-blue-500' : lead.status === 'In Progress' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-slate-500">
                                        {lead.date}
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button
                                            onClick={() => addToast(`Opening details for ${lead.name}`, 'info')}
                                            className="p-2 hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all"
                                        >
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
}
