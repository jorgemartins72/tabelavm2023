<template>
	<div class="text-xs font-extralight text-center grid grid-cols-8 md:grid-cols-12 text-gray-500">
		<div class="col-span-4 md:col-span-3 text-left pl-2">equipes</div>
		<div>pts</div>
		<div>jogos</div>
		<div>vitorias</div>
		<div>derrotas</div>
		<div class="hidden md:inline">w.o.</div>
		<div class="hidden md:inline">sets pro</div>
		<div class="hidden md:inline">sets contra</div>
		<div class="hidden md:inline">sets avg</div>
		<div class="hidden md:inline">pts avg</div>
	</div>

	<div 
		class="grid grid-cols-8 md:grid-cols-12 text-sm font-light text-center" 
		v-for="(equipe, ek) in equipes" :key="ek"
		:class="{ 'bg-gray-100': ek % 2 === 0 }"
	>
		<div class="col-span-4 md:col-span-3 pl-2 font-black text-left text-gray-800">{{ equipe.equipe }}</div>
		<div class="text-center font-black text-gray-800">{{ equipe.pontos }}</div>
		<div class="">{{ equipe.jogos }}</div>
		<div class="">{{ equipe.vitorias }}</div>
		<div class="">{{ equipe.derrotas }}</div>
		<div class="hidden md:inline">{{ equipe.wo }}</div>
		<div class="hidden md:inline">{{ equipe.setspro }}</div>
		<div class="hidden md:inline">{{ equipe.setscontra }}</div>
		<div class="hidden md:inline">{{ Number.isInteger(equipe.setsavg) ? equipe.setsavg : equipe.setsavg.toFixed(2) }}</div>
		<div class="hidden md:inline">{{ Number.isInteger(equipe.ptsavg) ? equipe.ptsavg : equipe.ptsavg.toFixed(2) }}</div>
	</div>

</template>

<script setup>

	const { equipes } = defineProps([
		'equipes'
	])

</script>

<style scoped>

</style>