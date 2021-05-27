<template>
	<a v-bind:href="link" class="card" target="_blank" rel="noopener">
		<slot></slot>
	</a>
</template>

<script>
export default {
	name: 'Card',
	props: ['link'],
}
</script>

<style scoped>
.card {
	color: #fafafa;
	font-weight: bold;
	display: block;
	text-transform: capitalize;
	border: 5px solid #1c1c1c;
	text-decoration: none;
	background-color: rgb(132, 8, 132);
	padding: 8px 20px;
	margin-bottom: 16px;
	position: relative;
	line-height: 1.5;
	letter-spacing: 1.5px;
	width: 100%;
	transition-duration: 0.3s, 0.3s;
	transition-timing-function: initial, initial;
	transition-delay: initial, initial;
	transition-property: box-shadow;
}

.card:hover {
	box-shadow: rgba(132, 8, 132, 0.25) -8px 4px 20px 0px;
}
</style>
