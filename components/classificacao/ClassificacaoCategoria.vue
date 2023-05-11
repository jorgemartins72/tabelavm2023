<template>
	<div class="px-2">
		<div class="rounded-lg border mb-4 px-1 pb-1 overflow-hidden" :class="bgGenero(categoria.label.split(' ')[0])">
			<div class="text-sm px-2 py-1">Categoria {{ setCategoria(categoria.label) }}</div>
			<div class="bg-white rounded-lg">
				<ClassificacaoGrupo v-for="(grupo, gk) in categoria.grupos" :key="gk" :grupo="grupo" />
			</div>
		</div>
	</div>
</template>

<script setup>

	const { categoria } = defineProps([
		'categoria'
	])

	const setCategoria = (categoria => {
		categoria = categoria.toLowerCase()
		categoria = categoria.split(' ').reverse()
		categoria[1] = categoria[1].charAt(0).toUpperCase() + categoria[1].slice(1);
		return categoria.join(' ')
	})

	const bgGenero = (genero => {
		return genero == 'MASCULINO' ? 'border-blue-200 bg-blue-200' : 'border-red-200 bg-red-200'
	})

</script>

<style scoped>

</style>