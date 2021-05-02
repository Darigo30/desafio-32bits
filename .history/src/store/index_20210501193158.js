import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "0001",
        imagen: "https://as.com/meristation/imagenes/2019/03/24/guias/1553427235_308602_1553530402_sumario_normal.jpg",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        imagen: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/global_assets/common/featured_images/fifa-21-grid-tile-generic-16x9.jpg.adapt.crop191x100.628p.jpg",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25.000,
        color: "blue",
        destacado: true,
      },
      {
        codigo: "0003",
        imagen: "https://i.blogs.es/fe973b/gearsofwar401/1366_2000.jpg",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15.000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        imagen: "https://www.nintenderos.com/wp-content/uploads/2019/04/Mario-Tennis-Aces-e1556194221149.jpg",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35.000,
        color: "yellow",
        destacado: true,
      },
      {
        codigo: "0005",
        imagen: "https://i.blogs.es/2cdce4/thumb-1920-641193/1366_2000.jpeg",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10.000,
        color: "blue",
        destacado: true,
      },
      {
        codigo: "0006",
        imagen: "https://compass-ssl.xbox.com/assets/6a/31/6a31393d-b0cc-4833-8e82-fd3a2c6b6e19.jpg?n=FH4_GLP-Page-Hero-1084_1920x1080_02.jpg",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20.000,
        color: "red",
        destacado: true,
      },
    ],
    registroVentas: [],
    filtroCodigo: "",
  },
  getters: {
    cantidadJuegos(state) {
      const juegos = state.juegos;
      if (!juegos) return 0;
      const cantidad = juegos.length;
      return cantidad;
    },
    mostrarVenta(state) {
      const re = state.registroVentas;
      if (!re) return 0;
      return re;
    }
  },
  mutations: {
    añadirPalabra(state, payload) {
      state.filtroCodigo = payload;
    },
    agregarStockmas: (state, payload) => {
      setTimeout(() =>{
        state.juegos.map((p)=>{
          if(p.codigo === payload.codigo)
          p.stock--
        })
      },2000)
    },
    registrarVentas: (state, payload) => {
      setTimeout(() =>{
        state.registroVentas.push(payload);
        alert("Venta Procesada");
      },1000)
    },

  },
  actions: {},
});
