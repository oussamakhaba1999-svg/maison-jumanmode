import PageTransition from '../components/PageTransition';
import { bridal } from '../data/bridal';
import { socialLinks } from '../components/SocialIcons';
import atelier from '../assets/images/maison-jumanmode-atelier.jpeg';

export default function BridalPage() {
  const inquiry = (type) => socialLinks.whatsapp + '?text=' + encodeURIComponent('Hello MAISON JUMANMODE, I would like to enquire about ' + type + ' for The Celestine Royal Gown.');
  return (
    <PageTransition>
      <main className="overflow-x-clip">
        <section className="section-width section-padding grid gap-10 py-16 md:grid-cols-2 md:items-center md:gap-16">
          <div className="min-w-0 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Bridal Dresses</p>
            <h1 className="font-heading text-4xl leading-tight text-cocoa md:text-6xl">{bridal.name}</h1>
            <p className="text-sm font-semibold text-gold">{bridal.availability}</p>
            <p className="text-base leading-relaxed text-cocoa/75">{bridal.description}</p>
            <p className="text-base leading-relaxed text-cocoa/75">{bridal.finish}</p>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href={inquiry('purchase')} target="_blank" rel="noreferrer">Enquire About Purchase</a>
              <a className="btn-outline" href={inquiry('rental')} target="_blank" rel="noreferrer">Enquire About Rental</a>
            </div>
          </div>
          <figure className="min-w-0">
            <img src={atelier} alt="MAISON JUMANMODE atelier: careful lace work at a Singer sewing machine" width="1024" height="1536" className="max-h-[740px] w-full rounded-3xl object-contain bg-sand/30" />
            <figcaption className="mt-3 text-xs text-cocoa/60">The care behind every creation, inside our atelier.</figcaption>
          </figure>
        </section>
        <section aria-labelledby="bridal-service-title" className="bg-cocoa text-white">
          <div className="section-width section-padding py-16 md:py-24">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Your Bridal Journey</p>
            <h2 id="bridal-service-title" className="mt-4 max-w-3xl font-heading text-3xl leading-tight md:text-5xl">{bridal.serviceHeading}</h2>
            <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/80">{bridal.service}</p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                ['3–4 Exclusive Fittings', 'Personal fitting sessions tailored to your exact needs.'],
                ['From Sketch to Wedding Day', 'Pattern-making, tailoring, and attentive guidance at every stage.'],
                ['A Flawless Finish', 'Expert alterations, modifications, and on-site dressing assistance.'],
              ].map(([title, detail]) => <div key={title} className="rounded-2xl border border-gold/30 p-6"><h3 className="font-heading text-xl text-gold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/75">{detail}</p></div>)}
            </div>
            <a className="btn-primary mt-10 inline-flex" href={inquiry('a bridal consultation')} target="_blank" rel="noreferrer">Arrange a Bridal Consultation</a>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
