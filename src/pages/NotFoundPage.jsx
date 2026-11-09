import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

function NotFoundPage() {
  return (
    <PageTransition>
      <main className="section-width section-padding flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-2xs font-semibold uppercase tracking-[0.4em] text-gold">
            Error 404
          </p>
          <h1 className="font-heading text-7xl text-cocoa md:text-8xl">404</h1>
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-cocoa/60">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
            <Link to="/shop" className="btn-outline">
              Browse Shop
            </Link>
          </div>
        </motion.div>
      </main>
    </PageTransition>
  );
}

export default NotFoundPage;
