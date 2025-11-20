import { ArrowRight } from 'lucide-react';

function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-800/40 backdrop-blur-xl p-10 md:p-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_90%_10%,rgba(59,130,246,0.25),transparent)]" />
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Start selling in minutes</h3>
              <p className="mt-3 text-blue-100/85">Create your store, connect your terminal, and import products — no credit card required.</p>
            </div>
            <div className="flex md:justify-end">
              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/30">
                Create free account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
