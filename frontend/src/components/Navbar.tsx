import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { CETED_INFO } from '../data/cetedFullData';
import { ThemeToggle } from './ThemeToggle';
import {
  Menu,
  X,
  Home,
  Compass,
  GraduationCap,
  BookOpen,
  Search,
  Mail,
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
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-[padding,box-shadow] duration-200 dark:border-ceted-line dark:bg-ceted-navy/95 ${
          isScrolled ? 'py-3 shadow-sm' : 'py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Marca */}
          <button
            type="button"
            onClick={() => handlePageSelect('inicio')}
            className="group -m-1 flex shrink-0 items-center gap-3 rounded-md p-1 text-left"
            aria-label="Ir a Inicio del CETED"
          >
            <span className="flex items-center rounded-md dark:bg-white dark:px-1.5 dark:py-1">
              <img
                src={CETED_INFO.logo}
                alt="CETED Logotipo oficial"
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none"
                referrerPolicy="no-referrer"
              />
            </span>
            <div className="hidden flex-col text-left sm:flex">
              <span className="font-serif text-lg font-bold leading-tight tracking-tight text-ceted-blue dark:text-blue-300">
                CETED
              </span>
              <span className="text-xs font-semibold uppercase leading-none tracking-wider text-slate-700 dark:text-slate-300">
                Técnicas de Dirección
              </span>
            </div>
          </button>

          {/* Navegación de escritorio */}
          <nav
            className="hidden items-center gap-1 text-[15px] font-medium md:flex"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePageSelect(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-md px-3 py-2 transition-colors ${
                    isActive
                      ? 'font-semibold text-ceted-blue dark:text-blue-300'
                      : 'text-slate-700 hover:text-ceted-blue dark:text-slate-200 dark:hover:text-white'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 transition-colors ${
                      isActive
                        ? 'text-ceted-blue dark:text-blue-300'
                        : 'text-slate-500 group-hover:text-ceted-blue dark:text-slate-400 dark:group-hover:text-white'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                  <span
                    className={`absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full bg-ceted-blue transition-transform duration-200 dark:bg-blue-300 motion-reduce:transition-none ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>

          {/* Acciones */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => handlePageSelect('contacto')}
              aria-current={currentPage === 'contacto' ? 'page' : undefined}
              className={`inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2.5 text-[15px] font-semibold shadow-xs transition duration-150 active:scale-[0.98] motion-reduce:active:scale-100 sm:px-5 ${
                currentPage === 'contacto'
                  ? 'border-2 border-ceted-blue bg-white text-ceted-blue dark:border-blue-300 dark:bg-ceted-navy dark:text-blue-300'
                  : 'bg-ceted-blue text-white hover:bg-ceted-hover dark:hover:bg-[#1567E3]'
              }`}
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Contacto</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-ceted-blue dark:text-slate-200 dark:hover:bg-ceted-deep dark:hover:text-white md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 animate-fade-in overscroll-contain bg-black/60 motion-reduce:animate-none md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs animate-slide-in-right flex-col overflow-y-auto overscroll-contain bg-white p-6 text-left shadow-2xl motion-reduce:animate-none dark:bg-ceted-dark"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 dark:border-ceted-line">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center rounded-md dark:bg-white dark:px-1.5 dark:py-1">
                  <img src={CETED_INFO.logo} alt="CETED" className="h-8 w-auto object-contain" />
                </span>
                <span className="font-serif text-lg font-bold text-ceted-blue dark:text-blue-300">
                  CETED
                </span>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-ceted-deep dark:hover:text-white"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1.5 py-5" aria-label="Navegación móvil">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handlePageSelect(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-[48px] w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base transition-colors ${
                      isActive
                        ? 'border-l-4 border-ceted-blue bg-blue-50 font-semibold text-ceted-blue dark:border-blue-400 dark:bg-blue-400/10 dark:text-blue-300'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-ceted-blue dark:text-slate-200 dark:hover:bg-ceted-deep dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`h-5 w-5 shrink-0 ${
                          isActive
                            ? 'text-ceted-blue dark:text-blue-300'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <span
                        className="h-2 w-2 rounded-full bg-ceted-blue dark:bg-blue-300"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="space-y-3 border-t border-slate-100 pt-4 dark:border-ceted-line">
              <ThemeToggle
                showLabel
                className="w-full justify-start px-4 hover:bg-slate-50"
              />
              <button
                type="button"
                onClick={() => handlePageSelect('contacto')}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-ceted-blue px-4 py-3.5 text-base font-semibold text-white transition duration-150 hover:bg-ceted-hover active:scale-[0.98] motion-reduce:active:scale-100 dark:hover:bg-[#1567E3]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Contacto</span>
              </button>
              <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                {CETED_INFO.slogan}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};