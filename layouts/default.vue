<template>
	<div class="p-3">
		<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
				<a href="#">
					<Logo />
				</a>
				<div class="flex hidden md:inline md:order-2">
					Campeonato Estadual de Vôlei Master 2023
				</div>
			</div>
		</nav>

		<div class="max-w-screen-xl mx-auto">
			<slot />

		</div>

	</div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

</style>