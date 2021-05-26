<template>
	<a v-bind:href="link" class="card" target="_blank"> <slot></slot> </a>
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
}
</style>
