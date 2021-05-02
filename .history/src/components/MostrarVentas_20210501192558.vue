<template>
  <div class="home mt-5 text-center">
   
    <div class="row">
      Monto total vendido {{ montoTotal }}
    </div>

    <div class="list-group" v-for="mostrar in datosventa" :key="mostrar.index">
      <div class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1"> {{ mostrar.codigo }}</h5>
        </div>
        <p class="mb-1">{{ mostrar.nombre }}</p>
        <small>{{ mostrar.precio }}</small>
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