import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          primary: "#6b256f", // Ana mor renk
          light: "#faf8f5",   // Arka plan krem rengi
          green: "#dcefd8",   // Açık yeşil vurgular
          dark: "#2d3748",    // Koyu metin rengi
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)"], // Font ayarımız
      },
    },
  },
  plugins: [],
};
export default config;