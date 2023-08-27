/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
       dark:"#291b1a",
       blue1:"#6AC9FF",
       blue2:"#8FCCFE",
       bluedark:"#3F8BC3"
      },
      dropShadow:{
        special: "shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      }
    },
  },
  plugins: [],
}
