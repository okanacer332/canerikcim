import React from 'react';
import { CONTENT } from '../constants/content';

const Hero = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 sm:pt-16 lg:pt-20">
                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline text-mut-green">Taptaze</span>{' '}
                                <span className="block text-gray-900">{CONTENT.hero.title}</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                {CONTENT.hero.subtitle}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href="#products"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-mut-green hover:bg-leaf-green md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                                    >
                                        Ürünleri İncele
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-8 lg:mt-0 px-4 sm:px-6 lg:px-0">
                {/* Placeholder for Image */}
                <div className="h-56 w-full bg-green-50 sm:h-72 md:h-96 lg:w-full lg:h-full rounded-2xl lg:rounded-none lg:rounded-l-3xl overflow-hidden relative flex items-center justify-center border-4 border-white shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-green-50 opacity-80"></div>
                    <svg className="h-24 w-24 text-green-300 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="absolute bottom-4 text-green-600 font-medium text-sm">Görsel Alanı</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
