<template lang="pt-br">
    <div class="navbarContainer">
        <span><strong>Mães Legais</strong></span><br>
        <span>de mãe pra mãe etc</span>

        <button><router-link :to="{ path: '/' }">Home</router-link></button>
        <button><router-link :to="{ path: '/register' }">Register</router-link></button>
    </div>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style lang="css">
.navbarContainer {
    background-color: white;

    border-bottom: 2.5px solid var(--cinza-edson);
    display: block;

    padding: 0;

    top: 0;
    width: 95%;
    z-index: 1000;

    margin: 0 auto;

    text-align: left;
}

.navbarContainer span {
    font-size: 12px;
    color: var(--deep-edson);
    position: relative;
}

button {
    margin-left: 2rem;
}
</style>
