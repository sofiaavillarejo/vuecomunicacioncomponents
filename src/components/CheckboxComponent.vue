<template>
  <div>
    <h1>Checkbox Component</h1>
    <button @click="generarCheckbox()">Generar Checkbox</button>
    <div style="display: flex; margin-top: 10px; justify-content: center;" v-if="numeros.length > 0">
      <label v-for="num in numeros" :key="num">{{ num }}
        <input type="checkbox" :value="num" v-model="numerosCheck" @change="sumarCheck()" />
      </label>
    </div>
    <div v-if="suma > 0">
      <h2>El total es: {{ suma }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxComponent",
  data(){
    return {
      numeros: [],
      numerosCheck: [],
      suma: 0
    }
  },
  methods: {
    generarCheckbox () {
      var numero = parseInt(Math.random()*100) + 1;    
      this.numeros.push(numero);    
      console.log(this.numeros);
    },
    sumarCheck(){
      this.suma = 0;
      for (let num of this.numerosCheck){
        this.suma += num;
      }
      console.log(this.suma)
      console.log()
    }
  }
}
</script>

<style>
  label {
    margin-right: 10px;
  }
</style>