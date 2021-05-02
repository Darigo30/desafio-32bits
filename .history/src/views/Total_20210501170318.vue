<template>
  <div>
    <div class="container">
      
      <div class="row">
        <div class="col-12" v-if="mostrarVenta.length > 0">
           <MostrarVentas :datosventa="mostrarVenta" />
        </div>
        <div class="col-12" v-else>
          <h2>No es posible traer los juegos</h2>
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

