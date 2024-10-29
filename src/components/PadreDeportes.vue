<template>
  <div>
    <h1>Padre Component</h1>
    <h2 style="background-color: yellow;" v-if="favorito">Su deporte fav es: {{ favorito }}</h2>
    <ul v-for="deporte in deportes" :key="deporte">
      <!--todo: le enviamos los deportes con props-->
      <!--todo: le enviamos el metodo al hijo-->
      <HijoDeporte :nombredeporte="deporte" v-on:seleccionarFavoritoPadre="seleccionarFavoritoPadre"/> 
    </ul>
  </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue';

export default {
  name: "PadreDeportes",
  components: {
    HijoDeporte
  },
  data(){
    return {
      deportes: ["Baloncesto", "Futbol", "Volleyball", "Atletismo", "Ajedrez"],
      favorito: null 
    }
  },
  methods: {
    //creamos un metodo para ser llamado desde el hijo
    seleccionarFavoritoPadre(deporteFavorito){
      console.log("Yo soy tu padre");
      this.favorito = deporteFavorito;
    }
  }
}
</script>

<style>

</style>