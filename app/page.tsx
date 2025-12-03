'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Leaf, Package, Droplets, Menu, X } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const slides = [
    {
      title: "Kendi Bahçemizden Organik Erik",
      subtitle: "Kimyasal gübre ve ilaç kullanmadan, mevsiminde toplanan taze erikler.",
      gradient: "from-purple-200 via-green-100 to-purple-100"
    },
    {
      title: "Doğal Tat, Gerçek Aroma",
      subtitle: "Sadece dalından sofranıza. Katkısız, koruyucusuz, güvenilir.",
      gradient: "from-green-100 via-purple-50 to-green-200"
    },
    {
      title: "250 g ve 500 g Paket Seçenekleri",
      subtitle: "İhtiyacınıza göre paket seçin, kapınıza gelsin.",
      gradient: "from-purple-100 via-green-50 to-purple-200"
    }
  ];

  const faqs = [
    {
      question: "Erikleriniz gerçekten organik mi?",
      answer: "Resmi organik sertifikamız şu anda yok; ancak bahçemizde kimyasal gübre ve zirai ilaç kullanmıyoruz. Doğal yöntemlerle üretim yapıyoruz."
    },
    {
      question: "Hangi şehirlere gönderim yapıyorsunuz?",
      answer: "Şu anda Türkiye içinde kargo ile gönderim yapıyoruz. Siparişiniz sonrasında adresinize göre kargo süresini ayrıca bildiriyoruz."
    },
    {
      question: "Kargoda bozulma olursa ne yapıyorsunuz?",
      answer: "Ürün size ulaştığında bir sorun varsa, aynı gün içinde bizimle iletişime geçebilirsiniz. Fotoğraf ile birlikte durumu ilettiğinizde çözüm üretmeye çalışıyoruz."
    },
    {
      question: "Minimum sipariş miktarı var mı?",
      answer: "Minimum 2 paket (250 g veya 500 g) sipariş alıyoruz. Hasat dönemine göre bu miktar değişebilir."
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-plum-light font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 text-plum-primary">
              <Leaf className="w-6 h-6" />
              <span className="font-bold">Bahçeden Organik Erik</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('urunler')} className="text-gray-700 hover:text-plum-primary transition-colors">
                Ürünler
              </button>
              <button onClick={() => scrollToSection('uretim')} className="text-gray-700 hover:text-plum-primary transition-colors">
                Nasıl Üretiyoruz?
              </button>
              <button onClick={() => scrollToSection('hakkimizda')} className="text-gray-700 hover:text-plum-primary transition-colors">
                Hakkımızda
              </button>
              <button onClick={() => scrollToSection('sss')} className="text-gray-700 hover:text-plum-primary transition-colors">
                Sık Sorulanlar
              </button>
              <button
                onClick={() => scrollToSection('siparis')}
                className="px-5 py-2 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg bg-plum-primary"
              >
                Sipariş Ver
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-plum-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('urunler')} className="block w-full text-left py-2 text-gray-700">
                Ürünler
              </button>
              <button onClick={() => scrollToSection('uretim')} className="block w-full text-left py-2 text-gray-700">
                Nasıl Üretiyoruz?
              </button>
              <button onClick={() => scrollToSection('hakkimizda')} className="block w-full text-left py-2 text-gray-700">
                Hakkımızda
              </button>
              <button onClick={() => scrollToSection('sss')} className="block w-full text-left py-2 text-gray-700">
                Sık Sorulanlar
              </button>
              <button
                onClick={() => scrollToSection('siparis')}
                className="block w-full text-left py-2 px-4 rounded-full text-white bg-plum-primary"
              >
                Sipariş Ver
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full text-sm bg-plum-green text-plum-primary">
                %100 Doğal • Kendi Bahçemizden
              </div>
              
              <h1 className="font-bold text-plum-dark text-[2.5rem] leading-[1.2]">
                Organik eriklerimizi özenle topluyor, sofranıza taze taze ulaştırıyoruz.
              </h1>
              
              <p className="text-gray-600 text-[1.1rem] leading-[1.7]">
                Hiçbir kimyasal gübre, ilaç veya koruyucu kullanmıyoruz. Sınırlı sayıda hasat ettiğimiz erikleri, hijyenik koşullarda 250 g ve 500 g&apos;lık paketlere koyup doğrudan size gönderiyoruz.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('siparis')}
                  className="px-8 py-3 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg bg-plum-primary"
                >
                  Hemen Sipariş Ver
                </button>
                <button
                  onClick={() => scrollToSection('uretim')}
                  className="px-8 py-3 rounded-full border-2 transition-all hover:scale-105 border-plum-primary text-plum-primary"
                >
                  Üretim Sürecimizi Gör
                </button>
              </div>
            </div>

            {/* Right: Slider */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-br ${slide.gradient}`}
                    style={{ opacity: currentSlide === index ? 1 : 0 }}
                  >
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                      <h2 className="mb-4 text-[1.8rem] text-plum-primary font-bold">
                        {slide.title}
                      </h2>
                      <p className="text-gray-700 max-w-md text-[1.1rem]">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all hover:scale-110 text-plum-primary"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all hover:scale-110 text-plum-primary"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className="h-2 rounded-full transition-all"
                      style={{
                        backgroundColor: currentSlide === index ? '#6b256f' : '#ffffff',
                        width: currentSlide === index ? '24px' : '8px'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="urunler" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4 text-[2.5rem] text-plum-dark">
              Ürünlerimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-[1.1rem]">
              Taze, doğal ve mevsiminde eriklerimizi iki farklı paket seçeneğiyle sunuyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 250g Package */}
            <div className="rounded-2xl p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl bg-plum-light">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-plum-green">
                <Package className="w-8 h-8 text-plum-primary" />
              </div>
              
              <h3 className="font-bold mb-3 text-[1.8rem] text-plum-dark">
                250 g Paket
              </h3>
              
              <p className="text-gray-600 mb-6">
                Tek kişilik tüketim veya denemek isteyenler için ideal.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 bg-[#8dbf6a]"></span>
                  <span className="text-gray-700">Günlük hasat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 bg-[#8dbf6a]"></span>
                  <span className="text-gray-700">Sızdırmaz, gıda uyumlu ambalaj</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 bg-[#8dbf6a]"></span>
                  <span className="text-gray-700">Buzdolabında 3–4 gün taze kalır</span>
                </li>
              </ul>

              <div className="mb-6 p-4 rounded-lg bg-plum-green">
                <p className="text-sm text-gray-600">Fiyat için iletişime geçin</p>
              </div>

              <button
                onClick={() => scrollToSection('siparis')}
                className="w-full py-3 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg bg-plum-primary"
              >
                Sipariş Et
              </button>
            </div>

            {/* 500g Package */}
            <div className="rounded-2xl p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl bg-plum-light">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-plum-green">
                <Package className="w-8 h-8 text-plum-primary" />
              </div>
              
              <h3 className="font-bold mb-3 text-[1.8rem] text-plum-dark">
                500 g Paket
              </h3>
              
              <p className="text-gray-600 mb-6">
                Aile sofraları ve tarifler için avantajlı paket.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 bg-[#8dbf6a]"></span>
                  <span className="text-gray-700">DALINDAN – Aynı gün paketleme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 bg-[#8dbf6a]"></span>
                  <span className="text-gray-700">Seçilen en iri ve dolgun erikler</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 bg-[#8dbf6a]"></span>
                  <span className="text-gray-700">Reçel, komposto ve günlük tüketim için uygun</span>
                </li>
              </ul>

              <div className="mb-6 p-4 rounded-lg bg-plum-green">
                <p className="text-sm text-gray-600">Fiyat için iletişime geçin</p>
              </div>

              <button
                onClick={() => scrollToSection('siparis')}
                className="w-full py-3 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg bg-plum-primary"
              >
                Sipariş Et
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section id="uretim" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4 text-[2.5rem] text-plum-dark">
              Nasıl Üretiyoruz?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-plum-green">
                <Leaf className="w-10 h-10 text-plum-primary" />
              </div>
              <h3 className="font-bold mb-3 text-[1.5rem] text-plum-dark">
                Doğal Yetiştirme
              </h3>
              <p className="text-gray-600">
                Bahçemizde kimyasal gübre ve zirai ilaç kullanmıyoruz. Toprağı organik yöntemlerle besliyoruz.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-plum-green">
                <Droplets className="w-10 h-10 text-plum-primary" />
              </div>
              <h3 className="font-bold mb-3 text-[1.5rem] text-plum-dark">
                Özenli Hasat
              </h3>
              <p className="text-gray-600">
                Eriklerimizi sabah erken saatlerde, en iyi olgunluk seviyesindeyken tek tek seçerek topluyoruz.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-plum-green">
                <Package className="w-10 h-10 text-plum-primary" />
              </div>
              <h3 className="font-bold mb-3 text-[1.5rem] text-plum-dark">
                Hijyenik Paketleme
              </h3>
              <p className="text-gray-600">
                Toplanan erikleri yıkayıp kuruttuktan sonra, gıda uyumlu paketlere el ile yerleştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="font-bold mb-6 text-[2.5rem] text-plum-dark">
                Bahçemizi Tanıyın
              </h2>
              <p className="text-gray-600 mb-4 text-[1.1rem] leading-[1.8]">
                Küçük bir aile bahçesinde başlayan bu yolculuğu, doğaya saygılı ve sağlıklı gıdaya inanan herkesle paylaşmak istiyoruz. 
              </p>
              <p className="text-gray-600 mb-4 text-[1.1rem] leading-[1.8]">
                Amacımız; dalından kopardığımız taze erikleri, hiçbir aracı olmadan doğrudan sofranıza ulaştırmak.
              </p>
              <p className="text-gray-600 text-[1.1rem] leading-[1.8]">
                Sınırlı sayıda ürettiğimiz için her paketin arkasında emeğimiz, alın terimiz ve içimiz rahat bir üretim süreci var.
              </p>
            </div>

            {/* Right: Illustration */}
            <div className="rounded-2xl p-12 flex items-center justify-center bg-gradient-to-br from-purple-100 via-green-50 to-green-100">
              <div className="text-center">
                <Leaf className="w-32 h-32 mx-auto mb-4 text-plum-primary opacity-70" />
                <p className="text-gray-600 text-[1.2rem]">
                  Doğanın Armağanı
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="sss" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4 text-[2.5rem] text-plum-dark">
              Sık Sorulan Sorular
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
                >
                  <span className="font-bold text-[1.1rem] text-plum-dark">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform text-plum-primary ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === index ? '200px' : '0'
                  }}
                >
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order & Contact Section */}
      <section id="siparis" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4 text-[2.5rem] text-plum-dark">
              Sipariş & İletişim
            </h2>
            <p className="text-gray-600 text-[1.1rem]">
              Sipariş vermek veya detaylı bilgi almak için formu doldurabilirsiniz. Size en kısa sürede geri dönüş yapacağız.
            </p>
          </div>

          {formSubmitted && (
            <div className="mb-8 p-4 rounded-xl text-center bg-plum-green text-plum-dark">
              <p>Formunuz bize ulaştı, en kısa sürede dönüş yapacağız.</p>
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="rounded-2xl p-8 shadow-lg bg-plum-light">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700">Ad Soyad *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-plum-primary"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Telefon *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-plum-primary"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">E-posta</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-plum-primary"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Paket Tercihi</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-plum-primary">
                  <option>Seçiniz</option>
                  <option>250 g Paket</option>
                  <option>500 g Paket</option>
                  <option>Her ikisi de</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Mesaj</label>
                <textarea
                  rows={5}
                  placeholder="Adres ve özel notlarınızı buraya yazabilirsiniz."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-plum-primary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg bg-plum-primary"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 text-white bg-plum-dark">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Leaf className="w-6 h-6" />
            <span className="font-bold">Bahçeden Organik Erik</span>
          </div>
          
          <p className="text-gray-300 mb-6">
            Sınırlı üretim, bol lezzet.
          </p>

          <div className="mb-6">
            <p className="text-gray-300">
              WhatsApp ile hızlı sipariş: <span className="font-medium">0555 123 45 67</span>
            </p>
          </div>

          <div className="pt-6 border-t border-gray-600 text-sm text-gray-400">
            © 2025 - ACRTECH
          </div>
        </div>
      </footer>
    </div>
  );
}