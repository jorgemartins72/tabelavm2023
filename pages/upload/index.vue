<template>
	<div>
		<input type="file" @change="upfile">
		<pre>
			{{ aaa }}
		</pre>
		<pre>
			{{ bbb }}
		</pre>
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
				// onResponse({ request, response, options }) {
				// 	console.log(request, response, options)
				// }
			},
		)

	})

</script>

<style lang="scss" scoped>

</style>