/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hindi: ["Hind Siliguri", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Serif", "serif"],
        hindi_outfit: ["Hind Siliguri", "Outfit", "sans-serif"],
        hindi_poppins: ["Hind Siliguri", "Poppins", "sans-serif"],
        li_ador: ["Li Ador Noirrit", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
