import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background subtle grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center text-sm text-blue-200/70">
        © {new Date().getFullYear()} FluentPOS. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
