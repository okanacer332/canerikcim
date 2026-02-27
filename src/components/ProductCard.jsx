import React from 'react';
import { CONTENT } from '../constants/content';

const ProductCard = ({ product }) => {
    return (
        <div className={`relative bg-white rounded-[2.5rem] p-8 border ${product.popular ? 'border-green-400 shadow-2xl shadow-green-200/50' : 'border-gray-100 shadow-xl shadow-gray-100'} transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden group`}>

            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${product.popular ? 'from-green-100 to-green-50' : 'from-gray-50 to-white'} rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform duration-500`}></div>

            {/* Popular Badge */}
            {product.popular && (
                <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500 text-white text-xs font-bold tracking-wide shadow-lg shadow-green-500/30">
                        {product.badgeText}
                    </span>
                </div>
            )}

            <div className="mb-8">
                {/* Visual Representation of Box Size */}
                <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center ${product.popular ? 'bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/30' : 'bg-gray-50 border border-gray-100'}`}>
                    <svg viewBox="0 0 24 24" fill="none" className={`w-10 h-10 ${product.popular ? 'text-white' : 'text-green-600'}`}>
                        {product.iconType === 'largeBox' ? (
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        ) : (
                            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z M3.3 7l8.7 5l8.7-5 M12 22V12" />
                        )}
                    </svg>
                </div>

                <div className="flex items-baseline mb-2">
                    <h3 className="text-3xl font-black text-gray-900">{product.name}</h3>
                    <span className="ml-3 text-lg font-bold text-gray-400">{product.weight}</span>
                </div>
                <p className="text-gray-500 leading-relaxed font-medium h-12">
                    {product.description}
                </p>
            </div>

            <div className="flex-1">
                <ul className="mb-8 space-y-4">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center border border-green-100 mt-0.5">
                                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="ml-3 text-gray-600 font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                <div>
                    <span className="text-sm font-semibold text-gray-400 block mb-1">Paket Fiyatı</span>
                    <span className="text-4xl font-black text-gray-900 tracking-tight">{product.price}</span>
                </div>
                <a
                    href={CONTENT.header.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-6 py-4 rounded-2xl font-bold transition-all duration-300 ${product.popular
                            ? 'bg-green-600 text-white hover:bg-green-700 shadow-xl shadow-green-500/30 hover:-translate-y-1'
                            : 'bg-gray-50 text-green-700 hover:bg-green-100 border border-green-100'
                        }`}
                >
                    Hemen Al
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
