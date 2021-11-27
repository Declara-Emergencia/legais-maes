<template>
    <h1>Entrar</h1>
    <div>
        <div v-if="error">{{error.message}}</div><br>
        <input type="text" v-model="email" name="Username" placeholder="Digite seu usuário">
        <br>
        <input type="password" v-model="password" name="Password" placeholder="Digite sua senha">
        <br>
        <button v-on:click="onSubmit()">Enviar</button>
        <br>
        <router-link :to="{ name: 'RegisterForm' }">Não possui conta?</router-link>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"

export default {
    name: "LoginForm",
    data(){
        return {
            email: '',
            password: '',
            error: '',
        }
    },
    methods: {
        async onSubmit() {
            try{
                const user = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                console.log(user);
                
                this.$notify({
                    title: "Acesso Realizado",
                    text: "Seja Bem-Vindo(a)",
                    type: "success"
                });
                
                this.$router.replace({name: 'ServiceList'});
            }
            catch(err){
                //console.log(err);
                
                this.$notify({
                    title: "Credenciais inválidas",
                    //text: err.message,
                    text: "Verifique as informações inseridas e tente novamente",
                    type: "error"
                });
            }
        },
    }
}
</script>

<style>
    
</style>
