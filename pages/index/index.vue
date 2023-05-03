<template>
	<div>
		<div class="font-extralight">Atualizado em {{ atualizacao }}</div>
		<ul>
			<li v-for="(item, k) in estadual.classificacao.categorias" :key="k">
				<div class="rounded-lg border mb-4 px-1 pb-1 overflow-hidden" :class="bgGenero(item.label.split(' ')[0])">
					<div class="text-sm px-2 py-1">Categoria {{ setCategoria(item.label) }}</div>
					<div class="bg-white rounded-lg">

						<div 
							class="pb-0"
							v-for="(grupo, gk) in item.grupos" :key="gk"
						>
							<div class="text-center">{{ grupo.grupo.label }}</div>
							<div class="text-xs font-extralight text-center grid grid-cols-12 text-gray-500">
								<div class="col-span-3 text-left pl-2">equipes</div>
								<div>pts</div>
								<div>jogos</div>
								<div>vitorias</div>
								<div>derrotas</div>
								<div>w.o.</div>
								<div>sets pro</div>
								<div>sets contra</div>
								<div>sets avg</div>
								<div>pts avg</div>
							</div>

							<div 
								class="grid grid-cols-12 text-sm font-light text-center" 
								v-for="(equipe, ek) in grupo.grupo.equipes" :key="ek"
								:class="{ 'bg-gray-100': ek % 2 === 0 }"
							>
								<div class="col-span-3 pl-2 font-black text-left text-gray-800">{{ equipe.equipe }}</div>
								<div class="text-center font-black text-gray-800">{{ equipe.pontos }}</div>
								<div class="">{{ equipe.jogos }}</div>
								<div class="">{{ equipe.vitorias }}</div>
								<div class="">{{ equipe.derrotas }}</div>
								<div class="">{{ equipe.wo }}</div>
								<div class="">{{ equipe.setspro }}</div>
								<div class="">{{ equipe.setscontra }}</div>
								<div class="">{{ Number.isInteger(equipe.setsavg) ? equipe.setsavg : equipe.setsavg.toFixed(2) }}</div>
								<div class="">{{ Number.isInteger(equipe.ptsavg) ? equipe.ptsavg : equipe.ptsavg.toFixed(2) }}</div>

							</div>

						</div>

					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { useDayjs } from '@/composable/dayjs'
	const ts = new Date().getTime()
	const estadual = await fetch('http://json-tabela.s3-website-us-east-1.amazonaws.com/estadualquadra2023t1.json?ts=' + ts)
		.then(response => response.json())

	const bgGenero = (genero => {
		return genero == 'MASCULINO' ? 'border-blue-200 bg-blue-200' : 'border-red-200 bg-red-200'
	})

	const setCategoria = (categoria => {
		categoria = categoria.toLowerCase()
		categoria = categoria.split(' ').reverse()
		categoria[1] = categoria[1].charAt(0).toUpperCase() + categoria[1].slice(1);
		return categoria.join(' ')
	})

	const atualizacao = useDayjs(estadual.update_at)

</script>

<style lang="scss" scoped>

</style>