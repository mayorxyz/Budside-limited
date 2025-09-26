/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/**/*.html",
		"./src/**/*.{html,js,jsx,ts,tsx,css}",
	],
	theme: {
		extend: {
			// Customize your theme tokens in CSS with `@theme` (Tailwind v4)
			// You can still extend here for compatibility if needed
		},
	},
	plugins: [],
};


