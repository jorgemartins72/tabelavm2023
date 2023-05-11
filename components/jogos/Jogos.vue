<template>
	<div class="grid grid-cols-1 gap-8">
		<JogosFuturos :jogos="jogos" />
		<JogosPassados :resultados="resultados" />
	</div>
</template>

<script setup>

	const { jogos, resultados } = defineProps([
		'jogos',
		'resultados'
	])

</script>

<style  scoped>

</style>