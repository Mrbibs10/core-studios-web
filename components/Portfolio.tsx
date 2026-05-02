import React from 'react';
import { ViewState, ServiceCategory } from '../types';
import { ChevronRight, Thermometer, Lightbulb, Wind, MapPin, Calendar } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (view: ViewState, service?: ServiceCategory) => void;
}

const URBAN_JUNGLE_IMAGES = [
  '/images/portfolio/uj-01.jpg',
  '/images/portfolio/uj-02.jpg',
  '/images/portfolio/z50.jpg',
];

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const stats = [
    { value: '5', label: 'Viviendas' },
    { value: '25', label: 'Actuadores' },
    { value: '3', label: 'Sistemas' },
  ];

  const systems = [
    { icon: Thermometer, label: 'Climatización' },
    { icon: Lightbulb, label: 'Iluminación' },
    { icon: Wind, label: 'Persianas' },
  ];

  const techStack = ['KNX', 'Zennio', 'ETS6'];

  return (
    <section
      id="proyectos"
      aria-label="Proyectos realizados de domótica en Mallorca"
      className="py-32 px-6 bg-[#1d1d1f] overflow-x-hidden"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase border border-white/10">
              Caso Real · Mallorca
            </span>
            <h2 className="text-4xl font-semibold text-white mb-4 tracking-tight">
              Proyectos Destacados.
            </h2>
            <p className="text-xl text-white/50 font-light max-w-md">
              Instalaciones reales. Resultados verificables.
            </p>
          </div>
        </div>

        {/* Project card */}
        <div className="rounded-[40px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">

          {/* Image grid */}
          <div className="grid grid-cols-3 h-64 md:h-96 overflow-hidden">
            {URBAN_JUNGLE_IMAGES.map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <img
                  src={src}
                  alt={i === 2 ? 'Panel Zennio Z50 — control de clima, luces y persianas' : `Urban Jungle vivienda ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.style.background = 'linear-gradient(135deg, #1a3a5c 0%, #0d1f33 100%)';
                    }
                  }}
                />
                {i === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold tracking-wider uppercase border border-emerald-500/20">
                Domótica
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[11px] font-bold tracking-wider uppercase border border-white/10">
                KNX
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
              Urban Jungle — 5 Viviendas Unifamiliares
            </h3>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/40 text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                Mallorca, Illes Balears
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                2024
              </span>
            </div>

            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl text-base md:text-lg font-light">
              Automatización completa de 5 residencias de lujo: climatización inteligente, iluminación programable y persianas motorizadas bajo un único sistema KNX. Programación y puesta en marcha con ETS6 y hardware Zennio.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Systems + Tech */}
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">

              {/* Systems */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-3">Sistemas integrados</p>
                <div className="flex gap-4">
                  {systems.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-white/60 text-sm">
                      <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                        <Icon size={15} strokeWidth={1.5} className="text-white/70" />
                      </div>
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-3">Stack tecnológico</p>
                <div className="flex gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-semibold border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <button
                onClick={() => onNavigate(ViewState.SERVICES, 'DOMOTICA')}
                className="group inline-flex items-center gap-2 bg-white text-[#1d1d1f] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Ver servicio de Domótica
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
