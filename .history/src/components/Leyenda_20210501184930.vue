<template>
  <div class="home mt-5 text-center">
    



    <ul>
        <li v-for="cantidadjuegos in juegosConStock" :key="cantidadjuegos.codigo">
          <img v-bind:imagen="imagen" alt="">
             {{ cantidadjuegos.nombre }} {{ cantidadjuegos.stock }}
             <button type="button" class= "btn btn-primary" @click="llamar(cantidadjuegos)">Vender</button>
        </li>
    </ul>
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
