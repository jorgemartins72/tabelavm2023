<template>
	<div class="rounded-lg bg-blue-900 text-white font-light px-3 py-2">
		<div class="text-xs font-bold text-blue-300">{{ diadojogo(jogo.data) }} - {{ jogo.hora }}</div>
		<div class="flex flex-col">
			<div class="font-bold">{{ jogo.equipe1 }}</div>
			<div class="box-content text-xs text-blue-300 versus">vs</div>
			<div class="font-bold">{{ jogo.equipe2 }}</div>
		</div>
		<div class="text-xs font-bold text-blue-300">{{ jogo.local }}</div>

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

</script>

<style scoped>
	.versus {
		margin-top: -4px;
	}
</style>