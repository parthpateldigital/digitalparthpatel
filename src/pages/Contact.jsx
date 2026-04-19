import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import FAQ from '../components/FAQ'

const Contact = () => {
    const [sending, setSending] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        const formData = new FormData(e.target);
        
        // Ye 'parthpateldigital@gmail.com' par mail bhejne ke liye 
        // aapko bas apni Web3Forms Access Key yahan daalni hai.
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 
        formData.append("from_name", "Digital Parth Patel Website");
        formData.append("subject", "New Inquiry for Digital Parth Patel");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await res.json();

            if (data.success) {
                alert("Thank you! Your message has been sent directly to our email. We will contact you soon.");
                e.target.reset();
            } else {
                alert("Submission failed. Please check if your Access Key is correct.");
            }
        } catch (error) {
            alert("Connection error. Could not send the email.");
        } finally {
            setSending(false);
        }
    }

    return (
        <div className="pt-24 min-h-screen bg-dark">
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight"
                        >
                            Ready to Scale Your <br /><span className="text-gradient">Digital Success?</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-lg md:text-xl leading-relaxed"
                        >
                            Fill out the form below and we'll receive your query **directly via email**. Our team usually responds within 24 hours.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="glass-card p-8 rounded-2xl border-white/5 space-y-8"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Email Us</h4>
                                        <p className="text-slate-400">parthpateldigital@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Call Us</h4>
                                        <p className="text-slate-400">+91 76009 07141</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Our Office</h4>
                                        <p className="text-white font-medium">4 Baleshwar Vihar, Bopal, Ahmedabad, Gujarat, India</p>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5 space-y-4">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Business Hours</h4>
                                    <div className="flex justify-between items-center text-slate-400 text-sm">
                                        <span>Monday - Friday</span>
                                        <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-400 text-sm">
                                        <span>Saturday</span>
                                        <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-400 text-sm">
                                        <span>Sunday</span>
                                        <span className="text-primary font-medium">Closed</span>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <a
                                        href="https://wa.me/917600907141"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
                                    >
                                        <MessageCircle size={20} />
                                        WhatsApp Us Now
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="glass-card p-10 rounded-2xl border-white/5 h-full"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-slate-300 font-medium text-sm">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-slate-300 font-medium text-sm">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-slate-300 font-medium text-sm">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="+91 00000 00000"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-slate-300 font-medium text-sm">Service Interested In</label>
                                            <select
                                                name="service"
                                                className="w-full bg-slate-900 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                                            >
                                                <option>SEO Services</option>
                                                <option>Social Media Marketing</option>
                                                <option>Paid Advertising (Ads)</option>
                                                <option>Full Digital Growth</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-slate-300 font-medium text-sm">Message</label>
                                        <textarea
                                            rows="5"
                                            name="message"
                                            placeholder="Tell us about your business goals..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-all"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={sending}
                                        className="btn-gradient w-full py-5 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {sending ? 'Sending...' : 'Send Message'}
                                        {!sending && <Send size={20} />}
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="relative glass-card h-[450px] rounded-3xl overflow-hidden border-white/10">
                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center grayscale opacity-50">
                            <p className="text-white font-bold text-xl uppercase tracking-widest">Google Map Embed Placeholder</p>
                        </div>
                        {/* Simulating a real map embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.697915724419!2d72.49842817596541!3d23.03486137913364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4760a11ff7a4bbf0!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className="w-full h-full border-0 filter invert contrast-125 brightness-75 scale-105"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </section>
            <FAQ />
        </div>
    )
}

export default Contact
