/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    ...defaultTheme,
    content: ["./node_modules/tw-elements/dist/js/**/*.js"],
    extend: {
      colors: {
        'linaro-yellow': "#FFCE00",
        'linaro-purple': "#6715E8",
        'grey': '#6B6B6B',
        "background": "#222025",
      },
      backgroundImage: {
        'linaro-gradient': 'linear-gradient(102deg, #FFCE00 -0.43%, #6715E8 95.75%)',
        'purple-gradient': 'linear-gradient(180deg, rgba(103, 21, 232, 0.00) 0%, #6715E8 44%, #6715E8 55%, rgba(58, 12, 130, 0.00) 100%)',
        'border-gradient': 'linear-gradient(90deg, #222025 0%, #545454 49%, #222025 100%);'

      },
       animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },            
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // enter default text styles here
           
          },
        },
      }),
    },
    fontFamily: {
      sans: ["sofia-pro", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tw-elements/plugin.cjs"),
    // ...
  ],
};
