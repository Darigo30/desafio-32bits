<template>
  <div class="home mt-5 text-center">
    <h1 class="mb-4">Ventas</h1>
    <h2>Cantidad de Juegos con stock mayor a cero {{ juegosConStock }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Ventas",
  computed: {
    ...mapState(["juegos"]),
  },
};
</script>
