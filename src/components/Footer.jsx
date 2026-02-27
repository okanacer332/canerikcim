import React from 'react';
import { CONTENT } from '../constants/content';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                <p className="text-gray-500 font-medium mb-2">
                    {CONTENT.footer.address}
                </p>
                <p className="text-gray-400 text-sm">
                    {CONTENT.footer.copyright}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
