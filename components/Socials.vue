<template>
	<div class="card">
		<LazyTwitter v-if="twitterLink" v-bind:link="twitterLink" />
		<LazyInstagram v-if="instagramLink" v-bind:link="instagramLink" />
	</div>
</template>

<script>
export default {
	name: 'Socials',
	props: {
		twitterLink: {
			type: String,
			default: '',
		},
		instagramLink: {
			type: String,
			default: '',
		},
	},
}
</script>

<style scoped>
.card {
	flex-wrap: wrap;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-top: 8px;
}
</style>

