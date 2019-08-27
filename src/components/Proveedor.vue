<template>
  <div class="proveedor">
    <div class="card mt-4" v-bind:hidden="hidden">
      <div class="card-body">
        <h5 class="card-title">Proveedores</h5>
        <br>
        <div class="row">
          <div class="col">
            <input type="text" v-model="text" @keyup="textSearch(text)">
          </div>
        </div>
        <br>        
        <div class="row">
          <table class="table table-bordered">
            <thead>
              <th>Numero</th>
              <th>Nomnbre</th>
              <th>Subtotal 2018</th>
              <th>Subtotal 2019</th>
              <th>Peps</th>
            </thead>
            <tbody>
              <tr v-for="(item,index) in proveedores" v-bind:key="index">
                <td>{{item.numeroProveedor}}</td>
                <td>{{item.nombreProveedor}}</td>
                <td>{{item.subtotal2018}}</td>
                <td>{{item.subtotal2019}}</td>
                <td><a class="btn btn-info" @click="loadProveedor(item.numeroProveedor)">DRILLDOWN</a><td/>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>TOTALES</th>
                <th>{{total2018}}</th>
                <th>{{total2019}}</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import {mapActions} from 'vuex';
export default {
  name: 'Proveedor',
  data:()=>{
    return{
      text:''
    }
  },
  computed:{
    ...Vuex.mapState(['proveedores','proveedor','level']),
    conteo(){
      let conteo=0;
      this.proveedores.forEach(item => {
        conteo+=item.conteoPep;
      });
      return conteo;
    },
    total2018(){
      let total=0;
      this.proveedores.forEach(item => {
        total+=item.subtotal2018;
      });
      return total;
    },
    total2019(){
      let total=0;
      this.proveedores.forEach(item => {
        total+=item.subtotal2019;
      });
      return total;
    },
    hidden(){
      let hidden;
      if(this.level===0){
        hidden=false;
      }
      else{
        hidden=true;
      }
      return hidden;
    }
  },
  mounted(){
    this.requestProveedores();
  },
  methods:{
    ...Vuex.mapMutations(['setProveedores','setProveedor','setPeps','setLevel']),
    ...Vuex.mapActions(['requestProveedores','requestPeps']),
    loadProveedor(proveedor){
      this.setProveedor(proveedor);
      this.setLevel(1);
      this.requestPeps({proveedor:proveedor,text:''});
    },
    textSearch(text){
      this.requestProveedores(text);
    }
  }
}
</script>
<style scoped>
input{
  border-radius:0px;
}
.btn{
  border-radius:0px;
  width:120px;
}
</style>
