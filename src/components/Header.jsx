import React from 'react';
import { CONTENT } from '../constants/content';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="text-2xl font-bold text-mut-green">
                            {CONTENT.header.logoText}
                        </a>
                    </div>

                    {/* WhatsApp Button */}
                    <div className="flex items-center">
                        <a
                            href={CONTENT.header.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-mut-green hover:bg-leaf-green transition-colors duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.84 6.364L.2 24l5.807-1.52A11.94 11.94 0 0 0 11.944 24a12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm0 22.05a9.95 9.95 0 0 1-5.071-1.385l-.364-.216-3.765.987.994-3.666-.237-.377A9.919 9.919 0 0 1 2.05 12a9.95 9.95 0 0 1 9.894-9.95A9.95 9.95 0 0 1 21.894 12a9.95 9.95 0 0 1-9.95 10.05zm5.45-7.44c-.298-.15-1.768-.873-2.041-.973-.272-.102-.472-.15-.67.15-.199.3-.771.973-.946 1.173-.173.2-.347.225-.645.075-.298-.15-1.261-.465-2.404-1.485-.89-.794-1.492-1.775-1.666-2.075-.173-.3-.018-.462.13-.61.134-.135.298-.346.447-.521.15-.173.199-.298.298-.497.102-.2.05-.373-.025-.521-.075-.15-.67-1.619-.918-2.215-.241-.58-.485-.5-.67-.51-.173-.008-.372-.008-.571-.008-.199 0-.521.075-.794.373-.273.3-1.042 1.018-1.042 2.482s1.066 2.872 1.215 3.071c.15.2 2.095 3.195 5.073 4.479 2.536 1.093 3.42 1.037 4.02.873.69-.191 2.152-.88 2.45-1.733.298-.853.298-1.583.208-1.733-.09-.15-.347-.24-.645-.39z" />
                            </svg>
                            {CONTENT.header.whatsappButton}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
