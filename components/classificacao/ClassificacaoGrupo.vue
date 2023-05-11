<template>
	<div class="text-center">{{ grupo.grupo.label }}</div>
	<ClassificacaoEquipes :equipes="grupo.grupo.equipes" />
</template>

<script setup>

	const { grupo } = defineProps([
		'grupo'
	])

</script>

<style lang="scss" scoped>

</style>