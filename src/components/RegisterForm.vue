<template lang="pt-br">
    <div>
        <input type="text" name="Username" placeholder="Digite seu usuário">
        <br>
        <input type="password" name="Password" placeholder="Digite sua senha">
        <br>
        <button v-on:click="onSubmit($event)">Registrar</button>
        <br>
        <a href="">Esqueceu a senha?</a>
    </div>
</template>
<script>

export default {
    name: "RegisterForm",
    methods: {
        onSubmit(e) {
            console.log(e)
        },
    }
}
</script>

<style lang="css">
    
</style>
