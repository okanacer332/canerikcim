import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { CONTENT } from './constants/content';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-green-200 selection:text-green-900">
      <Header />

      <main className="flex-grow">
        <Hero />

        <Features />

        <HowItWorks />

        {/* Products Section */}
        <section id="products" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-bold tracking-wide mb-4 border border-green-100">
                {CONTENT.products.sectionBadge}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                {CONTENT.products.sectionTitle}
              </h2>
              <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                {CONTENT.products.sectionDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {CONTENT.products.items.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
