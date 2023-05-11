<template>
	<div v-if="totalproximosjogos() > 0">
		<div class="font-bold text-lg pl-2">
			Próximos Jogos
		</div>
		<div v-for="(categoria, k) in proximosjogos()" :key="k" class="mb-2">
			<JogosFuturosCategoria :categoria="categoria" />
		</div>
	</div>
</template>

<script setup>

	const { jogos } = defineProps([
		'jogos'
	])

	const proximosjogos = () => {
		return jogos.map(x => filtroproximosjogos(x, Object.keys(x)[0]))
	}

	const totalproximosjogos = () => {
		let total = 0
		for (let i = 0; i < proximosjogos().length; i++){
			let item = proximosjogos()[i]
			total += item[Object.keys(item)].length
		} 
		return total
	}

	const filtroproximosjogos = (obj, key) => {
		obj[key] = obj[key].filter(e => 'pontos' in e === false)
		return obj
	}

</script>

<style scoped>

</style>
