<template>
  <div>
    <table class="table">
      <thead>
        <tr class="text-center">
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>

      <tbody v-if="juegosFiltrados && juegosFiltrados.length === 0">
        <tr class="text-center">
          <td colspan="4" class="py-5 display-6">No hay stock de juegos</td>
        </tr>
      </tbody>

      <tbody v-else>
        <tr
          class="text-center"
          v-for="juego in juegosFiltrados"
          :key="juego.codigo"
        >
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TablaJuegos",
  props: {
    productos: {
      type: Array,
    },
  },
  computed: {
    juegosConStock() {
      const prod = this.productos;
      if (!prod) return [];

      const filtered = prod.filter((fil) => fil.stock > 0);
      if (!filtered) return [];

      return filtered;
    },
    juegosFiltrados() {
      const juegos = this.juegosConStock;
      const filtroVuex = this.filtroCodigo;
      if (filtroVuex === "") return juegos;

      const filtered = juegos.filter((fil) => fil.codigo === filtroVuex);
      if (!filtered) return [];
      return filtered;
    },
    ...mapState(["filtroCodigo"]),
  },
};
</script>
