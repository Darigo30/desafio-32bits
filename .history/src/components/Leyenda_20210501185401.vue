<template>
  <div class="home mt-5 text-center">
   
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Leyenda",
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
  methods: {
     ...mapMutations(["agregarStockmas", "registrarVentas"]),
     llamar(payload){
         this.agregarStockmas(payload);
         this.registrarVentas({codigo: payload.codigo, nombre: payload.nombre, precio: payload.precio});
     }
  },
};
</script>
