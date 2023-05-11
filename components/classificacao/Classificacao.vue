<template>
	<div>
		<div class="font-bold text-lg pl-2">
			Classificação Primeiro Turno
		</div>
		<ul>
			<li v-for="(categoria, k) in classificacao.categorias" :key="k">
				<ClassificacaoCategoria :categoria="categoria" />
			</li>
		</ul>
	</div>
</template>

<script setup>

	const { classificacao } = defineProps([
		'classificacao'
	])

</script>

<style scoped>

</style>