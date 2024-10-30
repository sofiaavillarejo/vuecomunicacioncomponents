<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/deportes">Deportes</router-link></li>
      <li><router-link to="/numeros">Numeros</router-link></li>
      <li><router-link to="/comics">Comics</router-link></li>
      <li><router-link to="/checkbox">Suma Checkbox</router-link></li>
      <li><router-link to="/select">Select multiple</router-link></li>
      <li><router-link to="/numerodoble">Número Doble SIN</router-link></li>
      <li v-for="num in numerosUrl" :key="num">
        <router-link :to="`/numerodoble/${num}`">Doble {{ num }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data(){
    return {
      numerosUrl: [77, 8, 5, 12]
    }
  }
  
}
</script>
<style>
  ul {
    list-style: none;
    margin: 0;
  }
</style>