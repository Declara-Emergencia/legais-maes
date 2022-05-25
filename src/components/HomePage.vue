<template>
    <div class="centerContainer">
        <h1>Página Inicial</h1>

        <button v-on:click="callApi()">API Get</button>
        <p>Resultado Get: {{call}}</p>

        <!--<li v-for="c in call">
            {{ c.message }}
        </li>-->
        <hr>
        <input type="text" v-model="recipeName" name="recipeName" placeholder="Digite o nome da receita">
        <br>
        <button v-on:click="onSubmit()">API Post</button>
        <br>
        <p>Id receita recém criada: {{recipeId}}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "HomePage",
    data(){
        return {
            call: '',
            recipeName: '',
            config: 
            {
                headers: {
                    'Accept': 'application/json',
                    //'Access-Control-Allow-Origin': '*'
                    'Content-Type': 'application/json'
                }
            },
            recipeId: ''
        }
    },
    props: {
        //msg: String,
    },
    methods: {
        async callApi(){
            
            const call = await axios.get('http://localhost:5000/Recipe/getRecipes/', this.config);
            this.call = call.data.title;
        },
        async onSubmit(){
            const recipe = {
                recipeName: this.recipeName
            }
            /*const recipe = {
                "title": "autem hic labore sunt dolores incidunt",
                "body": "meme"
            }*/

            axios.post("http://localhost:5000/Recipe/insertRecipe", recipe, this.config)
                .then(response => this.recipeId = response.data.id);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
