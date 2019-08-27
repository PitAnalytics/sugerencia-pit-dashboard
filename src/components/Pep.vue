<template>
  <div class="proveedor">
    <div class="card mt-4 border-info" v-bind:hidden="hidden">
      <div class="card-body text-info">
        <h5 class="card-title">Peps</h5>
        <br>
        <div class="row">
          <div class="col-lg-10">
            <input class="form-control" type="text" v-model="text" @keyup="textSearch(text)">
          </div>
          <div class="col-lg-2 align-self-end">
            <button class="btn btn-success back" @click="setLevel(0)"><i class="fa fa-caret-left mr-4"><span>BACK</span></i></button>
          </div>
        </div>
        <br>
        <br>
        <div class="row">
          <div class="col">
            <table class="table">

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
                <tr v-for="(item,index) in pepTable" v-bind:key="index">
                  <td class="cell-1">{{item.codigoPep}}</td>
                  <td class="cell-2">{{item.descripcionPep}}</td>
                  <td class="cell-3">{{item.subtotal2018}}</td>
                  <td class="cell-4">{{item.subtotal2019}}</td>
                  <td class="cell-5"><a class="btn btn-info" @click="loadPep(item.codigoPep)"><span>DRILLDOWN</span><i class="fa fa-caret-down ml-2"></i></a></td>
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

      function stdToEng (num){
        let float = parseFloat(num);
        let number = float.toFixed(2);
        let components=number.split(".",2);
        let int = components[0];
        let dec = components[1];
        let result = []
        for (let i = 0; i < int.length; i++) {
          const j = (int.length-i)-1;
          const k = i+1;
          const c = int.substr(j,1);
          if((k%3===0)&&(j!==0)&&(int.substr(0,1)!=="-")){
            result.push(c);
            result.push(",");
          }
          else{
            result.push(c);
          }
        }
        let numEng='';
        for (let i = 0; i < result.length; i++) {
          const j=(result.length-i)-1;
          const c=result[j];
          numEng+=c;
        }
        numEng+=".";
        numEng+=dec;
        return numEng;
      }

      let total=0;
      this.peps.forEach(item => {
        total+=item.subtotal2018;
      });
      return `$${stdToEng(total)}`;
    },
    total2019(){

      function stdToEng (num){
        let float = parseFloat(num);
        let number = float.toFixed(2);
        let components=number.split(".",2);
        let int = components[0];
        let dec = components[1];
        let result = []
        for (let i = 0; i < int.length; i++) {
          const j = (int.length-i)-1;
          const k = i+1;
          const c = int.substr(j,1);
          if((k%3===0)&&(j!==0)&&(int.substr(0,1)!=="-")){
            result.push(c);
            result.push(",");
          }
          else{
            result.push(c);
          }
        }
        let numEng='';
        for (let i = 0; i < result.length; i++) {
          const j=(result.length-i)-1;
          const c=result[j];
          numEng+=c;
        }
        numEng+=".";
        numEng+=dec;
        return numEng;
      }
      let total=0;
      this.peps.forEach(item => {
        total+=item.subtotal2019;
      });
      return `$${stdToEng(total)}`;
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
    },
    pepTable(){

      function stdToEng (num){

        let float = parseFloat(num);
        let number = float.toFixed(2);
        let components=number.split(".",2);
        let int = components[0];
        let dec = components[1];
        let result = []

        for (let i = 0; i < int.length; i++) {
          const j = (int.length-i)-1;
          const k = i+1;
          const c = int.substr(j,1);
          if((k%3===0)&&(j!==0)&&(int.substr(0,1)!=="-")){
            result.push(c);
            result.push(",");
          }
          else{
            result.push(c);
          }
        }

        let numEng='';

        for (let i = 0; i < result.length; i++) {
          const j=(result.length-i)-1;
          const c=result[j];
          numEng+=c;
        }

        numEng+=".";
        numEng+=dec;

        return numEng;

      }

      let table=[];
      this.peps.forEach(item=>{

        const line={
          codigoPep:item.codigoPep,
          descripcionPep:item.descripcionPep,
          subtotal2018:`$${stdToEng(item.subtotal2018)}`,
          subtotal2019:`$${stdToEng(item.subtotal2019)}`
        }

        table.push(line);

      });

      return table;

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
      this.requestPedidos({pep:pep,text:'',proveedor:this.proveedor});
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
  width: 250px;
}
.btn{
  border-radius:0px;
}
.cell-1{
  width: 250px;
}
.cell-2{
  width: 750px;
}
.cell-3{
  width: 250px;
}
.cell-4{
  width: 250px;
}
.cell-5{
  color: aliceblue;
}
.btn-info{
  width:150px;
  color:aliceblue;
}
.btn-success{
  width:150px;
  color:aliceblue;
}
i{
  font-size: 15px;
}
.card{
  border-radius:0px;
}
</style>
