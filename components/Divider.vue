<template>
	<h3 class="card"><slot></slot></h3>
</template>

<script>
export default {}
</script>

<style scoped>
h3 {
	font-weight: bold;
	display: block;
	text-transform: capitalize;
	padding: 8px 20px;
	margin-top: 8px;
	margin-bottom: 16px;
	position: relative;
	line-height: 1.5;
	letter-spacing: 1.5px;
	width: 100%;
}
</style>
