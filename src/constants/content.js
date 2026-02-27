export const CONTENT = {
    header: {
        logoText: "Canerikcim",
        whatsappButton: "WhatsApp Sipariş",
        whatsappLink: "https://wa.me/905000000000",
    },
    hero: {
        badge: "Yeni Sezon Başladı",
        titlePrefix: "Taptaze",
        titleHighlight: "Can Erikleri",
        titleSuffix: "Kapınızda",
        subtitle: "Mersin Mut'un eşsiz ikliminde yetişen, doğrudan dalından koparılıp aynı gün kargolanan çıtır çıtır can erikleri sofralarınıza ulaşıyor.",
        primaryButton: "Paketleri İncele",
        primaryButtonLink: "#products",
        secondaryButton: "Nasıl Çalışır?",
        secondaryButtonLink: "#how-it-works",
        imageAlt: "Taze Can Erikleri",
        floatingNotes: [
            "Günlük Hasat 🌿",
            "Aynı Gün Kargo 📦",
            "1. Kalite Çıtır Erik 🍏"
        ]
    },
    features: {
        sectionBadge: "Neden Biz?",
        sectionTitle: "Tarladan Sofranıza Uzanan Özen",
        sectionDescription: "Mersin Mut'un coğrafi işaretli can eriklerini en taze haliyle sizlere ulaştırıyoruz.",
        items: [
            {
                id: "f1",
                icon: "leaf",
                title: "Doğrudan Üreticiden",
                description: "Aracıları ortadan kaldırarak bahçemizden doğrudan kapınıza teslim ediyoruz."
            },
            {
                id: "f2",
                icon: "truck",
                title: "Hızlı ve Güvenli Kargo",
                description: "Zarar görmemesi için özel ambalajlarında, aynı gün kargoya veriyoruz."
            },
            {
                id: "f3",
                icon: "shield",
                title: "%100 Taze Garantisi",
                description: "dalından koptuğu tazeliği hissetmezseniz anında telafi ediyoruz."
            }
        ]
    },
    howItWorks: {
        sectionBadge: "Süreç",
        sectionTitle: "Siparişten Teslimata Yolculuk",
        steps: [
            {
                stepNum: "01",
                title: "Siparişinizi Verin",
                description: "WhatsApp üzerinden veya sitemizden size uygun paketi seçip siparişinizi oluşturun."
            },
            {
                stepNum: "02",
                title: "Sabah Hasadı",
                description: "Siparişleriniz için sabahın erken saatlerinde çiğ düşmeden özenle hasat yapıyoruz."
            },
            {
                stepNum: "03",
                title: "Aynı Gün Kargo",
                description: "Toplanan kıtır erikleri özel havalandırmalı kutulara paketleyip kargoya veriyoruz."
            }
        ]
    },
    products: {
        sectionBadge: "Sipariş Ver",
        sectionTitle: "Size En Uygun Paketi Seçin",
        sectionDescription: "Hasat durumuna göre günlük stok yenilenmektedir.",
        items: [
            {
                id: 1,
                name: "Klasik Paket",
                weight: "1 KG",
                price: "₺450",
                description: "Günlük taze tüketim için ideal, çıtır çıtır 1. kalite can erikleri.",
                features: ["Aynı gün kargo", "Özel muhafaza kutusu", "Taze teslimat"],
                popular: false,
                iconType: "smallBox"
            },
            {
                id: 2,
                name: "Aile Boyu",
                weight: "3 KG",
                price: "₺1200",
                description: "Ailecek doya doya yemek isteyenler için ekonomik boy çıtır erikler.",
                features: ["Ücretsiz kargo", "Ekstra korumalı ambalaj", "Öncelikli gönderim"],
                popular: true,
                badgeText: "En Çok Tercih Edilen",
                iconType: "largeBox"
            }
        ]
    },
    footer: {
        brandName: "Canerikcim",
        description: "Mersin Mut'tan tüm Türkiye'ye en taze can eriği gönderimi.",
        contactEmail: "info@canerikcim.com",
        city: "Mut, Mersin",
        copyright: `© ${new Date().getFullYear()} Canerikcim. Tüm hakları saklıdır.`,
        socialLinks: [
            { id: "instagram", url: "#", iconName: "instagram" },
            { id: "whatsapp", url: "https://wa.me/905000000000", iconName: "whatsapp" }
        ]
    },
};
