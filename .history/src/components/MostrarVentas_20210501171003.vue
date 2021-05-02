<template>
  <div class="home mt-5 text-center">
    <ul>
      <li v-for="mostrar in datosventa" :key="mostrar.index">
        {{ mostrar.codigo }} {{ mostrar.nombre }} {{ mostrar.precio }}
      </li>
    </ul>
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
};
</script>