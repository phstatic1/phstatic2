

import React from 'react';
import { SKILLS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Code2, Zap, Heart, Target } from 'lucide-react';
import { ViewType } from '../types';
import { useIsMobile } from '../hooks/useIsMobile';

interface AboutProps {
  onNavigate: (view: ViewType) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Layout: Photo + Content (Responsivo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* FOTO - Esquerda em desktop, topo em mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              {/* Decorative Circle Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"
                style={{ scale: 1.2 }}
              />

              {/* Photo Container */}
              <div className="relative z-10 aspect-square max-w-md mx-auto">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
                >
                  <img 
                    src="https://i.imgur.com/TNMBi27.jpeg" 
                    alt="PH - Desenvolvedor Frontend" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </motion.div>

                {/* Badge flutuante */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 bg-white text-gray-900 px-5 py-3 rounded-2xl shadow-xl border-2 border-primary-100 font-bold text-sm flex items-center gap-2"
                >
                  <Heart size={18} className="text-red-500 fill-red-500" /> 
                  Criativo & Apaixonado
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CONTEÚDO - Direita em desktop, abaixo em mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <SectionTitle 
              title="Sobre Mim" 
              alignment="left"
              subtitle="Transformando ideias em código de qualidade"
            />
            
            {/* Bio */}
            <div className="space-y-5 mb-8">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                Olá! Sou o <strong className="text-gray-900 font-semibold">PH</strong>, um desenvolvedor frontend com mais de <strong className="text-gray-900 font-semibold">5 anos de experiência</strong> criando interfaces digitais que não apenas impressionam visualmente, mas que também funcionam perfeitamente.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                Minha especialidade é o ecossistema <strong className="text-gray-900 font-semibold">React & TypeScript</strong>. Acredito que cada pixel importa, e cada linha de código deve servir ao propósito final: criar experiências memoráveis para os usuários.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                Sou apaixonado por <strong className="text-gray-900 font-semibold">performance, acessibilidade e design</strong>. Quando não estou codando, estou estudando novas tecnologias e tendências do mercado.
              </p>
            </div>

            {/* Características principais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <Code2 size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Código Limpo</h4>
                    <p className="text-sm text-gray-600 mt-1">Padrões da indústria e manutenibilidade em primeiro lugar.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Zap size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Alta Performance</h4>
                    <p className="text-sm text-gray-600 mt-1">Core Web Vitals otimizados para velocidade máxima.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Target size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Foco em Resultados</h4>
                    <p className="text-sm text-gray-600 mt-1">Cada projeto alinhado com objetivos de negócio.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Heart size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Suporte Dedicado</h4>
                    <p className="text-sm text-gray-600 mt-1">30 dias de acompanhamento pós-entrega.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <Button 
                onClick={() => onNavigate('services')}
                rightIcon={<ArrowRight size={18} />}
                className="shadow-lg shadow-primary-600/20 w-full sm:w-auto"
                size="lg"
            >
                Explorar Meus Serviços
            </Button>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 pt-24 border-t border-gray-200"
        >
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-12 text-center">
            Tecnologias que Domino
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all hover:shadow-xl hover:border-primary-200"
              >
                <skill.icon size={isMobile ? 32 : 40} className={skill.color} strokeWidth={1.5} />
                <span className="font-semibold text-gray-800 text-sm md:text-base text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
