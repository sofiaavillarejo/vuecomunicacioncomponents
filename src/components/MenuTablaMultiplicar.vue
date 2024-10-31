<template>
  <div class="menu-container">
    <h2>Selecciona un Número</h2>
    <ul id="menu">
      <li><router-link to="/">🏠 Home</router-link></li>
      <li v-for="num in numeros" :key="num">
        <router-link :to="`/numero/${num}`">🧮 Tabla de multiplicar del {{ num }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuTablaMultiplicar",
  data() {
    return {
      numeros: [],
    };
  },
  methods: {
    generarNumeros() {
      while (this.numeros.length < 7) {
        const numero = Math.floor(Math.random() * 100) + 1;
        if (!this.numeros.includes(numero)) {
          this.numeros.push(numero);
        }
      }
      console.log(this.numeros);
    },
  },
  mounted() {
    this.generarNumeros();
  },
};
</script>

<style scoped>
.menu-container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

#menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#menu li {
  margin: 10px 15px;
}

#menu a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  padding: 10px 15px; 
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

#menu a:hover {
  background-color: #007bff;
  color: white;
}
</style>

