<template>
  <div>
    <!-- <PadreDeportes/>
    <PadreNumero/> -->
    <!-- <ComicsComponent/> -->
    <!-- <SeleccionMultiple/> -->
    <!-- <CheckboxComponent/> -->
    <MenuComponent/>
    <router-view/>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

// import CheckboxComponent from './components/CheckboxComponent.vue';
// import SeleccionMultiple from './components/SeleccionMultiple.vue';

// import ComicsComponent from './components/ComicsComponent.vue';
// import PadreDeportes from './components/PadreDeportes.vue';
// import PadreNumero from './components/PadreNumero.vue';


export default {
  name: 'App',
  components: {
    // PadreDeportes, PadreNumero, 
    // ComicsComponent,
    // SeleccionMultiple
    // CheckboxComponent
    MenuComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
