<template>
  <div class="home mt-5 text-center">
    <h1 class="mb-4">Total</h1>
    <h2>Listado de ventas registradas</h2>
    {{ cantidadjuegos.nombre }} {{ cantidadjuegos.stock }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Total",
   methods: {
     ...mapMutations(["agregarStockmas", "registrarVentas"]),
     llamar(payload){
         this.agregarStockmas(payload);
         this.registrarVentas({codigo: payload.codigo, nombre: payload.nombre, precio: payload.precio});
     }
  },
};
</script>
