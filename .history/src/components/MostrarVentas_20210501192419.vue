<template>
  <div class="home mt-5 text-center">
    <ul>
      <li v-for="mostrar in datosventa" :key="mostrar.index">
        {{ mostrar.codigo }} {{ mostrar.nombre }} {{ mostrar.precio }}
      </li>
    </ul>
    <div class="row">
      Monto total vendido {{ montoTotal }}
    </div>

    <div class="list-group">
      <div class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </div>
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
          this.$props.datosventa.forEach(element => {
              result += element.precio;
          });
          return result;
      }
  },
};
</script>