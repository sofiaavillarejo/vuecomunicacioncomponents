<template>
  <div>
    <li>{{ nombredeporte }}
      <button @click="seleccionarFavorito()">Seleccionar favorito</button>
    </li>
    
  </div>
</template>

<script>
export default {
  name: "HijoDeporte",
  props: ["nombredeporte"], //recuperamos los deportes que han sido enviados por props
  mounted(){
    console.log(this.nombredeporte)
  },
  methods: {
    seleccionarFavorito(){
      console.log("Soy el hijo");
      //DEBEMOS REALIZAR LA LLAMADA AL PADRE -> mediante string "nombremetodoparent"
      //Para enviar info, se realiza con comas por cada parametro que tengamos en la recepcion
      this.$emit("seleccionarFavoritoPadre", this.nombredeporte);
    }
  }
}
</script>

<style>

</style>