<template>
	<div class="rounded-lg bg-blue-50 border border-blue-200 text-gray-600 font-light px-3 py-2">
		<div class="text-xs font-bold text-gray-400">{{ diadojogo(jogo.data) }} - {{ jogo.hora }}</div>
		<div class="flex flex-col">
			<div class="font-bold">
				{{ jogo.equipe1 }}
				<span 
					class="inline-flex items-center rounded-md bg-pink-50 px-2 py-0 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
					v-if="jogo.wo[0] == 1"
				>
					W.O.
				</span>
			</div>
			<div class="flex flex-nowrap items-center space-x-3">
				<div class="flex items-center space-x-1 text-xl font-bold">
					<div>{{ jogo.sets[0] }}</div>
					<div class="text-xs text-gray-500 font-light versus">x</div>
					<div>{{ jogo.sets[1] }}</div>
				</div>
				<div class="text-xs font-bold parciais">
					({{ parciais(jogo) }})
				</div>
			</div>
			<div class="font-bold">
				{{ jogo.equipe2 }}
				<span 
					class="inline-flex items-center rounded-md bg-pink-50 px-2 py-0 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
					v-if="jogo.wo[1] == 1"
				>
					W.O.
				</span>
			</div>
		</div>
		<div class="text-xs font-bold text-gray-400">{{ jogo.local }}</div>

	</div>
</template>

<script setup>
	import dayjs from 'dayjs'
	import 'dayjs/locale/pt-br'

	const { jogo } = defineProps([
		'jogo'
	])

	const diadojogo = (v) => {
		let dt = dayjs(v).locale('pt-br').format('dddd|D [de]|MMMM').split('|')
		return `${dt[0].charAt(0).toUpperCase() + dt[0].slice(1)}, ${dt[1]} ${dt[2].charAt(0).toUpperCase() + dt[2].slice(1)}`
	}

	const parciais = (j) => {
		console.log()
		return j.sets_e1.map((i, k) => `${j.sets_e1[k]}/${j.sets_e2[k]}`).join(' - ')
	}

</script>

<style scoped>
	.parciais, .versus {
		margin-top: -2px;
	}
</style>