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
export default {
  name: "Ventas",
  props: {
      leyenda: {
          type: Array,
      },
  },
  computed: {
    juegosConStock() {
      const prod = this.leyenda;
      const filtered = prod.filter((fil) => fil.stock > 0);
      if (!filtered) return [];

      return filtered;
    },
  },
};
</script>
