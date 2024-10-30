<template>
  <div>
    <h1>Seleccion Multiple Component</h1>
    <div>
      <select multiple v-model="selectOptions">
        <option v-for="dato in datos" :key="dato">{{ dato }}</option>
      </select>
    </div>
    <button @click="cargarDatos()">Ver datos</button>
        <div v-if="colores.length > 0">
          <h1 style="color: burlywood;" v-html="colores"></h1>
        </div>
  </div>
</template>

<script>

export default {
  name: "SeleccionMultiple",
  data(){
    return {
      datos: ["Azul", "Rojo", "Amarillo", "Rosa", "Verde"],
      selectOptions: [],
      colores: ""
    }
  },
  methods: {
    cargarDatos(){
      console.log(this.mostrarDatos);
      this.colores = this.selectOptions.join(", ");
    }
  }
}
</script>

<style>
@import './../assets/css/estilocomic.css';
</style>