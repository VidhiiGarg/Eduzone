/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { eduzone: { purple: '#431039', lime: '#78E600', paper: '#FAFBF7' } }, fontFamily: { heading: ['Manrope', 'sans-serif'], body: ['Inter', 'sans-serif'] } } },
  plugins: [],
}
