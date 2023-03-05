/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container:true
		},
		colors : {
			"bk-1": "#292524"
		}
	},
	plugins: [],
}
