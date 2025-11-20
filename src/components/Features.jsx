import { BarChart3, ScanLine, Users, Receipt, Cpu, Clock } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Smart analytics',
    desc: 'Track sales, margins, and trends across channels in real time.'
  },
  {
    icon: ScanLine,
    title: 'Barcode & QR',
    desc: 'Ultra-fast scanning with camera or hardware — no setup needed.'
  },
  {
    icon: Users,
    title: 'Staff roles',
    desc: 'Granular permissions and shift tracking with audit logs.'
  },
  {
    icon: Receipt,
    title: 'Receipts & invoices',
    desc: 'Beautiful digital and print receipts with your branding.'
  },
  {
    icon: Cpu,
    title: 'Offline mode',
    desc: 'Keep selling even without internet — sync when you’re back.'
  },
  {
    icon: Clock,
    title: 'Fast checkout',
    desc: 'Optimized flows reduce taps and errors during rush hours.'
  }
];

function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-950" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Everything you need to sell</h2>
          <p className="mt-3 text-blue-100/85">A clean, tactile interface that makes every checkout feel effortless.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10">
              <div className="h-11 w-11 rounded-xl bg-blue-500/15 border border-blue-400/20 text-blue-300 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.25)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/85 leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
