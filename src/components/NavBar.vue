<template lang="pt-br">
    <div class="navbarContainer">
        <span><strong>Receitas Legais</strong></span><br>
        <span>de mãe pra mãe etc</span>

        <router-link :to="{ name: 'HomePage' }" id="navBarButton">Página Inicial</router-link>
        <router-link v-if="!loggedIn" :to="{ name: 'LoginForm' }" id="navBarButton">Entrar</router-link>
        <router-link v-if="loggedIn" :to="{ name: 'ServiceList' }" id="navBarButton">Lista de Serviços</router-link>

        <button v-if="loggedIn" v-on:click="signOut()" id="navBarButton">Sair</button>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"

export default {
    name: "NavBar",
    data() {
        return {
            loggedIn: false
        }
    },
    methods: {
        async signOut(){
            try {
                const data = firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name: 'LoginForm'});
            }
            catch(err) {
                console.log(err)
            }
            
        }
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.loggedIn = true;
            }
            else{
                this.loggedIn = false;
            }
        })
    }
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

#navBarButton {
    margin-left: 2rem;
}
</style>
