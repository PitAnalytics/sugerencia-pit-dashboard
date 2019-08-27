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
      console.log(text);
      let url;
      if(text===''){
        url=`http://35.196.24.250/sugerencia-pit-api/public/proveedor/search`;
      }
      else{
        url=`http://35.196.24.250/sugerencia-pit-api/public/proveedor/search/${text}`;
      }
      console.log(url);
      axios.get(url)
      .then(response=>{
        commit('setProveedores',response.data);
      });

    },
    requestPeps({commit},params){
      console.log(params);
      let url;
      if(params.text===''){
        url=`http://35.196.24.250/sugerencia-pit-api/public/pep/search/${params.proveedor}`;
      }
      else{
        url=`http://35.196.24.250/sugerencia-pit-api/public/pep/search/${params.proveedor}/${params.text}`;
      }
      axios.get(url)
      .then(response=>{
        commit('setPeps',response.data);
      });

    },
    requestPedidos({commit},params){
      console.log(params);
      let url;
      if(params.text===''){
        url=`http://35.196.24.250/sugerencia-pit-api/public/pedido/search/${params.pep}/${params.proveedor}`;
      }
      else{
        url=`http://35.196.24.250/sugerencia-pit-api/public/pedido/search/${params.pep}/${params.proveedor}/${params.text}`;
      }
      axios.get(url)
      .then(response=>{
        commit('setPedidos',response.data);
      });
    }
  }
})
