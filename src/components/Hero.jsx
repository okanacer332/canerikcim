import React from 'react';
import { CONTENT } from '../constants/content';

const Hero = () => {
    return (
        <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Blob Elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[800px] h-[800px] text-green-300">
                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,80.7,-46.2C89.6,-33.3,94.3,-17.6,92.6,-2.4C90.9,12.8,82.8,27.5,73.1,40.1C63.4,52.7,52.1,63.1,39.3,71.5C26.5,79.9,13.2,86.2,-1.3,88.4C-15.8,90.6,-31.6,88.7,-44.6,80.4C-57.6,72.1,-67.7,57.4,-75.4,41.9C-83.1,26.4,-88.4,10.2,-87,-5C-85.5,-20.3,-77.3,-34.5,-66.4,-44.4C-55.5,-54.3,-41.8,-59.9,-29.3,-68.2C-16.8,-76.5,-5.5,-87.5,6.5,-91.1C18.5,-94.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[600px] h-[600px] text-green-200">
                    <path fill="currentColor" d="M39.9,-65.4C51.6,-57.6,60.9,-45.3,69.5,-31.6C78.1,-17.9,86,-2.8,83.1,10.8C80.2,24.4,66.6,36.5,53.4,46.1C40.2,55.7,27.4,62.8,13.8,66.9C0.2,71,-14.2,72.1,-27.6,68.1C-41,64.1,-53.4,55,-64.1,43C-74.8,31,-83.8,16.1,-84.3,-0.3C-84.8,-16.7,-76.8,-30.6,-66,-42.6C-55.2,-54.6,-41.6,-64.7,-28.4,-70.7C-15.2,-76.7,-2.4,-78.6,10.4,-79.1C23.2,-79.6,36,-78.7,39.9,-65.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold tracking-wide mb-6">
                            <span className="flex h-2 w-2 relative mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {CONTENT.hero.badge}
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
                            <span className="block">{CONTENT.hero.titlePrefix}</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                                {CONTENT.hero.titleHighlight}
                            </span>
                            <span className="block">{CONTENT.hero.titleSuffix}</span>
                        </h1>

                        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                            {CONTENT.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href={CONTENT.hero.primaryButtonLink}
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-green-600 hover:bg-green-700 shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300"
                            >
                                {CONTENT.hero.primaryButton}
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a
                                href={CONTENT.hero.secondaryButtonLink}
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-100 text-base font-bold rounded-2xl text-green-700 bg-white hover:bg-green-50 hover:border-green-200 transition-all duration-300"
                            >
                                {CONTENT.hero.secondaryButton}
                            </a>
                        </div>
                    </div>

                    {/* Hero Image / Illustration */}
                    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="relative aspect-square w-full">
                            {/* Glass background container */}
                            <div className="absolute inset-4 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 shadow-2xl overflow-visible flex items-center justify-center">

                                {/* Inner Floating Labels */}
                                {CONTENT.hero.floatingNotes.map((note, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute animate-bounce bg-white/90 backdrop-blur-sm shadow-xl px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 border border-green-50 z-20 ${idx === 0 ? 'top-10 -left-6 lg:-left-12 [animation-delay:0ms]' :
                                                idx === 1 ? 'top-1/2 -right-4 lg:-right-10 [animation-delay:400ms]' :
                                                    '-bottom-6 left-1/4 [animation-delay:800ms]'
                                            }`}
                                    >
                                        {note}
                                    </div>
                                ))}

                                {/* The Central SVG Illustration */}
                                <svg viewBox="0 0 400 400" className="w-[120%] h-[120%] drop-shadow-2xl relative z-10 -mt-10 lg:-translate-x-4">
                                    <defs>
                                        <radialGradient id="plumMain" cx="35%" cy="30%" r="65%">
                                            <stop offset="0%" stopColor="#d9f99d" />
                                            <stop offset="40%" stopColor="#86efac" />
                                            <stop offset="85%" stopColor="#22c55e" />
                                            <stop offset="100%" stopColor="#15803d" />
                                        </radialGradient>
                                        <radialGradient id="plumSecondary" cx="40%" cy="30%" r="60%">
                                            <stop offset="0%" stopColor="#bef264" />
                                            <stop offset="60%" stopColor="#4ade80" />
                                            <stop offset="100%" stopColor="#16a34a" />
                                        </radialGradient>
                                        <filter id="shadow">
                                            <feDropShadow dx="-5" dy="25" stdDeviation="15" floodColor="#064e3b" floodOpacity="0.4" />
                                        </filter>
                                    </defs>

                                    {/* Main Branch */}
                                    <path d="M100 250 C 150 200, 250 180, 350 150" fill="none" stroke="#78350f" strokeWidth="12" strokeLinecap="round" />
                                    <path d="M150 220 C 180 150, 200 120, 220 100" fill="none" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />

                                    {/* Leaves Collection */}
                                    <g filter="url(#shadow)">
                                        <path d="M220 100 C 260 60, 320 60, 300 100 C 280 140, 220 100, 220 100" fill="#15803d" />
                                        <path d="M220 100 C 180 60, 140 80, 160 120 C 180 160, 220 100, 220 100" fill="#16a34a" />
                                        <path d="M300 165 C 350 140, 380 180, 340 220 C 300 260, 300 165, 300 165" fill="#22c55e" />
                                    </g>

                                    {/* Plums Collection */}
                                    <g filter="url(#shadow)">
                                        {/* Back Right Plum */}
                                        <circle cx="280" cy="230" r="55" fill="url(#plumSecondary)" />
                                        <path d="M280 175 Q 275 200 280 285" fill="none" stroke="#14532d" strokeWidth="2" opacity="0.3" />
                                        <ellipse cx="260" cy="200" rx="15" ry="25" fill="#ffffff" opacity="0.3" transform="rotate(-40 260 200)" />
                                        <path d="M280 175 Q 310 160 320 155" fill="none" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />

                                        {/* Main Huge Front Plum */}
                                        <circle cx="180" cy="250" r="80" fill="url(#plumMain)" />
                                        <path d="M180 170 Q 170 210 180 330" fill="none" stroke="#14532d" strokeWidth="3" opacity="0.4" />
                                        {/* Deep shadow on main plum inner cleft */}
                                        <path d="M175 170 Q 185 220 180 330 Q 165 250 175 170" fill="#064e3b" opacity="0.15" />

                                        {/* Highlight on main plum */}
                                        <ellipse cx="140" cy="200" rx="20" ry="40" fill="#ffffff" opacity="0.5" transform="rotate(-30 140 200)" />
                                        <circle cx="160" cy="180" r="8" fill="#ffffff" opacity="0.7" />

                                        {/* Stem for main plum */}
                                        <path d="M180 170 Q 200 160 210 150" fill="none" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
