<template>
  <div class="home mt-5 text-center">
    <!-- <ul>
        <li v-for="cantidadjuegos in juegosConStock" :key="cantidadjuegos.codigo">
          <img v-bind:src="cantidadjuegos.imagen" alt="">
             {{ cantidadjuegos.nombre }} {{ cantidadjuegos.stock }}
             <button type="button" class= "btn btn-primary" @click="llamar(cantidadjuegos)">Vender</button>
        </li>
    </ul> -->

    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
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
