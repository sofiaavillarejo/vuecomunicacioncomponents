<template>
    <li class="comic-card">
      <h2>{{ comic.titulo }}</h2>
      <p>{{ comic.descripcion }}</p>
      <img :src="comic.imagen" /> <!--todo: si asignamos una propiedad a una variable -> : -->
      <h4 :class="{rojo:comic.year <= 2000, verde: comic.year >2000}">Año: {{ comic.year }}</h4>
      <div>
        <img style="width: 30px; height: 30px;" @click="seleccionarFavorito()" src="./../assets/corazon.png"/>
        <img style="width: 30px; height: 30px;" @click="deleteComic()" src="./../assets/basura.png"/>
      </div>
      
    </li>
</template>

<script>
export default {
  name: "ComicComponent",
  props: ["comic", "index"],
  methods: {
    seleccionarFavorito(){
      // Llamo al metodo del padre pasandole el objeto comic
      this.$emit("seleccionarFavorito", this.comic);
    },
    deleteComic(){
      this.$emit("deleteComic", this.index);
    }
  }
}
</script>

<style>
@import './../assets//css/estilocomic.css';
</style>