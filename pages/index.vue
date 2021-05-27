<template>
	<main class="container">
		<Header
			name="Quinn Pollock"
			description="Hey I'm Quinn (They/Them) and this is the stuff I do on the internet"
			image="quinn_icon"
			image-alt="Drawn photo of Quinn"
		/>
		<Card link="https://quinnpollock.net"> My Website </Card>
		<Card link="https://folksandfables.net">
			Folks &amp; Fables Podcast
		</Card>
		<Card link="https://goodbyte.games"> TTRPGs </Card>
		<Divider>Letterboxd Stuff</Divider>
		<Card link="https://watchlistpicker.com/?u=holopollock">
			Watch a Movie
		</Card>
		<Card link="https://directed-by-women.vercel.app/"
			>Directed by Women
		</Card>
		<Card link="https://letterboxd.com/holopollock/"> My Letterboxd </Card>
		<Divider>Development Stuff</Divider>
		<Card link="https://github.com/holopollock"> My Github </Card>
		<Card link="https://github.com/goodbyteco"> Goodbyte </Card>
		<Socials twitter-link="https://twitter.com/holopollock" />
	</main>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
	components: { Card },
}
</script>

<style scoped>
.container {
	margin: 0px auto;
	height: 100%;
	width: 100%;
	max-width: 680px;
	padding-bottom: 80px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex: 1 1 0%;
	padding: 24px 12px;
}
</style>
