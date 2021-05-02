<template>
  <div class="home mt-5 text-center">
    <ul v-if="mostrarVenta">
      <li v-for="mostrar in mostrarVenta" :key="mostrar.codigo">
        {{ mostrar.codigo }} {{ mostrar.nombre }} {{ mostrar.precio }}
      </li>
    </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Total",
  props: {
      total: {
          type: Array,
      },
  },
  computed: {
    ...mapGetters(["mostrarVenta"]),
  },
  
};
</script>