import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, BookOpen, ArrowRight, Disc, Coffee, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] font-sans selection:bg-rose-900 selection:text-white relative overflow-hidden cursor-none">

      {/* Custom Cursor (The "Observer") */}
      <div
        className="fixed w-4 h-4 bg-rose-600 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{ left: cursorPos.x, top: cursorPos.y, transform: 'translate(-50%, -50%)' }}
      />
      <div
        className="fixed w-12 h-12 border border-rose-600 rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out opacity-30"
        style={{ left: cursorPos.x, top: cursorPos.y, transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.001})` }}
      />

      {/* Grain & Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">

        {/* HEADER: Floating & Minimal */}
        <header className="mb-32 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/10 pb-8">
          <div>
            <h1 className="font-serif text-6xl md:text-8xl tracking-tighter mb-4 mix-blend-darken">
              Tanveer<br />Singh
            </h1>
            <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-rose-900/60 mt-2">
              The interface between<br />Logic & The Unconscious
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-6">
            <SocialLink href="#" label="Git" />
            <SocialLink href="#" label="Lnkd" />
            <SocialLink href="#" label="Mail" />
          </div>
        </header>

        {/* PROJECTS: The "Broken Grid" Mosaic */}
        <section className="mb-40">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500">(01) Artifacts</h2>
            <span className="font-serif italic text-gray-400">Hover to reveal structure</span>
          </div>

          {/* THE MOSAIC GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">

            {/* Project 1: Large Feature */}
            <div className="lg:col-span-2 row-span-1">
              <ProjectCard
                title="AI Confidence Scorer"
                tech="Python / PyTorch"
                concept="Quantifying the 'doubt' of a machine."
                pattern="radial-gradient(circle at 30% 20%, #e1e1e1 0%, transparent 50%), repeating-linear-gradient(45deg, #f0f0f0 0px, #f0f0f0 2px, transparent 2px, transparent 10px)"
                color="bg-[#2a2a2a]"
                textColor="text-white"
              />
            </div>

            {/* Project 2: Tall Vertical */}
            <div className="lg:col-span-1 lg:row-span-2">
              <ProjectCard
                title="Dream Logic Engine"
                tech="React / D3.js"
                concept="Mapping subconscious narratives to visual archetypes."
                pattern="conic-gradient(from 0deg at 50% 50%, #f4f1ea 0deg, #e0dcd3 180deg, #f4f1ea 360deg)"
                color="bg-rose-900"
                textColor="text-rose-50"
                vertical={true}
              />
            </div>

            {/* Project 3: Standard Box */}
            <div className="lg:col-span-1 row-span-1">
              <ProjectCard
                title="BlueNote SQL"
                tech="PostgreSQL / Node"
                concept="Preserving analog history in digital stasis."
                pattern="repeating-radial-gradient(circle at 0 0, transparent 0, #f4f1ea 10px), repeating-linear-gradient(#dcdcdc55, #dcdcdc55)"
                color="bg-blue-900"
                textColor="text-blue-50"
              />
            </div>

            {/* Project 4: Standard Box */}
            <div className="lg:col-span-1 row-span-1">
              <ProjectCard
                title="Entropy Visualizer"
                tech="WebGL / Three.js"
                concept="Visualizing chaos within sorted arrays."
                pattern="linear-gradient(135deg, #e0e0e0 25%, transparent 25%), linear-gradient(225deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(315deg, #e0e0e0 25%, transparent 25%)"
                color="bg-stone-800"
                textColor="text-stone-50"
              />
            </div>

          </div>
        </section>

        {/* ABOUT / INPUTS: Minimal Text Block */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 border-t border-black/10 pt-16">
          <div className="md:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6">(02) The Mind</h2>
            <div className="bg-white p-6 shadow-sm border border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-500">
              <p className="font-serif italic text-xl mb-4">"Currently Digesting"</p>
              <ul className="space-y-4 font-mono text-xs">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Book</span>
                  <span className="text-rose-900">Siddhartha (Hesse)</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Theory</span>
                  <span className="text-rose-900">Jungian Shadow</span>
                </li>
                <li className="flex justify-between">
                  <span>Audio</span>
                  <span className="text-rose-900">Modal Jazz 1959</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-between">
            <p className="font-serif text-2xl md:text-4xl leading-tight text-[#1a1a1a]">
              I am a Computer Science student seeking the hidden connections between <span className="underline decoration-1 underline-offset-4 decoration-rose-400">algorithmic efficiency</span> and <span className="underline decoration-1 underline-offset-4 decoration-blue-400">human psychology</span>.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <a href="#" className="font-mono text-xs uppercase border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors">Read Essays</a>
              <a href="#" className="font-mono text-xs uppercase border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors">Resume</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex justify-between items-end text-[10px] font-mono uppercase tracking-widest opacity-40">
          <span>(C) 2025</span>
          <div className="flex flex-col text-right">
            <span>Toronto, CA</span>
            <span>Status: Learning</span>
          </div>
        </footer>

      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        .font-sans { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        
        body { cursor: none; }
        a { cursor: none; }
      `}</style>
    </div>
  );
}

function ProjectCard({ title, tech, concept, pattern, color, textColor, vertical }) {
  return (
    <div className={`relative h-full w-full group overflow-hidden border border-black/5 transition-all duration-700 ease-out hover:shadow-2xl`}>

      {/* 1. The "Abstract" Background (Visible initially) */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110 opacity-60"
        style={{ background: pattern, backgroundSize: '40px 40px' }}
      ></div>

      {/* 2. The "Chaos" Element (Abstract Shapes overlay) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-900/5 rounded-full blur-xl group-hover:bg-rose-500/20 transition-colors duration-500"></div>

      {/* 3. The Content (Slides up on hover) */}
      <div className={`absolute inset-0 z-10 flex flex-col justify-between p-8 transition-colors duration-500 ${color} ${textColor} opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0`}>

        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full">
            {tech}
          </span>
          <ArrowUpRight size={20} />
        </div>

        <div>
          <h3 className={`font-serif ${vertical ? 'text-4xl' : 'text-3xl'} mb-2`}>{title}</h3>
          <div className="h-px w-12 bg-white/30 my-4"></div>
          <p className="font-mono text-xs opacity-80 leading-relaxed">
            {concept}
          </p>
        </div>
      </div>

      {/* 4. The "Rest State" Label (Visible when NOT hovering) */}
      <div className="absolute bottom-6 left-6 z-10 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-serif text-2xl text-black/80 mix-blend-multiply">{title}</h3>
      </div>
    </div>
  );
}

function SocialLink({ href, label }) {
  return (
    <a href={href} className="font-mono text-xs font-bold uppercase tracking-widest border-b border-transparent hover:border-rose-600 hover:text-rose-600 transition-all">
      {label}
    </a>
  );
}