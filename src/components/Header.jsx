import React, { useState, useEffect } from 'react';
import { CONTENT } from '../constants/content';
import { LogoSvg, WhatsAppIcon } from './Icons';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Area */}
                    <div className="flex items-center space-x-2">
                        <LogoSvg className="w-8 h-8 md:w-10 md:h-10 drop-shadow-sm" />
                        <a href="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                            {CONTENT.header.logoText}
                        </a>
                    </div>

                    {/* CTA Area */}
                    <div className="flex items-center">
                        <a
                            href={CONTENT.header.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden rounded-full font-medium tracking-tighter text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                            <WhatsAppIcon className="w-5 h-5 mr-2" />
                            <span className="relative">{CONTENT.header.whatsappButton}</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
