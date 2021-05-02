<template>
  <div class="home mt-5 text-center">
    <h1 class="mb-4">Total</h1>
    <h2>Listado de ventas registradas</h2>
     <h2 class="mb-5">Cantidad de Juegos Totales: {{ mostrarVenta }}</h2>


  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Total",
  computed: {
    ...mapGetters(["mostrarVenta"]),
  },
  
};
</script>
