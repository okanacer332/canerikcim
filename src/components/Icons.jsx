import React from 'react';

// Leaf icon for the hero and features
export const LeafIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
);

// Box icon for products
export const BoxIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
    </svg>
);

// Delivery truck icon
export const TruckIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="15" height="13" x="1" y="3" rx="2" />
        <path d="M16 8h2.5a2.5 2.5 0 0 1 2.5 2.5v4.5" />
        <path d="m16 11 5-2" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
);

// Shield check icon
export const ShieldIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

// WhatsApp Icon
export const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.84 6.364L.2 24l5.807-1.52A11.94 11.94 0 0 0 11.944 24a12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm0 22.05a9.95 9.95 0 0 1-5.071-1.385l-.364-.216-3.765.987.994-3.666-.237-.377A9.919 9.919 0 0 1 2.05 12a9.95 9.95 0 0 1 9.894-9.95A9.95 9.95 0 0 1 21.894 12a9.95 9.95 0 0 1-9.95 10.05zm5.45-7.44c-.298-.15-1.768-.873-2.041-.973-.272-.102-.472-.15-.67.15-.199.3-.771.973-.946 1.173-.173.2-.347.225-.645.075-.298-.15-1.261-.465-2.404-1.485-.89-.794-1.492-1.775-1.666-2.075-.173-.3-.018-.462.13-.61.134-.135.298-.346.447-.521.15-.173.199-.298.298-.497.102-.2.05-.373-.025-.521-.075-.15-.67-1.619-.918-2.215-.241-.58-.485-.5-.67-.51-.173-.008-.372-.008-.571-.008-.199 0-.521.075-.794.373-.273.3-1.042 1.018-1.042 2.482s1.066 2.872 1.215 3.071c.15.2 2.095 3.195 5.073 4.479 2.536 1.093 3.42 1.037 4.02.873.69-.191 2.152-.88 2.45-1.733.298-.853.298-1.583.208-1.733-.09-.15-.347-.24-.645-.39z" />
    </svg>
);

// Instagram Icon
export const InstagramIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

export const LogoSvg = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="55" r="35" fill="url(#logoGrad)" />
        <path d="M50 20 Q 55 5 65 5" fill="none" stroke="#166534" strokeWidth="6" strokeLinecap="round" />
        <path d="M60 10 C 75 -5, 95 15, 80 30 C 70 40, 50 20, 60 10 Z" fill="#4ade80" />
        <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#86efac" />
                <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
        </defs>
    </svg>
);
