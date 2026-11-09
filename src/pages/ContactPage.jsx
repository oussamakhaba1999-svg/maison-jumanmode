import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { socialLinks } from '../components/SocialIcons';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission – replace with real API call
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <main className="section-width section-padding py-14 md:py-16">
        <div className="mx-auto max-w-3xl">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card-base p-7 md:p-12"
          >
            <p className="text-2xs font-semibold uppercase tracking-[0.35em] text-gold">Contact</p>
            <h1 className="mt-3 font-heading text-4xl text-cocoa">Connect with Us</h1>
            <p className="mt-3 text-sm leading-relaxed text-cocoa/65">
              For private orders, custom requests, or collaborations — send us a message and our
              team will respond promptly.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
              >
                <p className="font-semibold text-green-700">Message sent! ✓</p>
                <p className="mt-1 text-sm text-green-600">
                  We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2" noValidate>
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="input-field"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="input-field"
                    autoComplete="email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number (optional)"
                    className="input-field"
                    autoComplete="tel"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="input-field resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary md:col-span-2">
                  Send Message
                </button>
              </form>
            )}

            {/* Direct contact shortcuts */}
            <div className="mt-6 flex flex-wrap gap-3 border-t border-sand/50 pt-6">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-green-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-green-700 transition hover:bg-green-500 hover:text-white"
              >
                WhatsApp
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cocoa/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cocoa transition hover:border-gold hover:text-gold"
              >
                Instagram
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cocoa/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cocoa transition hover:border-gold hover:text-gold"
              >
                Facebook
              </a>
            </div>
          </motion.section>
        </div>
      </main>
    </PageTransition>
  );
}

export default ContactPage;
