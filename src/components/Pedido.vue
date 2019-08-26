<template>
  <div class="proveedor">
    <div class="card my-4" v-bind:hidden="hidden">

      <div class="card-body">

        <h5 class="card-title">Pedidos</h5>
        <br>
        <div class="row">
          <div class="col">
            <input type="text" v-model="text">
          </div>
        </div>
        <br>
        <div class="row">
          <table class="table table-bordered">
            <thead>
              <th>NUmero Pedido</th>
              <th>Concepto</th>
              <th>Subtotal 2018</th>
              <th>Subtotal 2019</th>
            </thead>
            <tbody>
              <tr v-for="(item,index) in pedidos" v-bind:key="index">
                <td>{{item.numeroPedido}}</td>                
                <td>{{item.conceptoPedido}}</td>                
                <td>{{item.subtotal2018}}</td>                
                <td>{{item.subtotal2019}}</td>                
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th></th>
                <th>TOTALES</th>
                <th>{{total2018}}</th>
                <th>{{total2019}}</th>
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
  name: 'Pedido',
  data:()=>{
    return{
      text:''
    }
  },
  computed:{
    ...Vuex.mapState(['pedidos','pep','level']),
    conteo(){
      let conteo=0;
      this.pedidos.forEach(item => {
        conteo+=item.conteoPep;
      });
      return conteo;
    },
    total2018(){
      let total=0;
      this.pedidos.forEach(item => {
        total+=item.subtotal2018;
      });
      return total;
    },
    total2019(){
      let total=0;
      this.pedidos.forEach(item => {
        total+=item.subtotal2019;
      });
      return total;
    },
    hidden(){
      let hidden;
      if(this.level===2){
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
    ...Vuex.mapMutations(['setPedidos']),
    ...Vuex.mapActions(['requestPedidos'])
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
