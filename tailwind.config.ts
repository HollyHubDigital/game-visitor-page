import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1020',
        panel: '#111827',
        accent: '#f97316',
        success: '#22c55e',
        danger: '#ef4444',
        primary: '#7c3aed'
      },
      boxShadow: {
        panel: '0 10px 30px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
