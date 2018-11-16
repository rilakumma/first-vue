<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <input v-model="message">
  </div>
</template>

<script>
var char = '';
export default {
    props:{
        message: String
    },
    data (){
        return{
            char,
            myMessage: 'testing message'
        }
    },
   created(){
       fetch('https://swapi.co/api/people/1').then(res=> res.json()).then(json=> this.char = json.name)
   }
}
</script>

<style>

</style>
