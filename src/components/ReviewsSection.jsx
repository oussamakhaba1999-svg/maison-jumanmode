import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Sophia L.',
    location: 'Paris, France',
    rating: 5,
    text: 'Absolutely breathtaking. The craftsmanship is unlike anything I have seen at this price point. The crystals catch light beautifully — every compliment I have received has been about this bag.',
    product: 'Noir Crystal Box Bag',
    initials: 'SL',
  },
  {
    id: 2,
    name: 'Amira B.',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'MAISON JUMANMODE is the definition of quiet luxury. The packaging alone made me emotional. The bag arrived perfectly wrapped, like a gift to myself. I will never buy from anywhere else.',
    product: 'Aurora Mini Clutch',
    initials: 'AB',
  },
  {
    id: 3,
    name: 'Isabelle M.',
    location: 'Milan, Italy',
    rating: 5,
    text: `I've carried Chanel and Dior. This bag holds its own — the attention to detail, the weight of the beads, the silk lining. This is heirloom quality at a fraction of the price.`,
    product: 'Sahara Shoulder Bag',
    initials: 'IM',
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-gold" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewsSection() {
  return (
    <section className="section-width section-padding py-24" aria-label="Customer reviews">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="text-2xs font-semibold uppercase tracking-[0.4em] text-gold">Testimonials</p>
        <h2 className="mt-3 font-heading text-4xl text-cocoa md:text-5xl">Worn & Loved</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cocoa/60">
          Every piece finds its story. Here are a few.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review, i) => (
          <motion.article
            key={review.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card-base flex flex-col justify-between gap-6 p-7"
          >
            <div className="space-y-4">
              <StarRow count={review.rating} />
              <blockquote className="text-sm leading-relaxed text-cocoa/80">
                &ldquo;{review.text}&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-3 border-t border-sand/50 pt-5">
              {/* Avatar initials circle */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/30 to-sand text-xs font-semibold tracking-widest text-cocoa">
                {review.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-cocoa">{review.name}</p>
                <p className="text-xs text-cocoa/50">{review.location}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Aggregate trust badge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-6 text-center text-xs text-cocoa/50"
      >
        <div className="flex items-center gap-2">
          <StarRow count={5} />
          <span className="font-semibold text-cocoa">5.0</span>
          <span>average rating</span>
        </div>
        <div className="h-4 w-px bg-sand" aria-hidden="true" />
        <span>485+ verified customers</span>
        <div className="h-4 w-px bg-sand" aria-hidden="true" />
        <span>Worldwide shipping</span>
      </motion.div>
    </section>
  );
}

export default ReviewsSection;
