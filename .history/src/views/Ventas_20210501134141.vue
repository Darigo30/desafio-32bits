<template>
  <div>
    <div class="container">
      
      <div class="row">
        <div class="col-12" v-if="juegos">
           <Leyenda :leyenda="juegos" />
        </div>
        <div class="col-12" v-else>
          <h2>No es posible traer los juegos</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Leyenda from "@/components/Leyenda.vue";
import { mapState } from "vuex";
export default {

  components: {
    Leyenda,
  },

  computed: {
    ...mapState(["juegos"]),
  },
};
</script>
