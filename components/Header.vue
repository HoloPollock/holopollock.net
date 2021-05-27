<template>
	<header>
		<NuxtLink to="/">
			<img
				v-bind:alt="imageAlt"
				:src="require(`~/assets/img/${image}.jpg`)"
			/>
		</NuxtLink>
		<h1 id="name">{{ name }}</h1>
		<div id="description">{{ description }}</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	props: ['image', 'image-alt', 'name', 'description'],
}
</script>

<style scoped>
header {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 16px;
}

header * {
	margin-bottom: 12px;
}

img {
	border-radius: 50%;
	width: 96px;
	height: 96px;
	display: block;
	object-fit: contain;
	object-position: initial;
}

#name {
	font-size: 1.25em;
}

#description {
	font-weight: 500;
}
</style>
