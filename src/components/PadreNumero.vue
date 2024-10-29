<template>
  <div>
    <h1>Numeros Padre</h1>
    <button @click="nuevoNum()">Nuevo número</button>
    <h2 style="color: red;" v-if="total">La suma es: {{ total }}</h2>
    <ul v-for="num in numeros" :key="num">
      <HijoNumero :numeros="num" v-on:sumarNum="sumarNum"/>
    </ul>
  </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';

export default {
  name: "PadreNumero",
  components: {
    HijoNumero
  },
  data(){
    return {
      numeros: [ 1, 5, 13, 75, 44],
      total: null
    }
  },
  methods: {
    sumarNum(numSelect){
      console.log("metodo padre");
      this.total = this.total + numSelect;
    },
    nuevoNum(){
      var numero = parseInt(Math.random()*100) + 1;        
      this.numeros.push(numero);
    }
  }
}
</script>

<style>

</style>