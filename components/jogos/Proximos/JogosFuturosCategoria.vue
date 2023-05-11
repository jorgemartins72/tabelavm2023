<template>
	<div class="px-2">
		<div>- Categoria {{ setCategoria(Object.keys(categoria)[0]) }}</div>
		<div class="flex flex-wrap grid md:grid-cols-3 grid-cols-1 gap-3">
			<div v-for="jogo in jogos" :key="jogo._id" class="mb-2">
				<JogosFuturosCategoriaItem :jogo="jogo" />
			</div>
		</div>
	</div>
</template>

<script setup>

	const { categoria } = defineProps([
		'categoria'
	])

	const jogos = computed(() => {
		return categoria[Object.keys(categoria)[0]]
	})

	const setCategoria = (categoria => {
		categoria = categoria.toLowerCase()
		categoria = categoria.split(' ').reverse()
		categoria[1] = categoria[1].charAt(0).toUpperCase() + categoria[1].slice(1);
		return categoria.join(' ')
	})
</script>

<style  scoped></style>