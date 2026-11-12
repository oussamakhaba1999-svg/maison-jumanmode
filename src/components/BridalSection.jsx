import { Link } from 'react-router-dom';
import { bridal } from '../data/bridal';

export default function BridalSection() {
  return (
    <section id="bridal-dresses" aria-labelledby="bridal-section-title" className="border-y border-sand/60 bg-white/60">
      <div className="section-width section-padding grid gap-10 py-20 md:grid-cols-2 md:items-center md:gap-16">
        <figure className="min-w-0">
          <img src={`${import.meta.env.BASE_URL}images/maison-jumanmode-bridal-atelier.jpeg`} alt="Inside the MAISON JUMANMODE atelier: lace being sewn by hand at a Singer machine" width="844" height="1262" loading="lazy" className="max-h-[640px] w-full rounded-3xl object-contain bg-sand/30" />
          <figcaption className="mt-3 text-xs tracking-wider text-cocoa/60">A glimpse inside our atelier.</figcaption>
        </figure>
        <div className="min-w-0 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Bridal Couture</p>
          <h2 id="bridal-section-title" className="font-heading text-4xl text-cocoa md:text-5xl">Bridal Dresses</h2>
          <h3 className="font-heading text-2xl text-cocoa">{bridal.name}</h3>
          <p className="inline-block rounded-full border border-gold/40 px-4 py-2 text-xs font-semibold text-cocoa">{bridal.availability}</p>
          <p className="text-sm leading-relaxed text-cocoa/75">{bridal.description}</p>
          <p className="text-sm leading-relaxed text-cocoa/75">{bridal.finish}</p>
          <Link to="/bridal" className="btn-primary inline-flex">Discover Bridal Couture</Link>
        </div>
      </div>
    </section>
  );
}
