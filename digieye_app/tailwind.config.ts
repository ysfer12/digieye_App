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
        customBlue: '#1C5DAA',
        customBlueDark: '#15447A', // Darker shade for hover effect
        customRadial: 'radial-gradient(circle, rgba(37,69,107,1) 0%, rgba(9,28,53,1) 35%)',
      },
    },
  },
  plugins: [],
};

export default config;
