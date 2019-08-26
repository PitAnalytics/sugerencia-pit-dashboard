import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level:0,
    proveedores:[],
    proveedor:null,
    /**************************/
    peps:[],
    pep:null,
    /*************************/
    pedidos:[],
    pedido:null
  },
  mutations: {
    setLevel(state,level){
      state.level=level;
    },
    /******************************************************************************/
    setProveedor(state,proveedor){
      state.proveedor=proveedor;
    },
    setPedido(state,pedido){
      state.pedido=pedido;
    },
    setPep(state,pep){
      state.pep=pep;
    },
    /*****************************/
    setProveedores(state,proveedores){
      state.proveedores=proveedores;
    },
    setPeps(state,peps){
      state.peps=peps;
    },
    setPedidos(state,pedidos){
      state.pedidos=pedidos;
    }
  },
  actions: {
    requestProveedores({commit},text=''){
      
      let url;
      if(text===''){
        url=`http://35.196.24.250/sugerencia-pit-api/public/proveedor/search`;
      }
      else{
        url=`http://35.196.24.250/sugerencia-pit-api/public/proveedor/search/${text}`;
      }
      axios.get(url)
      .then(response=>{
        commit('setProveedores',response.data);
      });

    },
    requestPeps({commit},proveedor,text=''){
      let url;
      if(text===''){
        url=`http://35.196.24.250/sugerencia-pit-api/public/pep/search/${proveedor}`;
      }
      else{
        url=`http://35.196.24.250/sugerencia-pit-api/public/pep/search/${proveedor}/${text}`;
      }
      axios.get(url)
      .then(response=>{
        commit('setPeps',response.data);
      });

    },
    requestPedidos({commit},pep,text=''){
      let url;
      if(text===''){
        url=`http://35.196.24.250/sugerencia-pit-api/public/pedido/search/${pep}`;
      }
      else{
        url=`http://35.196.24.250/sugerencia-pit-api/public/pedido/search/${pep}/${text}`;
      }
      axios.get(url)
      .then(response=>{
        commit('setPedidos',response.data);
      });
    }
  }
})
