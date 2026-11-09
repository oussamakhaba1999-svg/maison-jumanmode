import { motion } from 'framer-motion';
import logoImg from '../assets/logos/ChatGPT Image 21 مارس 2026، 03_27_33 م.png';

/**
 * Premium black-screen intro animation sequence:
 *
 *  0.00s  black screen
 *  0.30s  logo + glow blur fade-in (opacity 0→1, scale 0.88→1, blur 10px→0)
 *  1.00s  floating loop begins (y: 0 → -7 → 0), very subtle
 *  1.20s  diamond shimmer sweep plays once
 *  1.80s  brand name + gold line + tagline fade in
 *  2.80s  App.jsx unmounts → exit: opacity 0, scale 0.97, blur 6px
 */
function LuxuryLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.97,
        filter: 'blur(6px)',
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-black"
      role="status"
      aria-label="Loading MAISON JUMANMODE"
    >
      {/* ── Ambient gold glow behind logo ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.40, 0.28] }}
        transition={{ duration: 2.2, delay: 0.5, ease: 'easeInOut' }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 340,
          height: 340,
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(201,169,110,0.50) 0%, rgba(201,169,110,0.12) 50%, transparent 72%)',
          filter: 'blur(32px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Logo container: fade-in + float ── */}
      <motion.div
        className="relative flex flex-col items-center gap-7"
      >
        {/* Entrance: opacity + scale + blur clear */}
        <motion.div
          initial={{ opacity: 0, scale: 0.86, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 1.3,
            delay: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* Subtle floating loop */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3.8,
              delay: 1.0,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            {/* Logo image */}
            <motion.img
              src={logoImg}
              alt="MAISON JUMANMODE"
              draggable={false}
              className="h-36 w-36 select-none rounded-full object-cover md:h-44 md:w-44"
              /* Glow pulse on the logo itself */
              animate={{
                filter: [
                  'drop-shadow(0 0 10px rgba(201,169,110,0.25))',
                  'drop-shadow(0 0 30px rgba(201,169,110,0.60))',
                  'drop-shadow(0 0 16px rgba(201,169,110,0.35))',
                ],
              }}
              transition={{
                duration: 2.4,
                delay: 0.8,
                ease: 'easeInOut',
                times: [0, 0.45, 1],
              }}
            />

            {/* Diamond shimmer sweep — a sheen of light that moves across once */}
            <motion.div
              aria-hidden="true"
              initial={{ x: '-110%', opacity: 0 }}
              animate={{ x: ['−110%', '110%'], opacity: [0, 0.55, 0] }}
              transition={{
                duration: 1.1,
                delay: 1.35,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.5, 1],
              }}
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
              style={{
                background:
                  'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.38) 50%, transparent 65%)',
              }}
            />
          </motion.div>
        </motion.div>

        {/* ── Brand name + gold line + tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            delay: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center gap-3"
        >
          {/* Wordmark */}
          <p
            className="px-4 text-center font-heading text-xl tracking-[0.18em] text-white/88 md:text-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            MAISON JUMANMODE
          </p>

          {/* Animated gold divider — grows from center */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
            className="h-px w-20 origin-center"
            style={{
              background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)',
            }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.42 }}
            transition={{ duration: 1.0, delay: 1.85, ease: 'easeInOut' }}
            className="text-[10px] font-light uppercase tracking-[0.48em] text-white/50"
          >
            Handcrafted in Morocco
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LuxuryLoader;
