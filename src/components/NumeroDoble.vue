<template>
  <div>
    <h1>Número Doble</h1>
    <button @click="redirectToHome()">Navegar</button>
    <h2 style="color: burlywood;">{{ mensaje }}</h2>
    <h3 style="color: crimson;">Doble: {{ doble }}</h3>
  </div>
</template>

<script>
export default {
  name: "NumeroDoble",
  data(){
    return {
      mensaje: "",
      doble: 0
    }
  },
  mounted(){
    console.log(this.$route.params.numero)
    //LOS PARAMTEROS SON STRING, NO IMPORTA SI SON NUMERICOS
    let paramNumero = this.$route.params.numero; //recupero el parametro de la URL
    if(paramNumero == ""){
      console.log("Sin parametros");
      this.mensaje = "Sin parámetros en Routing";
    } else {
      this.mensaje = "Parámetro recibido: " + paramNumero;
      let valor = parseInt(paramNumero * 2)
      this.doble = valor;
    }

    //hasta aqui, el component no se reedibuja si no cambiamos entre components.
  },
  //<!--!-->Para solucionarlo, hay que hacerlo al estilo componentDidUpdate()
  //<!--todo: debemos supervisar los cambios que se realizan en mi página -> watch
  watch: {
    '$route.params.numero' (nextVal, oldVal){
      //solo debemos realizar las acciones cuando nuestro param cambie
      if (nextVal != oldVal){
        this.mensaje = "Esto ha cambiado!!! " + this.$route.params.numero;
        let valor = parseInt(this.$route.params.numero);
        this.doble = valor * 2;
      }
    }
  },
  methods: {
    //<!--todo: NAVEGACION POR CODIGO
    redirectToHome(){
      this.$router.push("/");
    }
  }
}
</script>

<style>

</style>