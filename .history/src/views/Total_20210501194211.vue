<template>
  <div>
    <div class="container">
       <div class="col-12 text-center">
            <h1 class="display-4 my-5">Total de Ventas</h1>
        </div>
      <div class="row">
        <div class="col-12" v-if="mostrarVenta.length > 0">
           <MostrarVentas :datosventa="mostrarVenta" />
        </div>
        <div class="col-12" v-else>
          <h2 class="text-center">No hay ventas registradas</h2>
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

