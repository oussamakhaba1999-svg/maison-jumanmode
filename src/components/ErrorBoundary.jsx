import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary] Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-cream px-6 text-center">
          <h1 className="font-heading text-5xl text-cocoa">Something went wrong</h1>
          <p className="text-sm text-cocoa/70">
            We encountered an unexpected error. Please reload the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-cocoa px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-gold"
          >
            Reload Page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
