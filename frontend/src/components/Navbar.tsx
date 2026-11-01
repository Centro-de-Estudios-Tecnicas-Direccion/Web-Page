import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { CETED_INFO } from '../data/cetedFullData';
import {
  Menu,
  X,
  Home,
  Compass,
  GraduationCap,
  BookOpen,
  Search,
  Mail,
  ArrowRight,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, subTab?: string, facultyId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
      };
    }
  }, [isMobileMenuOpen]);

  // Clean navigation links with intuitive academic SVGs:
  const navItems: {
    id: PageId;
    label: string;
    icon: React.ComponentType<any>;
  }[] = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'nosotros', label: 'Nosotros', icon: Compass },
    { id: 'claustro', label: 'Claustro', icon: GraduationCap },
    { id: 'servicios', label: 'Servicios', icon: BookOpen },
    { id: 'investigacion', label: 'Investigación', icon: Search },
  ];

  const handlePageSelect = (page: PageId, subTab?: string) => {
    onNavigate(page, subTab);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
          isScrolled
            ? 'bg-white shadow-sm border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          
          {/* Logo & Brand Zone (Single clean brand anchor) */}
          <button
            type="button"
            onClick={() => handlePageSelect('inicio')}
            className="flex items-center gap-3 shrink-0 group text-left focus-visible:ring-2 focus-visible:ring-[#0D5DD7] rounded-md p-1 -m-1"
            aria-label="Ir a Inicio del CETED"
          >
            <img
              src={CETED_INFO.logo}
              alt="CETED Logotipo oficial"
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-serif text-lg font-bold tracking-tight text-[#0D5DD7] leading-tight">
                CETED
              </span>
              <span className="text-[11px] font-semibold text-slate-700 tracking-wider uppercase leading-none">
                Técnicas de Dirección
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Academic SVGs */}
          <nav
            className="hidden md:flex items-center gap-6 text-[15px] font-medium"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageSelect(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-2 whitespace-nowrap transition-colors min-h-[44px] flex items-center gap-2 px-2 focus-visible:ring-2 focus-visible:ring-[#0D5DD7] rounded group ${
                    isActive
                      ? 'text-[#0D5DD7] font-bold'
                      : 'text-slate-700 hover:text-[#0D5DD7]'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-[#0D5DD7]' : 'text-slate-500 group-hover:text-[#0D5DD7]'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-2 right-2 h-[2.5px] bg-[#0D5DD7] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone: Contacto as Primary Button in Official Blue with SVG */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handlePageSelect('contacto')}
              aria-current={currentPage === 'contacto' ? 'page' : undefined}
              className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[15px] font-semibold rounded-lg shadow-sm transition-colors min-h-[44px] whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#0D5DD7] ${
                currentPage === 'contacto'
                  ? 'bg-white text-[#0D5DD7] border-2 border-[#0D5DD7]'
                  : 'bg-[#0D5DD7] text-white hover:bg-[#094ab2] active:bg-[#07398a]'
              }`}
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Contacto</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-[#0D5DD7] hover:bg-slate-100 min-w-[44px] min-h-[44px] focus-visible:ring-2 focus-visible:ring-[#0D5DD7]"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/60 transition-opacity overscroll-contain"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col p-6 z-50 overflow-y-auto overscroll-contain text-left"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
          >
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img
                  src={CETED_INFO.logo}
                  alt="CETED"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-serif font-bold text-[#0D5DD7] text-lg">
                  CETED
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 py-5 flex flex-col gap-2" aria-label="Navegación móvil">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageSelect(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full text-left px-4 py-3 text-base rounded-lg transition-colors flex items-center justify-between min-h-[44px] ${
                      isActive
                        ? 'bg-blue-50 text-[#0D5DD7] font-bold border-l-4 border-[#0D5DD7]'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0D5DD7]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#0D5DD7]' : 'text-slate-500'}`}
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </div>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#0D5DD7]" />}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => handlePageSelect('contacto')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 text-base font-semibold text-white bg-[#0D5DD7] hover:bg-[#094ab2] rounded-lg min-h-[48px]"
              >
                <Mail className="w-4 h-4" />
                <span>Contacto</span>
              </button>
              <p className="text-xs text-center text-slate-500">
                {CETED_INFO.slogan}
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
