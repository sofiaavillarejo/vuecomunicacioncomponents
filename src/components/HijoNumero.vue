<template>
  <div>
    <li style="list-style: none;"><h1 style="color: blue;">Número hijo:{{ numeros }}</h1></li>
    <button @click="sumarNumero()">Sumar {{numeros}}</button>
  </div>
</template>

<script>
export default {
  name: "HijoNumero",
  props: ["numeros"],
  mounted(){
    console.log(this.numeros);
  },
  methods: {
    sumarNumero(){
      console.log(this.numeros);
      this.$emit("sumarNum", this.numeros);
    }
  }
}
</script>

<style>
  ul{
    padding: 0;
    list-style: none;
  }
</style>