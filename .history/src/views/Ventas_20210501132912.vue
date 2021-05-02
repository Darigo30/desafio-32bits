<template>
  <div class="home mt-5 text-center">
    <h1 class="mb-4">Ventas</h1>
    <h2>Cantidad de Juegos con stock mayor a cero {{ juegosConStock }}</h2>
    <ul>
        <li v-for="cantidadjuegos in juegosConStock" :key="cantidadjuegos.codigo">
             {{ juego.nombre }} {{ juego.stock }}
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Ventas",
  
  computed: {
    ...mapState(["juegos"]),
    juegosConStock() {
      const prod = this.juegos;
      if (!prod) return [];

      const filtered = prod.filter((fil) => fil.stock > 0);
      if (!filtered) return [];

      return filtered;
    },
  },
  created () {
      console.log(this.juegos);
  },
};
</script>
