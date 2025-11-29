
import React from 'react';
import { SKILLS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, CheckCircle, Zap, Code2, BarChart3, Heart } from 'lucide-react';
import { ViewType } from '../types';

interface AboutProps {
  onNavigate: (view: ViewType) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const highlights = [
    { title: "5+ Anos", desc: "De experiência em desenvolvimento" },
    { title: "Código Limpo", desc: "Padrões profissionais e manutenível" },
    { title: "Performance", desc: "Web Vitals otimizados" },
    { title: "Suporte 30 dias", desc: "Acompanhamento pós-entrega" }
  ];

  const differentials = [
    { icon: Zap, title: "Rápido & Eficiente", color: "text-yellow-500" },
    { icon: Code2, title: "Código Escalável", color: "text-blue-500" },
    { icon: BarChart3, title: "Orientado a Resultados", color: "text-green-500" },
    { icon: Heart, title: "Apaixonado pelo Que Faz", color: "text-red-500" }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-white pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          title="Sobre Mim" 
          alignment="left"
        />
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 items-start">
          
          {/* LEFT: Photo Card - Much Smaller */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-xs">
              {/* Photo Card Container */}
              <div className="group relative">
                {/* Decorative bg - Subtle */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary-300 to-primary-200 rounded-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 blur-lg" />
                
                {/* Main card - Compact */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src="https://i.imgur.com/TNMBi27.jpeg" 
                      alt="Philippe Boechat"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay info - Compact */}
                  <div className="p-4 bg-gradient-to-t from-primary-900/90 to-primary-900/50 text-white">
                    <h3 className="text-lg font-bold mb-1">Philippe</h3>
                    <p className="text-xs text-primary-100 flex items-center gap-2">
                      <CheckCircle size={14} />
                      Frontend Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Cards Below - Compact */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-3 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border border-primary-200 text-center"
                >
                  <p className="text-xl font-bold text-primary-600">5+</p>
                  <p className="text-xs text-gray-600 mt-0.5">Anos</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-3 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-lg border border-blue-200 text-center"
                >
                  <p className="text-xl font-bold text-blue-600">20+</p>
                  <p className="text-xs text-gray-600 mt-0.5">Projetos</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col justify-start"
          >
            {/* Main Content */}
            <div className="mb-10">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Olá! Sou o <span className="font-bold text-gray-900">Philippe Boechat</span>, um desenvolvedor apaixonado por criar interfaces digitais que são <span className="text-primary-600 font-semibold">bonitas, funcionais e acessíveis</span>.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Especializo-me no ecossistema <span className="font-bold">React & TypeScript</span>. Cada projeto é uma oportunidade de entregar código limpo, performático e escalável que adiciona valor real ao negócio.
              </p>

              <p className="text-base text-gray-500 leading-relaxed">
                Minha abordagem combina design thinking com boas práticas de engenharia para criar soluções que não apenas resolvem problemas, mas proporcionam excelência na experiência do usuário.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-primary-300 hover:from-primary-50 hover:to-primary-100 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Differentials Section */}
            <div className="mb-12 p-6 bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-2xl border border-primary-200/50">
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">O que me diferencia</h4>
              <div className="grid grid-cols-2 gap-3">
                {differentials.map((diff, idx) => {
                  const Icon = diff.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-2 p-2"
                    >
                      <Icon size={18} className={diff.color} />
                      <span className="text-xs font-semibold text-gray-700">{diff.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => onNavigate('services')}
              rightIcon={<ArrowRight size={18} />}
              className="shadow-lg shadow-primary-600/20 w-full sm:w-auto"
            >
              Ver Soluções e Pacotes
            </Button>
          </motion.div>
        </div>

        {/* Tech Stack Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 pt-16 border-t border-gray-200"
        >
          <h3 className="font-display font-bold text-3xl mb-12 text-center">Tecnologias que Uso</h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.15)" }}
                className="group p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md border border-gray-100 hover:border-primary-300 flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-default"
              >
                <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <skill.icon size={32} className={skill.color} strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-gray-700 text-sm text-center leading-tight group-hover:text-primary-600 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
