/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ClaustroPage } from './pages/ClaustroPage';
import { ServicesPage } from './pages/ServicesPage';
import { ResearchPage } from './pages/ResearchPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [servicesInitialTab, setServicesInitialTab] = useState<
    'pregrado' | 'posgrado' | 'gabinete' | 'consultora'
  >('posgrado');
  const [activeFacultyId, setActiveFacultyId] = useState<string | undefined>(undefined);
  const [preselectedProgram, setPreselectedProgram] = useState<string>('Maestría en Dirección');

  // Sync with URL Hash
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '');
      
      // Backward redirects
      if (rawHash === 'sobre-nosotros') {
        setCurrentPage('nosotros');
        return;
      }
      if (rawHash === 'extensiones' || rawHash === 'blog') {
        setCurrentPage('investigacion');
        return;
      }

      const validPages: PageId[] = [
        'inicio',
        'nosotros',
        'claustro',
        'servicios',
        'investigacion',
        'contacto',
      ];
      if (validPages.includes(rawHash as PageId)) {
        setCurrentPage(rawHash as PageId);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, subTab?: string, facultyId?: string) => {
    if (page === 'servicios' && subTab) {
      setServicesInitialTab(subTab as 'pregrado' | 'posgrado' | 'gabinete' | 'consultora');
    }
    if (facultyId) {
      setActiveFacultyId(facultyId);
    } else {
      setActiveFacultyId(undefined);
    }

    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApply = (programName: string) => {
    setPreselectedProgram(programName);
    handleNavigate('contacto');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans">
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Pages */}
      <main id="main-content" className="flex-1">
        {currentPage === 'inicio' && <HomePage onNavigate={handleNavigate} />}

        {currentPage === 'nosotros' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'claustro' && (
          <ClaustroPage initialFacultyId={activeFacultyId} onNavigate={handleNavigate} />
        )}

        {currentPage === 'servicios' && (
          <ServicesPage
            initialSubcategory={servicesInitialTab}
            onNavigate={handleNavigate}
            onOpenApply={handleOpenApply}
          />
        )}

        {currentPage === 'investigacion' && <ResearchPage onNavigate={handleNavigate} />}

        {currentPage === 'contacto' && (
          <ContactPage preselectedProgram={preselectedProgram} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Academic Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
