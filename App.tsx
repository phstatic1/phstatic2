
import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { useIsMobile } from './hooks/useIsMobile';
import { ServicePackage, ViewType } from './types';

// Lazy load components para melhor performance mobile
const About = React.lazy(() => import('./components/About').then(mod => ({ default: mod.About })));
const Services = React.lazy(() => import('./components/Services').then(mod => ({ default: mod.Services })));
const Portfolio = React.lazy(() => import('./components/Portfolio').then(mod => ({ default: mod.Portfolio })));
const Process = React.lazy(() => import('./components/Process').then(mod => ({ default: mod.Process })));
const Contact = React.lazy(() => import('./components/Contact').then(mod => ({ default: mod.Contact })));
const Footer = React.lazy(() => import('./components/Footer').then(mod => ({ default: mod.Footer })));
const Chatbot = React.lazy(() => import('./components/Chatbot').then(mod => ({ default: mod.Chatbot })));
const ServiceDetail = React.lazy(() => import('./components/ServiceDetail').then(mod => ({ default: mod.ServiceDetail })));

// Loading fallback simples
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
        <div className="w-8 h-8 border-2 border-primary-300 border-t-primary-600 rounded-full animate-spin" />
      </div>
      <p className="text-gray-600">Carregando...</p>
    </div>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const isMobile = useIsMobile();

  const handleNavigate = (view: ViewType) => {
    setSelectedService(null); // Close detail view if navigating via menu
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleSelectService = (service: ServicePackage) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromService = () => {
    setSelectedService(null);
  };

  // Animações desabilitadas no mobile
  const pageVariants = isMobile ? {} : {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const pageTransition = isMobile ? { duration: 0 } : { duration: 0.3 };

  return (
    <div className="min-h-screen relative font-sans bg-gray-50 flex flex-col">
      {/* Hide header if in detail view to give full focus, or keep it. Keeping it for navigation context. */}
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* Detail View Overlay logic */}
          {selectedService ? (
             <ServiceDetail 
                key="service-detail"
                service={selectedService} 
                onBack={handleBackFromService}
                onHire={handleOpenChat}
             />
          ) : (
            <>
              {currentView === 'home' && (
                <motion.div
                  key="home"
                  initial={isMobile ? {} : { opacity: 0 }}
                  animate={isMobile ? {} : { opacity: 1 }}
                  exit={isMobile ? {} : { opacity: 0 }}
                  transition={pageTransition}
                >
                  <Hero onNavigate={handleNavigate} onOpenChat={handleOpenChat} />
                </motion.div>
              )}

              {currentView === 'about' && (
                <motion.div
                  key="about"
                  initial={pageVariants.initial}
                  animate={pageVariants.animate}
                  exit={pageVariants.exit}
                  transition={pageTransition}
                  className="pt-24 min-h-screen"
                >
                  <Suspense fallback={<LoadingFallback />}>
                    <About onNavigate={handleNavigate} />
                  </Suspense>
                </motion.div>
              )}

              {currentView === 'services' && (
                <motion.div
                  key="services"
                  initial={pageVariants.initial}
                  animate={pageVariants.animate}
                  exit={pageVariants.exit}
                  transition={pageTransition}
                  className="pt-24 min-h-screen"
                >
                  <Suspense fallback={<LoadingFallback />}>
                    <Services onSelectService={handleSelectService} />
                  </Suspense>
                </motion.div>
              )}

              {currentView === 'portfolio' && (
                <motion.div
                  key="portfolio"
                  initial={pageVariants.initial}
                  animate={pageVariants.animate}
                  exit={pageVariants.exit}
                  transition={pageTransition}
                  className="pt-24 min-h-screen"
                >
                  <Suspense fallback={<LoadingFallback />}>
                    <Portfolio onOpenChat={handleOpenChat} />
                  </Suspense>
                </motion.div>
              )}

              {currentView === 'process' && (
                <motion.div
                  key="process"
                  initial={pageVariants.initial}
                  animate={pageVariants.animate}
                  exit={pageVariants.exit}
                  transition={pageTransition}
                  className="pt-24 min-h-screen"
                >
                  <Suspense fallback={<LoadingFallback />}>
                    <Process onOpenChat={handleOpenChat} />
                  </Suspense>
                </motion.div>
              )}

              {currentView === 'contact' && (
                <motion.div
                  key="contact"
                  initial={pageVariants.initial}
                  animate={pageVariants.animate}
                  exit={pageVariants.exit}
                  transition={pageTransition}
                  className="pt-24 min-h-screen"
                >
                  <Suspense fallback={<LoadingFallback />}>
                    <Contact />
                  </Suspense>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </main>

      <Suspense fallback={null}>
        <Footer onNavigate={handleNavigate} />
      </Suspense>
      
      <Suspense fallback={null}>
        <Chatbot 
          isOpen={isChatOpen} 
          setIsOpen={setIsChatOpen} 
          onNavigate={handleNavigate} 
          contextService={selectedService}
        />
      </Suspense>
    </div>
  );
}

export default App;
