<template>
  <div class="proveedor">
    <div class="card mt-4" v-bind:hidden="hidden">
      <div class="card-body">
        <h5 class="card-title">Peps</h5>
        <br>
        <div class="row">
          <div class="col-lg-10">
            <input type="text" v-model="text" @keyup="textSearch(text)">
          </div>
          <div class="col-lg-2">
            <button class="btn btn-success" @click="setLevel(0)">PROVEEDORES</button>
          </div>
        </div>
        <br>
        <div class="row">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Subtotal 2018</th>
                <th>Subtotal 2019</th>
                <th>Pedidos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in peps" v-bind:key="index">
                <td>{{item.codigoPep}}</td>
                <td>{{item.descripcionPep}}</td>
                <td>{{item.subtotal2018}}</td>
                <td>{{item.subtotal2019}}</td>
                <td><a class="btn btn-info" @click="loadPep(item.codigoPep)">DRILLDOWN</a></td>
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
  name: 'Pep',
  data:()=>{
    return{
      text : ''
    }
  },
  computed:{
    ...Vuex.mapState(['peps','pep','proveedor','level','pedidos']),
    conteo(){
      let conteo=0;
      this.proveedores.forEach(item => {
        conteo+=item.conteoPep;
      });
      return conteo;
    },
    total2018(){
      let total=0;
      this.peps.forEach(item => {
        total+=item.subtotal2018;
      });
      return total;
    },
    total2019(){
      let total=0;
      this.peps.forEach(item => {
        total+=item.subtotal2019;
      });
      return total;
    },
    hidden(){
      let hidden;
      if(this.level===1){
        hidden=false;
      }
      else{
        hidden=true;
      }
      return hidden;
    }
  },
  mounted(){

  },
  methods:{
    ...Vuex.mapMutations(['setPeps','setPep','setPedidos','setLevel']),
    ...Vuex.mapActions(['requestPeps','requestPedidos']),
    loadPep(pep){
      this.setLevel(2);
      this.setPep(pep);
      this.requestPedidos({pep:pep,text:''});
    },
    textSearch(text){
      this.requestPeps({proveedor:this.proveedor,text:text});
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
  width: 100px;
}
</style>
