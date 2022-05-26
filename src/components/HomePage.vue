<template>
    <div class="centerContainer">
        <h1>Página Inicial</h1>

        <button v-on:click="getApi()">API Get</button>
        <p>Resultado Get: {{recipes}}</p>

        <hr>

        <input type="text" v-model="recipeName" name="recipeName" placeholder="Digite o nome da receita">
        <br>
        <button v-on:click="postApi()">API Post</button>
        <br>
        <p>Receita recém criada: {{returnedRecipe}}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "HomePage",
    data(){
        return {
            recipes: [],
            recipeName: '',
            returnedRecipe: '',
            config: 
            {
                headers: {
                    'Accept': 'application/json',
                    //'Access-Control-Allow-Origin': '*'
                    'Content-Type': 'application/json'
                }
            }
        }
    },
    methods: {
        async getApi(){
            axios.get('https://localhost:44300/Recipe/getRecipes', this.config)
                .then(response => this.recipes = response.data);
        },
        async postApi(){
            const recipe = {
                recipeName: this.recipeName
            }

            axios.post("https://localhost:44300/Recipe/insertRecipe", recipe, this.config)
                .then(response => this.returnedRecipe = response.data);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
