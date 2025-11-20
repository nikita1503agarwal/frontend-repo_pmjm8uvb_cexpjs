import Spline from '@splinetool/react-spline';
import { Shield, Zap, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 md:pt-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-blue-100/90 backdrop-blur">
              <Sparkles className="h-3 w-3 text-blue-300" />
              New: Tap-to-Pay and Split Bills
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Elegant POS for modern retail
            </h1>
            <p className="mt-5 text-base md:text-lg text-blue-100/90 leading-7">
              Lightning‑fast checkout, real‑time inventory, and crystal‑clear analytics in a glass‑morphic interface your team will love.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium shadow-lg shadow-blue-500/30">
                Get started free
              </button>
              <button className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-blue-100 hover:text-white text-sm font-medium">
                Live demo
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-blue-200/80">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> PCI compliant</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4" /> 99.99% uptime</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> End‑to‑end encryption</div>
            </div>
          </div>

          {/* 3D Spline */}
          <div className="relative h-[520px] md:h-[600px] rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* subtle gradient overlay for depth (doesn't block pointer) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
