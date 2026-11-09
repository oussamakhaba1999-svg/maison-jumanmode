import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, WhatsAppIcon, socialLinks } from './SocialIcons';
import { BRAND_NAME } from '../constants/navigation';
import logoImg from '../assets/logos/ChatGPT Image 21 مارس 2026، 03_27_33 م.png';

const footerLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const socialItems = [
  { href: socialLinks.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: socialLinks.facebook, label: 'Facebook', Icon: FacebookIcon },
  { href: socialLinks.whatsapp, label: 'WhatsApp', Icon: WhatsAppIcon },
];

function Footer() {
  return (
    <footer className="border-t border-sand/60 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt={BRAND_NAME}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-sand"
              />
              <p className="font-heading text-sm tracking-[0.12em] text-cocoa">{BRAND_NAME}</p>
            </div>
            <p className="text-xs leading-relaxed text-cocoa/60">
              Handcrafted luxury bags, made in limited editions with crystal and passion.
            </p>
          </div>

          {/* Page Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-xs font-medium uppercase tracking-wider text-cocoa/60 transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {socialItems.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${BRAND_NAME} on ${label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sand bg-white text-cocoa/70 transition duration-300 hover:scale-105 hover:border-gold hover:text-gold"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-sand/50 pt-6 text-xs text-cocoa/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <p>Handcrafted with love in limited editions.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
