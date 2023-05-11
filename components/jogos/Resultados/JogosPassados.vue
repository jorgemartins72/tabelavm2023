<template>
	<div v-if="totalresultadojogos() > 0">
		<div class="font-bold text-lg pl-2">
			Resultados dos últimos Jogos
		</div>
		<div v-for="(categoria, k) in resultadojogos()" :key="k">
			<JogosPassadosCategoria :categoria="categoria" />
		</div>
	</div>
</template>

<script setup>

	const { resultados } = defineProps([
		'resultados'
	])

	const resultadojogos = () => {
		return resultados.map(x => filtroresultadojogos(x, Object.keys(x)[0]))
		// return resultados
	}

	const totalresultadojogos = () => {
		let total = 0
		for (let i = 0; i < resultadojogos().length; i++) {
			let item = resultadojogos()[i]
			total += item[Object.keys(item)].length
		}
		return total
	}
	
	const filtroresultadojogos = (obj, key) => {
		obj[key] = obj[key].filter(e => 'pontos' in e === true)
		return obj
	}

</script>

<style scoped></style>
