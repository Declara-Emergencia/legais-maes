<template>
    <h1>Registrar</h1>
    <div>
        <div v-if="error">{{error.message}}</div><br>
        <input type="email" v-model="email" name="Username" required placeholder="Digite seu usuário">
        <br>
        <input type="password" v-model="password" name="Password" required placeholder="Digite sua senha">
        <br>
        <button v-on:click="onSubmit()">Enviar</button>
        <br>
        <!--<form @submit.prevent="onSubmit">
            Registrar
        </form>-->
    </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"

export default {
    name: "RegisterForm",
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
                const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                
                this.$notify({
                    title: "Cadastro Realizado",
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
