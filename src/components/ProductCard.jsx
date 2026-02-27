import React from 'react';
import { CONTENT } from '../constants/content';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className="h-48 bg-green-50 relative flex items-center justify-center">
                {/* Product Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-80"></div>
                <svg className="h-16 w-16 text-green-200 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-500 mb-4 flex-1">{product.description}</p>

                <ul className="mb-6 space-y-2">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-mut-green" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <a
                        href={CONTENT.header.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-mut-green hover:bg-leaf-green transition-colors duration-200"
                    >
                        Sipariş Ver
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
