import animations from 'tailwindcss-animated'
import tlwforms from '@tailwindcss/forms'
import tlwtypography from '@tailwindcss/typography'
import tlwaspectratio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
		Popato: '#ff9900',
			Comino: '#abcdef',
		  },
		extend: {},
	},


	plugins: [animations, tlwforms, tlwtypography, tlwaspectratio],
}
