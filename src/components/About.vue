<template>
    <div id="about">
        <h2 class="title">{{$t("about.title")}}</h2>
        <p class="body_block">{{$t("about.body")}}</p>
    </div>
</template>

<script>
export default {
	name: "About"
}
</script>

<style scoped>
	#about {
		width: 100vw;
		height: 100vh;

		display: flex;
		align-items: center;
		justify-content: center;

	}
</style>