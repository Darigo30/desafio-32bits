<template>
  <div>
    <div class="container">
      <div class="col-12 text-center">
        <h1 class="display-4 my-5">Total de Juegos Vendidos</h1>
        </div>
        <div class="row">
        <div class="col-12" v-if="mostrarVenta">
           <MostrarVentas :mostrarVenta ="mostrarVenta" />
        </div>
        <div class="col-12" v-else>
          <h2>No es posible mostrar el total</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MostrarVentas from "@/components/MostrarVentas.vue";
import { mapGetters } from "vuex";
export default {

  components: {
    MostrarVentas,
  },

  computed: {
    ...mapGetters(["mostrarVenta"]),
  },
};
</script>

