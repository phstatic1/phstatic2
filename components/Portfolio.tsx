
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../projectsData';
import { SectionTitle } from './SectionTitle';
import { ExternalLink, Github, Lock, Loader2, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Project } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

interface PortfolioProps {
  onOpenChat: () => void;
}

// Sub-componente otimizado para mobile
const ProjectCard: React.FC<{ project: Project; index: number; onNavigation: (url: string) => void; isMobile: boolean }> = ({ project, index, onNavigation, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [shouldLoadIframe, setShouldLoadIframe] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldLoadIframe(true);
                    observer.disconnect();
                }
            },
            { threshold: isMobile ? 0.3 : 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [isMobile]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            onClick={() => isMobile && setIsHovered(!isHovered)}
            className={`group relative rounded-3xl transition-all duration-500 bg-white border border-gray-200 shadow-xl hover:shadow-2xl hover:shadow-primary-900/10 overflow-hidden ${project.featured && !isMobile ? 'lg:col-span-2' : ''}`}
        >
            {/* Browser Window Chrome - Ocultar em mobile */}
            {!isMobile && (
                <div className="bg-gray-100 border-b border-gray-200 rounded-t-3xl px-4 py-3 flex items-center gap-4 select-none z-20 relative">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/80 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400/80 border border-amber-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400/80 border border-green-500/50"></div>
                    </div>
                    <div className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-1.5 flex items-center justify-center text-xs text-gray-500 font-mono gap-2 shadow-sm">
                        <Lock size={10} className="text-green-600" />
                        <span className="truncate max-w-[200px] md:max-w-xs">{project.liveUrl?.replace('https://', '') || 'loading...'}</span>
                    </div>
                    <div className="w-10"></div>
                </div>
            )}

            {/* Content Area */}
            <div className={`relative overflow-hidden bg-gray-50 ${isMobile ? 'h-[250px]' : 'h-[300px] md:h-[450px]'}`}>
                
                {/* Static Image */}
                <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${iframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    {shouldLoadIframe && !iframeLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm">
                            <Loader2 className="w-8 h-8 text-white animate-spin" />
                        </div>
                    )}
                </div>

                {/* LIVE PREVIEW IFRAME (Desktop Only) */}
                {project.liveUrl && shouldLoadIframe && !isMobile && (
                    <div className="absolute inset-0 z-0 hidden md:block w-full h-full bg-white">
                        <div className="w-[200%] h-[200%] origin-top-left transform scale-50">
                            <iframe 
                                src={project.liveUrl}
                                title={`Preview of ${project.title}`}
                                className="w-full h-full border-0"
                                loading="lazy"
                                onLoad={() => setIframeLoaded(true)}
                                style={{ pointerEvents: 'none' }}
                                sandbox="allow-scripts allow-same-origin"
                            />
                        </div>
                        <div className="absolute inset-0 z-10 bg-transparent"></div>
                    </div>
                )}
            </div>

            {/* Project Info Overlay */}
            <div className={`absolute bottom-0 left-0 w-full z-30 pointer-events-none transition-transform duration-300 ${
                isHovered || isMobile ? 'translate-y-0' : 'translate-y-2'
            }`}>
                <div className={`p-4 md:p-6 lg:p-8 bg-gradient-to-t from-gray-950 via-gray-900/90 to-transparent ${
                    isMobile ? 'pt-16' : 'pt-24'
                }`}>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold tracking-wider text-primary-300 uppercase bg-primary-900/80 backdrop-blur-md px-2 py-1 rounded border border-primary-500/30 shadow-lg">
                            {project.category}
                        </span>
                    </div>
                    <h3 className={`${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'} font-display font-bold text-white mb-2 shadow-sm drop-shadow-md`}>
                        {project.title}
                    </h3>
                    <p className={`text-gray-200 text-sm ${isMobile ? '' : 'md:text-base'} max-w-xl mb-4 md:mb-6 leading-relaxed transition-all duration-300 ${isHovered || isMobile ? 'opacity-100 line-clamp-none' : 'opacity-90 line-clamp-2'}`}>
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6 pointer-events-auto">
                        {project.tags.slice(0, isMobile ? 2 : 4).map(tag => (
                            <span key={tag} className="text-xs text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className={`flex gap-2 pointer-events-auto flex-col sm:flex-row`}>
                        <Button 
                            variant="primary" 
                            size={isMobile ? "sm" : "md"} 
                            className="!bg-white !text-gray-900 hover:!bg-gray-100 border-none shadow-xl !w-full sm:!w-auto"
                            leftIcon={<ExternalLink size={16} />}
                            onClick={() => onNavigation(project.demoUrl)}
                        >
                            Visitar
                        </Button>
                        {!project.liveUrl?.includes('hce') && (
                            <Button 
                                variant="secondary" 
                                size={isMobile ? "sm" : "md"} 
                                className="bg-gray-800/80 backdrop-blur-md hover:bg-gray-800 border border-gray-700 !w-full sm:!w-auto"
                                leftIcon={<Github size={16} />}
                                onClick={() => onNavigation('https://github.com')}
                            >
                                GitHub
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenChat }) => {
    const isMobile = useIsMobile();
    
    const handleNavigation = (url: string) => {
        if (!url || url === '#') return;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="portfolio" className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <SectionTitle 
                    title="Portfólio Selecionado" 
                    subtitle="Projetos reais, resultados reais. Navegue pelos trabalhos realizados."
                />

                <div className={`grid gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto ${
                    isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
                }`}>
                    {PROJECTS_DATA.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index} 
                            onNavigation={handleNavigation}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 md:mt-20"
                >
                    <div className={`inline-block p-1 rounded-2xl bg-gray-100 border border-gray-200 shadow-sm ${
                        isMobile ? 'w-full flex flex-col' : ''
                    }`}>
                        <div className={`flex ${isMobile ? 'flex-col' : 'gap-2'}`}>
                            <Button 
                                variant="ghost" 
                                size={isMobile ? "md" : "lg"} 
                                onClick={() => handleNavigation('https://github.com')}
                                leftIcon={<Github size={20} />}
                                className={isMobile ? 'w-full' : ''}
                            >
                                Repositórios
                            </Button>
                            <Button 
                                variant="primary" 
                                size={isMobile ? "md" : "lg"} 
                                onClick={onOpenChat}
                                rightIcon={<ArrowRight size={18} />}
                                className={`shadow-lg shadow-primary-600/20 ${isMobile ? 'w-full' : ''}`}
                            >
                                Iniciar Projeto
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
