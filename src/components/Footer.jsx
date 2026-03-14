import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-950 pt-12 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to="/" className="flex flex-col">
                            <span className="text-2xl font-bold tracking-tight text-white uppercase">
                                Digital <span className="text-gradient italic">Parth Patel</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium tracking-[0.2em] uppercase">
                                Grow Your Business Digitally
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            We help businesses transform their digital presence and achieve sustainable growth through ROI-driven marketing strategies.
                        </p>
                        <div className="flex space-x-4">
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
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/seo-services" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    SEO (Optimization)
                                </Link>
                            </li>
                            <li>
                                <Link to="/smo-services" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    SMO (Optimization)
                                </Link>
                            </li>
                            <li>
                                <Link to="/smm-services" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    SMM (Marketing)
                                </Link>
                            </li>
                            <li>
                                <Link to="/ppc-services" className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    PPC (Advertising)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2">
                            {['About', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors text-sm">
                                        {item === 'About' ? 'About Us' : item === 'Contact' ? 'Contact Us' : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
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
                                <span>Ahmedabad, Gujarat, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs">
                        © {currentYear} Digital Parth Patel. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-slate-500 hover:text-primary text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-primary text-xs transition-colors">Terms of Service</a>
                        <a href="#" className="text-slate-500 hover:text-primary text-xs transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
