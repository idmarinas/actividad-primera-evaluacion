/** @type {import('tailwindcss').Config} */

const hexToRgb = (hex) => {
  hex = hex.replace('#', '')
  hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `${r} ${g} ${b}`
}
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				'gold-sand': {
					'50': '#fbf8f1',
					'100': '#f6edde',
					'200': '#edd9bb',
					'300': '#deb887',
					'400': '#d39c64',
					'500': '#ca8345',
					'600': '#bc6e3a',
					'700': '#9c5732',
					'800': '#7e462e',
					'900': '#663b28',
					'950': '#371d13',
				},
			},
			typography: ({ theme}) => ({
				'gold-sand': {
					css: {
						'--tw-prose-body': theme('colors.gold-sand.700'),
						'--tw-prose-headings': theme('colors.gold-sand.900'),
						'--tw-prose-lead': theme('colors.gold-sand.600'),
						'--tw-prose-links': theme('colors.gold-sand.900'),
						'--tw-prose-bold': theme('colors.gold-sand.900'),
						'--tw-prose-counters': theme('colors.gold-sand.500'),
						'--tw-prose-bullets': theme('colors.gold-sand.300'),
						'--tw-prose-hr': theme('colors.gold-sand.200'),
						'--tw-prose-quotes': theme('colors.gold-sand.900'),
						'--tw-prose-quote-borders': theme('colors.gold-sand.200'),
						'--tw-prose-captions': theme('colors.gold-sand.500'),
						'--tw-prose-kbd': theme('colors.gold-sand.900'),
						'--tw-prose-kbd-shadows': hexToRgb(theme('colors.gold-sand.900')),
						'--tw-prose-code': theme('colors.gold-sand.900'),
						'--tw-prose-pre-code': theme('colors.gold-sand.200'),
						'--tw-prose-pre-bg': theme('colors.gold-sand.800'),
						'--tw-prose-th-borders': theme('colors.gold-sand.300'),
						'--tw-prose-td-borders': theme('colors.gold-sand.200'),
						'--tw-prose-invert-body': theme('colors.gold-sand.300'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.gold-sand.400'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.gold-sand.400'),
						'--tw-prose-invert-bullets': theme('colors.gold-sand.600'),
						'--tw-prose-invert-hr': theme('colors.gold-sand.700'),
						'--tw-prose-invert-quotes': theme('colors.gold-sand.100'),
						'--tw-prose-invert-quote-borders': theme('colors.gold-sand.700'),
						'--tw-prose-invert-captions': theme('colors.gold-sand.400'),
						'--tw-prose-invert-kbd': theme('colors.white'),
						'--tw-prose-invert-kbd-shadows': hexToRgb(theme('colors.white')),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.gold-sand.300'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.gold-sand.600'),
						'--tw-prose-invert-td-borders': theme('colors.gold-sand.700'),
					},
				},
			})
		},
  },
  plugins: [
		require('@tailwindcss/typography'),
	],
}
