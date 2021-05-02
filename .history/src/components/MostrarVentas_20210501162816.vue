<template>
  <div class="home mt-5 text-center">
    <ul>
      <li v-for="mostrar in mostrarVenta" :key="mostrar.codigo">
        {{ mostrar.codigo }} {{ mostrar.nombre }} {{ mostrar.precio }}
      </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: "Total",
  props: {
      mostrarventa: {
          type: Array,
      },
  }, 
};
</script>