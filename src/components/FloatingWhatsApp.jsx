import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { socialLinks } from './SocialIcons';

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  // Show after 2 seconds, then pulse once after 5s
  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 2000);
    const pulseTimer = setTimeout(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 2000);
    }, 5000);
    return () => { clearTimeout(showTimer); clearTimeout(pulseTimer); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with MAISON JUMANMODE on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition-shadow hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)]"
        >
          {/* Pulse ring */}
          {pulse && (
            <motion.span
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-[#25D366]"
            />
          )}

          {/* WhatsApp SVG */}
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="M20.1 3.9A10.3 10.3 0 0 0 3.4 16.1L2 22l6.1-1.3a10.3 10.3 0 0 0 4.9 1.2h.1A10.3 10.3 0 0 0 20 3.9Zm-7 16.3h-.1c-1.6 0-3.2-.4-4.6-1.3l-.3-.2-3.6.8.8-3.5-.2-.3a8.5 8.5 0 1 1 8 4.5Zm4.7-6.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0c-2-.9-3.3-2.9-3.4-3.1-.2-.3 0-.5.1-.7.2-.2.4-.4.5-.6.2-.2.2-.3.3-.6s0-.4 0-.6c-.1-.2-.7-1.7-1-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7c0 1.6 1.2 3.1 1.3 3.3.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.8.2 1.5.2 2 .1.6-.1 1.8-.8 2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.2-.6-.4Z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default FloatingWhatsApp;
