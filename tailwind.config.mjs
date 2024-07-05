import animations from 'tailwindcss-animated'
import tlwforms from '@tailwindcss/forms'
import tlwtypography from '@tailwindcss/typography'
import tlwaspectratio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [animations, tlwforms, tlwtypography, tlwaspectratio],
}
