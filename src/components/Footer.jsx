import React from 'react';
import { CONTENT } from '../constants/content';
import { LogoSvg, InstagramIcon, WhatsAppIcon } from './Icons';

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 pt-32 pb-12 overflow-hidden">
            {/* Top SVG Graphic for fluid transition */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg className="block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <LogoSvg className="w-10 h-10 grayscale brightness-200" />
                            <span className="text-3xl font-black text-white tracking-tighter">
                                {CONTENT.footer.brandName}
                            </span>
                        </div>
                        <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-sm mb-8">
                            {CONTENT.footer.description}
                        </p>
                        <div className="flex space-x-4">
                            {CONTENT.footer.socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all duration-300"
                                >
                                    {link.id === 'instagram' ? <InstagramIcon className="w-5 h-5" /> : <WhatsAppIcon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">İletişim</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {CONTENT.footer.city}
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href={`mailto:${CONTENT.footer.contactEmail}`} className="hover:text-green-400 transition-colors">
                                    {CONTENT.footer.contactEmail}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 font-medium text-sm">
                        {CONTENT.footer.copyright}
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6 text-sm font-medium text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Mesafeli Satış Sözleşmesi</a>
                        <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
