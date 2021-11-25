<template>
    <NavBar />
    <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
    name: "App",
    components: {
        NavBar,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    --cinza-edson: #999999;
    --deep-edson: #555555;
}

.centerContainer {
    margin: auto;
    width: 95%;
    padding: 10px;
    padding-top: 0rem;
    text-align: center;
}
</style>
