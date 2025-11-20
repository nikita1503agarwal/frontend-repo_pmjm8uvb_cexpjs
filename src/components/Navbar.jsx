import { Menu, ShoppingBag, CreditCard, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.35)]">
            <CreditCard className="h-5 w-5 text-blue-300" />
          </div>
          <div>
            <p className="text-white font-semibold tracking-tight leading-none">FluentPOS</p>
            <p className="text-xs text-blue-200/70 leading-none mt-1">Modern retail platform</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="text-blue-100/80 hover:text-white transition-colors" href="#features">Features</a>
          <a className="text-blue-100/80 hover:text-white transition-colors" href="#pricing">Pricing</a>
          <a className="text-blue-100/80 hover:text-white transition-colors" href="#cta">Get started</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-blue-100 hover:text-white transition-colors">
            <ShoppingBag className="h-4 w-4" />
            Demo
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white text-sm shadow-lg shadow-blue-500/30">
            <Sparkles className="h-4 w-4" />
            Start free
          </button>
          <button className="md:hidden p-2 rounded-xl bg-white/10 border border-white/10">
            <Menu className="h-5 w-5 text-blue-100" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
