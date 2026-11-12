import PageTransition from '../components/PageTransition';
import { bridal } from '../data/bridal';
import { socialLinks } from '../components/SocialIcons';


export default function BridalPage() {
  const inquiry = (type) => socialLinks.whatsapp + '?text=' + encodeURIComponent('Hello MAISON JUMANMODE, I would like to enquire about ' + type + ' from the Bridal Wear collection.');
  return (
    <PageTransition>
      <main className="overflow-x-clip">
        <section className="section-width section-padding py-16">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">The Collection</p>
            <h1 className="mt-4 font-heading text-4xl text-cocoa md:text-6xl">Bridal Wear</h1>
            <p className="mt-5 leading-relaxed text-cocoa/70">Discover our bridal creations and find the dress for your special day.</p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {[1, 2].map((number) => (
              <article key={number} className="min-w-0 overflow-hidden rounded-3xl border border-sand/60 bg-white">
                <img src={`${import.meta.env.BASE_URL}images/maison-jumanmode-bridal-collection-${number}.jpeg`} alt={`MAISON JUMANMODE bridal design 0${number}`} loading="lazy" className="h-auto w-full" />
                <div className="space-y-4 p-6 md:p-8">
                  <h2 className="font-heading text-2xl text-cocoa">Bridal Design 0{number}</h2>
                  <a href={inquiry('Bridal Design 0' + number)} target="_blank" rel="noreferrer" className="btn-outline inline-flex">Enquire About This Dress</a>
                </div>
              </article>
            ))}
          </div>
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
