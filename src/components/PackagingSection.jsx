import { motion } from 'framer-motion';

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M20 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
        <path d="M16 7V5a4 4 0 00-8 0v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
    label: 'Secure Packaging',
    description: 'Each piece wrapped in signature tissue and sealed with a wax stamp.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    label: 'Free Worldwide Delivery',
    description: 'Complimentary tracked shipping on every order, anywhere in the world.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: '100% Handmade',
    description: 'Crafted by expert artisans — no machines, no shortcuts.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    label: 'Certified Authentic',
    description: 'Every bag includes a handwritten certificate of authenticity.',
  },
];

function PackagingSection() {
  return (
    <section className="section-width section-padding py-24" aria-label="Why MAISON JUMANMODE">
      <div className="overflow-hidden rounded-4xl border border-sand/60 bg-gradient-to-br from-cocoa to-cocoa-soft">
        <div className="grid md:grid-cols-2">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center space-y-8 p-10 md:p-14"
          >
            <div>
              <p className="text-2xs font-semibold uppercase tracking-[0.4em] text-gold">
                The MAISON JUMANMODE Promise
              </p>
              <h2 className="mt-4 font-heading text-4xl leading-tight text-white md:text-5xl">
                More Than<br />a Bag.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
                Every order is an experience. From how it arrives at your door to the moment you
                carry it — we obsess over every detail so you never have to.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0 text-gold">{item.icon}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual texture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden min-h-[420px] md:block"
          >
            {/* Gold geometric accent */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Outer ring */}
                <div className="h-64 w-64 rounded-full border border-gold/20" />
                {/* Mid ring */}
                <div className="absolute inset-6 rounded-full border border-gold/30" />
                {/* Inner circle */}
                <div className="absolute inset-14 rounded-full border border-gold/50 bg-gold/5" />
                {/* JM monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-5xl tracking-[0.15em] text-gold/70">JM</span>
                </div>
                {/* Rotating dots */}
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/40"
                    style={{
                      transform: `rotate(${deg}deg) translateY(-120px)`,
                      transformOrigin: 'center 120px',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PackagingSection;
