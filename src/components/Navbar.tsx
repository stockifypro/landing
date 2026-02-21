import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactOpen: () => void;
}

export default function Navbar({ onContactOpen }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 border-b border-white/5 bg-surface/60 backdrop-blur-xl" role="navigation" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="flex items-center gap-2 group" aria-label="Stockify.pro — Ir al inicio">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-violet flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Stockify<span className="text-accent-light">.pro</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-sm text-gray-400 hover:text-white transition-colors">
              Características
            </a>
            <a href="#ai-calls" onClick={(e) => handleNavClick(e, 'ai-calls')} className="text-sm text-gray-400 hover:text-white transition-colors">
              IA Llamadas
            </a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-sm text-gray-400 hover:text-white transition-colors">
              Precios
            </a>
            <button onClick={onContactOpen} className="text-sm text-gray-400 hover:text-white transition-colors">
              Contacto
            </button>
            <button
              onClick={onContactOpen}
              className="btn-glow text-white px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Empezar Gratis
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-2 space-y-1 bg-surface/95 backdrop-blur-xl border-t border-white/5">
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="block py-2.5 text-sm text-gray-400 hover:text-white transition-colors">
            Características
          </a>
          <a href="#ai-calls" onClick={(e) => handleNavClick(e, 'ai-calls')} className="block py-2.5 text-sm text-gray-400 hover:text-white transition-colors">
            IA Llamadas
          </a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="block py-2.5 text-sm text-gray-400 hover:text-white transition-colors">
            Precios
          </a>
          <button onClick={() => { onContactOpen(); setIsMobileMenuOpen(false); }} className="block w-full text-left py-2.5 text-sm text-gray-400 hover:text-white transition-colors">
            Contacto
          </button>
          <button
            onClick={() => { onContactOpen(); setIsMobileMenuOpen(false); }}
            className="w-full btn-glow text-white px-5 py-2.5 rounded-lg text-sm font-semibold mt-2"
          >
            Empezar Gratis
          </button>
        </div>
      </div>
    </nav>
  );
}
