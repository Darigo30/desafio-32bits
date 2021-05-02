<template>
  <div class="home text-center">
    <div class="card border-primary mb-3" v-for="mostrar in datosventa" :key="mostrar.index">
      <div class="card-header">{{ mostrar.codigo }}</div>
      <div class="card-body text-primary">
        <h5 class="card-title">{{ mostrar.nombre }}</h5>
        <p class="card-text">{{ mostrar.precio }}</p>
      </div>
    </div>
    <div class="row">
     <h2 class="mt-4"> Monto total vendido: {{ montoTotal }} </h2>
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