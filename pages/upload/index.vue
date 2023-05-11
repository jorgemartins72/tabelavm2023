<template>
	<div class="mt-36">
		<input type="file" @change="upfile">
	</div>
</template>

<script setup>

	let { data } = await useFetch(() => "https://souiwgnuu0.execute-api.us-east-1.amazonaws.com/dev/UploadTabelaProvisoria")

	const upfile = (e => {

		let formData = new FormData();
		formData.append('file', e.target.files[0]);

		useFetch(data._value, {
				method: "PUT",
				body: formData,
				headers: {
					"Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
				},
				onResponse({ request, response, options }) {
					// console.log(response.status)
					window.location.reload()
				},
			},
		)

	})

</script>

<style lang="scss" scoped>

</style>