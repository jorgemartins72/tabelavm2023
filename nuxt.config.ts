// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		['@nuxtjs/google-fonts', {
			families: {
				'Roboto': [300, 500],
				download: true,
				inject: true
			}
		}]
	],
	app: {
		head: {
			title: 'FVMR - Federação de Voleibol Master do Rio de Janeiro',
			meta:[
				{"http-equiv": 'Cache-control', content: 'no-cache, no-store, must-revalidate' },
				{"http-equiv": 'Pragma', content: 'no-cache' },
				{"http-equiv": 'Expires', content: -1 },
			]
		}
	}
})
