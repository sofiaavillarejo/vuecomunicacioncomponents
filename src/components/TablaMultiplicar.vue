<template>
  <div class="tabla-multiplicar">
    <h1>Tabla de multiplicar</h1>
    <div v-if="numUrl">
      <table class="tabla">
        <thead>
          <tr>
            <th>Operación</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody v-html="html"></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data(){
    return {
      html: "",
      secuencia: [],
      numUrl: 0
    }
  },
  methods: {
    multiplicar() {
      if (!this.numUrl){
      alert("No se ha recibido ningún número en la URL")
    } else {
      this.html = "";
      let aux = [];
      for (let i = 0; i <= 10; i++) {
        let multiplicar = this.numUrl * i;
        aux.push(multiplicar);
        this.html+= `
          <tr>
            <td>${this.numUrl} * ${i}</td>
            <td>${multiplicar}</td>
          </tr>
        `
      }
      this.secuencia = aux;
    }
    }
  },
  mounted(){
    this.numUrl = this.$route.params.numero;
    console.log(this.numUrl);
    this.multiplicar();
    
  },
  watch: {
    '$route.params.numero' (nextVal, oldVal){
      if (nextVal != oldVal){
        this.numUrl = parseInt(this.$route.params.numero);
      }
      console.log(this.numUrl);
      this.multiplicar();
    }
  }
}
</script>

<style>
  .tabla-multiplicar {
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
    font-family: Arial, sans-serif;
  }

  h2 {
    color: #333;
    margin-bottom: 20px;
  }

  .tabla {
    width: 100%;
    border-collapse: collapse;
  }

  .tabla th, .tabla td {
    border: 1px solid #ddd;
    padding: 12px;
  }

  .tabla th {
    background-color: #4CAF50;
    color: white;
  }

  .tabla tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .tabla tr:hover {
    background-color: #ddd;
  }

  p {
    color: #555;
  }
</style>