import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, WhatsAppIcon, socialLinks } from './SocialIcons';

const socialItems = [
  {
    href: socialLinks.instagram,
    label: 'Follow us on Instagram',
    Icon: InstagramIcon,
    variant: 'icon',
  },
  {
    href: socialLinks.facebook,
    label: 'Follow us on Facebook',
    Icon: FacebookIcon,
    variant: 'icon',
  },
  {
    href: socialLinks.whatsapp,
    label: 'Chat on WhatsApp',
    text: 'WhatsApp',
    Icon: WhatsAppIcon,
    variant: 'cta',
  },
];

function SocialConnectSection() {
  return (
    <section className="section-width section-padding pb-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-4xl border border-sand/70 bg-gradient-to-b from-white to-cream p-10 text-center shadow-soft md:p-16"
      >
        <p className="text-2xs font-semibold uppercase tracking-[0.35em] text-gold">Connect</p>
        <h2 className="mt-3 font-heading text-3xl text-cocoa md:text-4xl">Stay in Touch</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cocoa/65 md:text-base">
          Discover daily elegance, exclusive drops, and personal assistance from MAISON JUMANMODE.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {socialItems.map(({ href, label, Icon, text, variant }) =>
            variant === 'cta' ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {text}
              </a>
            ) : (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-sand bg-white text-cocoa/70 transition duration-300 hover:scale-105 hover:border-gold hover:text-gold"
              >
                <Icon className="h-6 w-6" />
              </a>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default SocialConnectSection;
