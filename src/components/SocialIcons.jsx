export const socialLinks = {
  instagram: 'https://www.instagram.com/jumanmode1',
  facebook: 'https://www.facebook.com/profile.php?id=61557161014632',
  whatsapp: 'https://wa.me/212620244208',
};

export function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5.5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.5 21v-7h2.7l.4-3.1h-3.1V9c0-.9.3-1.5 1.6-1.5h1.7V4.7c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.4-4 4.2v2.1H7.6V14h2.6v7h3.3Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.1 3.9A10.3 10.3 0 0 0 3.4 16.1L2 22l6.1-1.3a10.3 10.3 0 0 0 4.9 1.2h.1A10.3 10.3 0 0 0 20 3.9Zm-7 16.3h-.1c-1.6 0-3.2-.4-4.6-1.3l-.3-.2-3.6.8.8-3.5-.2-.3a8.5 8.5 0 1 1 8 4.5Zm4.7-6.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0c-2-.9-3.3-2.9-3.4-3.1-.2-.3 0-.5.1-.7.2-.2.4-.4.5-.6.2-.2.2-.3.3-.6s0-.4 0-.6c-.1-.2-.7-1.7-1-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7c0 1.6 1.2 3.1 1.3 3.3.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.8.2 1.5.2 2 .1.6-.1 1.8-.8 2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.2-.6-.4Z" />
    </svg>
  );
}
