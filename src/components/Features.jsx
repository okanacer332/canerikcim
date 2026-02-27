import React from 'react';
import { CONTENT } from '../constants/content';
import { LeafIcon, TruckIcon, ShieldIcon } from './Icons';

const iconMap = {
    leaf: <LeafIcon className="w-8 h-8 text-green-600" />,
    truck: <TruckIcon className="w-8 h-8 text-green-600" />,
    shield: <ShieldIcon className="w-8 h-8 text-green-600" />
};

const Features = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[500px] h-[500px] text-green-100">
                    <path fill="currentColor" d="M47.7,-76.4C63.8,-69.2,79.8,-59.1,88.7,-46.2C97.6,-33.3,99.3,-17.6,96.6,-2.4C93.9,12.8,86.8,27.5,76.1,40.1C65.4,52.7,51.1,63.1,37.3,71.5C23.5,79.9,10.2,86.2,-4.3,91.4C-18.8,96.6,-34.6,98.7,-47.6,90.4C-60.6,82.1,-70.7,63.4,-78.4,47.9C-86.1,32.4,-91.4,20.2,-90,-5C-88.5,-30.3,-80.3,-44.5,-69.4,-54.4C-58.5,-64.3,-44.8,-69.9,-30.3,-74.2C-15.8,-78.5,-0.5,-81.5,14.5,-85.1C29.5,-88.7,46.6,-83.6,47.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">
                        {CONTENT.features.sectionBadge}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                        {CONTENT.features.sectionTitle}
                    </h3>
                    <p className="text-lg text-gray-600">
                        {CONTENT.features.sectionDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {CONTENT.features.items.map((feature, idx) => (
                        <div
                            key={feature.id}
                            className="bg-white rounded-3xl p-8 border border-green-50 shadow-lg shadow-green-100/50 hover:shadow-green-200/50 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform translate-x-4 -translate-y-4">
                                {iconMap[feature.icon]}
                            </div>
                            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 border border-green-100 group-hover:bg-green-600 group-hover:border-green-600 transition-colors duration-300">
                                {React.cloneElement(iconMap[feature.icon], {
                                    className: "w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300"
                                })}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
