/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{js,jsx}'], theme: { extend: { colors: { ink:'#0b1728', steel:'#24364d', safety:'#f97316', mist:'#f4f6f8' }, fontFamily:{ sans:['Inter','ui-sans-serif','system-ui','sans-serif'] }, boxShadow:{card:'0 14px 40px -24px rgba(11,23,40,.35)'} } }, plugins: [] };
