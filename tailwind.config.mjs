/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway Variable', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [
		require('daisyui'), require('@tailwindcss/typography')
	],
	daisyui: {
		themes: [
			{
				mamishaLight: {
					"primary": "#251605",
					"secondary": "#5C3C29",
					"accent": "#C88F67",
					"neutral": "#7A5D52",
					"base-100": "#F4E4D7",
					"info": "#3B9ED8",
					"success": "#4CAF50",
					"warning": "#FF9800",
					"error": "#F44336",
				},
				mamishaDark: {
					"primary": "#F4E4D7",
					"secondary": "#7A5D52",
					"accent": "#C88F67",
					"neutral": "#5C3C29",
					"base-100": "#251605",
					"info": "#A1C6E7",
					"success": "#81C784",
					"warning": "#FFB74D",
					"error": "#EF5350",
				},
			}
		]
	}
}
