import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const pillars = [
  {
    icon: '✦',
    title: 'Artisan Mastery',
    description: 'Each bag is shaped bead by bead by skilled Moroccan artisans using centuries-old techniques.',
  },
  {
    icon: '◈',
    title: 'Limited Production',
    description: 'We produce in small batches to preserve quality, character, and exclusivity.',
  },
  {
    icon: '❖',
    title: 'Natural Materials',
    description: 'We source only the finest crystals, glass beads, and natural agate from trusted suppliers.',
  },
];

function AboutPage() {
  return (
    <PageTransition>
      <main>
        {/* Hero */}
        <section className="section-width section-padding pb-0 pt-14 md:pt-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div>
                <p className="text-2xs font-semibold uppercase tracking-[0.35em] text-gold">
                  About MAISON JUMANMODE
                </p>
                <h1 className="mt-3 font-heading text-4xl leading-tight md:text-5xl">
                  Crafted by Hand.<br />Designed as Luxury.
                </h1>
              </div>
              <p className="leading-relaxed text-cocoa/75">
                MAISON JUMANMODE was founded to bring true handmade artistry into modern luxury fashion. Our
                artisans shape each bag bead by bead, with crystal textures and natural agate accents
                that make every piece unique and unrepeatable.
              </p>
              <p className="leading-relaxed text-cocoa/75">
                Limited production preserves quality, character, and exclusivity. No two MAISON JUMANMODE bags
                are exactly alike — each carries the fingerprint of its maker.
              </p>
              <Link to="/shop" className="btn-primary inline-flex">
                Explore the Collection
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="overflow-hidden rounded-4xl shadow-soft"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/maison-jumanmode-our-story.jpeg`}
                alt="MAISON JUMANMODE bridal couture atelier portrait"
                width="768"
                height="1364"
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Pillars */}
        <section className="section-width section-padding py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="card-base p-7"
              >
                <span className="mb-4 block text-2xl text-gold" aria-hidden="true">
                  {pillar.icon}
                </span>
                <h3 className="font-heading text-xl text-cocoa">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa/65">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

export default AboutPage;
