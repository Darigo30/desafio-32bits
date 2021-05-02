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
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: true,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: true,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: true,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
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
