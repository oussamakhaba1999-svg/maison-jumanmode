import { motion } from 'framer-motion';

/**
 * @param {{ eyebrow?: string, title: string, description?: string, align?: 'center' | 'left' }} props
 */
function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const isLeft = align === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 max-w-2xl ${isLeft ? '' : 'mx-auto text-center'}`}
    >
      {eyebrow && (
        <p className="mb-2.5 text-2xs font-semibold uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl leading-tight text-cocoa md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3.5 text-sm leading-relaxed text-cocoa/65 md:text-base">{description}</p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
