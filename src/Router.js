import { createRouter, createWebHistory } from "vue-router";
// import CheckboxComponent from "./components/CheckboxComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
// import PadreDeportes from "./components/PadreDeportes.vue";
// import ComicsComponent from "./components/ComicsComponent.vue";
// import PadreNumero from "./components/PadreNumero.vue";
// import SeleccionMultiple from "./components/SeleccionMultiple.vue";
// import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRoutes = [
  {
    path:"/", component: HomeComponent
    
  },
  // {
  //   path:"/checkbox", component: CheckboxComponent
    
  // },
  // {
  //   path:"/deportes", component: PadreDeportes
    
  // },
  // {
  //   path:"/comics", component: ComicsComponent
    
  // },
  // {
  //   path:"/numeros", component: PadreNumero
    
  // },
  // {
  //   path:"/select", component: SeleccionMultiple
    
  // }
  // ,
  // {
  //   path:"/numerodoble/:numero?", component: NumeroDoble
    
  // },
  {
    path:"/numero/:numero?", component: TablaMultiplicar
    
  }

]


const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

export default router;