import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
    const whatsappNumber = "917600907141" // Replace with actual number
    const message = "Hi Parth, I'm interested in your digital marketing services!"

    return (
        <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ y: -5 }}
        >
            <div className="absolute right-full mr-3 hidden group-hover:block bg-dark border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap">
                Chat with us on WhatsApp
            </div>
            <MessageCircle size={24} fill="white" />
        </motion.a>
    )
}

export default WhatsAppButton
