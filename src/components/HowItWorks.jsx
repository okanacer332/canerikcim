import React from 'react';
import { CONTENT } from '../constants/content';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-green-50/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 text-green-800 text-sm font-bold tracking-wide mb-4">
                        {CONTENT.howItWorks.sectionBadge}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        {CONTENT.howItWorks.sectionTitle}
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {CONTENT.howItWorks.steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center">
                                {/* Number Badge */}
                                <div className="w-24 h-24 rounded-full bg-white shadow-xl shadow-green-100/50 border-4 border-green-50 flex items-center justify-center mb-8 relative z-10">
                                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-green-400">
                                        {step.stepNum}
                                    </span>
                                    {/* Ornamental ring */}
                                    <div className="absolute inset-0 rounded-full border border-green-200 scale-110 opacity-50"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 max-w-sm leading-relaxed text-lg">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
