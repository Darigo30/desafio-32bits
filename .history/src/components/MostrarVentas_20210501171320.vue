<template>
  <div class="home mt-5 text-center">
    <ul>
      <li v-for="mostrar in datosventa" :key="mostrar.index">
        {{ mostrar.codigo }} {{ mostrar.nombre }} {{ mostrar.precio }}
      </li>
    </ul>
    <div class="row">
        Monto total vendido {{ montoTotal() }}
    </div>
    </div>
    
</template>

<script>
export default {
  name: "MostrarVenta",
  props: {
      datosventa: {
          type: Array,
      },
  }, 
  computed: {
      montoTotal() {
          let result = 0;
          this.datosventa.forEach(element => {
              result += element.precio;
          });
          return result;
      }
  },
};
</script>