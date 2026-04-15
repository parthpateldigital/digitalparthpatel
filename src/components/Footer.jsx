import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-slate-950 pt-16 pb-6 border-t border-white/10 overflow-hidden z-10">
            {/* Background Glows */}
            <div className="absolute top-0 left-[20%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-[10%] w-[20%] h-[40%] bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6 lg:pr-6">
                        <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                            <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-xl border border-white/10 inline-block">
                                <img 
                                    src="/images/logo.png" 
                                    alt="Digital Parth Patel" 
                                    className="h-8 md:h-10 w-auto object-contain brightness-125 contrast-125"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed font-light">
                            We help businesses transform their digital presence and achieve sustainable growth through ROI-driven marketing strategies.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/digitalparthpatel19/' },
                                { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/digitalparthpatel/' },
                                { icon: Linkedin, name: 'Linkedin', url: 'https://www.linkedin.com/company/digital-parth-patel/' },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all duration-300 border border-white/10"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/services/Search-Engine-Optimization" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    SEO
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/Social-Media-Optimization" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    SMO
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/Social-Media-Marketing" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    SMM
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/Pay-Per-Click-Advertising" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    PPC
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2">
                            {['About', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors text-sm">
                                        {item === 'About' ? 'About Us' : item === 'Contact' ? 'Contact Us' : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Phone size={16} className="text-primary" />
                                <a href="tel:+917600907141" className="hover:text-primary transition-colors">+91 76009 07141</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Mail size={16} className="text-primary" />
                                <a href="mailto:parthpateldigital@gmail.com" className="hover:text-primary transition-colors break-all">parthpateldigital@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                                <span>Bopal, Ahmedabad, Gujarat, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-xs">
                        © {currentYear} Digital Parth Patel. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/privacy-policy" className="text-slate-500 hover:text-primary text-xs transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="text-slate-500 hover:text-primary text-xs transition-colors">Terms of Service</Link>
                        <Link to="/cookie-policy" className="text-slate-500 hover:text-primary text-xs transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
