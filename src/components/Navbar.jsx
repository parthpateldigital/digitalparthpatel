import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Sparkles, ChevronDown } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
        setActiveDropdown(null)
    }, [location])

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Services',
            path: '/#services',
            dropdown: [
                { name: 'SEO (Search Engine Optimization)', path: '/services/Search-Engine-Optimization' },
                { name: 'SMO (Social Media Optimization)', path: '/services/Social-Media-Optimization' },
                { name: 'SMM (Social Media Marketing)', path: '/services/Social-Media-Marketing' },
                { name: 'PPC (Pay Per Click Advertising)', path: '/services/Pay-Per-Click-Advertising' },
            ]
        },
        { name: 'About Us', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                ? 'bg-slate-950/80 backdrop-blur-xl py-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-b border-white/10'
                : 'bg-gradient-to-b from-slate-950/80 to-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                        <img 
                            src="/images/logo-new.png" 
                            alt="Digital Parth Patel" 
                            className="h-10 md:h-14 w-auto object-contain brightness-125 contrast-125 transition-transform hover:scale-110"
                        />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group/item"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-bold transition-all ${location.pathname === link.path || (location.pathname === '/' && link.path === '/')
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-white'
                                    } flex items-center gap-1`}
                            >
                                <span>{link.name}</span>
                                {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}

                                {(location.pathname === link.path || (location.pathname === '/' && link.path === '/')) && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {link.dropdown && activeDropdown === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl"
                                    >
                                        {link.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                className="block px-4 py-3 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <div className="w-8" />
                    <Link
                        to="/contact"
                        className="btn-gradient px-8 py-3 rounded-xl text-sm font-black flex items-center gap-2 group shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                    >
                        Free Consultation
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl text-white focus:outline-none border border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-x-4 top-24 bottom-4 bg-slate-900/95 backdrop-blur-2xl z-[101] lg:hidden rounded-[2rem] border border-white/10 flex flex-col items-center justify-start space-y-4 p-8 shadow-2xl overflow-y-auto"
                    >
                        {navLinks.map((link) => (
                            <div key={link.name} className="w-full">
                                <div
                                    className={`flex justify-between items-center w-full py-2 ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
                                    onClick={() => link.dropdown ? setActiveDropdown(activeDropdown === link.name ? null : link.name) : setIsOpen(false)}
                                >
                                    <Link
                                        to={link.path}
                                        className="text-2xl font-black"
                                        onClick={(e) => link.dropdown && e.preventDefault()}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && <ChevronDown size={24} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                </div>

                                {link.dropdown && activeDropdown === link.name && (
                                    <div className="mt-2 space-y-2 pl-4 border-l-2 border-primary/20">
                                        {link.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                className="block py-2 text-sm font-bold text-slate-400 hover:text-white"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="w-full pt-4">
                            <Link
                                to="/contact"
                                className="btn-gradient px-12 py-5 rounded-2xl text-xl font-black w-full block text-center shadow-2xl shadow-primary/30"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
