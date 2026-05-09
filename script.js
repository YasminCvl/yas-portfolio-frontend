import React, { useState } from 'react';
import { Terminal, Palette, Code, ExternalLink, Cpu } from 'lucide-react';

const PortfolioToolbox = () => {
  const [baseColor, setBaseColor] = useState('#6D28D9'); // Roxo principal

  // Função simples para "gerar" tons (Lógica de ADS aparecendo)
  const shades = [
    { name: 'Light', hex: '#A78BFA' },
    { name: 'Main', hex: '#7C3AED' },
    { name: 'Dark', hex: '#4C1D95' },
    { name: 'Deep', hex: '#2E1065' },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-purple-500">
      
      {/* Header Magnético */}
      <header className="p-6 border-b border-purple-900/50 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="font-bold text-white">Y</span>
          </div>
          <h1 className="text-xl font-bold tracking-tighter">YAS<span className="text-purple-500">.DEV</span></h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-widest text-gray-400">
          <a href="#tools" className="hover:text-purple-400 transition">Tools</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Terminal</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <section className="mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Design que brilha, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
              Código que escala.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Graduada em ADS, especialista em transformar identidades visuais em interfaces de alta performance.
          </p>
        </section>

        {/* TOOL 1: O Gerador de Paleta (A parte funcional) */}
        <section id="tools" className="mb-20 bg-zinc-900/50 p-8 rounded-3xl border border-purple-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-purple-500" />
            <h3 className="text-2xl font-bold">Purple Palette Lab</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shades.map((shade) => (
              <div key={shade.name} className="group cursor-pointer">
                <div 
                  className="h-24 rounded-2xl mb-2 transition-transform group-hover:scale-105" 
                  style={{ backgroundColor: shade.hex }}
                ></div>
                <p className="text-sm font-mono text-center">{shade.hex}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500 italic font-mono">// logic: primary_color.map(shades => render_ui)</p>
        </section>

        {/* Projetos Destaque */}
        <section id="projects">
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-purple-500" />
            <h3 className="text-2xl font-bold">Featured Work</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Exemplo: Divino Grão */}
            <div className="group bg-zinc-900 p-1 rounded-3xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition">
              <div className="aspect-video bg-purple-900/20 rounded-2xl flex items-center justify-center">
                 <span className="text-purple-400 font-bold text-2xl">Divino Grão</span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">Branding & Landing Page</h4>
                <p className="text-gray-400 text-sm mb-4">Identidade visual completa e front-end responsivo para marca de café.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer / Terminal Style */}
      <footer id="contact" className="bg-zinc-950 p-10 border-t border-purple-900/30">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-sm text-purple-500">
            <span className="text-green-500">➜</span> yasmin-cvl ~ <span className="text-gray-500">contact.init()</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-500 transition">GitHub</a>
            <a href="#" className="hover:text-purple-500 transition">LinkedIn</a>
            <a href="#" className="hover:text-purple-500 transition font-bold underline">Hire Me</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioToolbox;