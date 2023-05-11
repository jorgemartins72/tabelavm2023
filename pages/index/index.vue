<template>
	<div class="mt-24 md:mt-28 font-extralight text-xs px-4 text-right">Atualizado em {{ atualizacao }}</div>
	<div class="grid grid-cols-1 gap-4">
		<Jogos :jogos="jogos" :resultados="resultados" />
		<Classificacao :classificacao="estadual.classificacao" />
	</div>
</template>

<script setup>
	import { useDayjs } from '@/composable/dayjs'
	const ts = new Date().getTime()
	const estadual = await fetch('https://jsondata.voleimasterrj.com.br/estadualquadra2023t1.json?ts=' + ts)
		.then(response => response.json())

	// const estadual = await $fetch('https://jsondata.voleimasterrj.com.br/estadualquadra2023t1.json')

	// const { data: estadual } = await useFetch('https://jsondata.voleimasterrj.com.br/estadualquadra2023t1.json')
	// console.log(estadual)
	// const { data: estadual } = await useFetch('/api/tabela')

	const jogos = computed(() => {
		return JSON.parse(JSON.stringify(estadual.jogos)).map(x => jogosselecionados(x, Object.keys(x)[0])).filter(ii => ii[Object.keys(ii)[0]].length != 0)
	})

	const resultados = computed(() => {
		return JSON.parse(JSON.stringify(estadual.jogos)).map(x => jogosselecionados(x, Object.keys(x)[0])).filter(ii => ii[Object.keys(ii)[0]].length != 0)
	})

	const jogosselecionados = (obj, key) => {
		obj[key] = obj[key].filter(i => i.show == 'sim')
		return obj
	}

	const atualizacao = useDayjs(estadual.update_at)

</script>

<style lang="scss" scoped>

</style>