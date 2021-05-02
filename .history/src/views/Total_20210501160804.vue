<template>
  <div class="home mt-5 text-center">
    <h1 class="mb-4">Total</h1>
    <h2>Listado de ventas registradas</h2>
    <ul v-if="mostrarVenta">
      <li v-for="mostrar in mostrarVenta" :key="mostrar.codigo">
        {{ mostrar.codigo }} {{ mostrar.nombre }} {{ mostrar.precio }}
      </li>
    </ul>
    <h3 v-else> No hay ventas registradas</h3>

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
