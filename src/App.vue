<template>
  <div id="app">


    <div class="container-fluid">

      <div class="row">
        <div class="col">
          <Proveedor></Proveedor>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Pep></Pep>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Pedido></Pedido>
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
import Proveedor from './components/Proveedor.vue';
import Pep from './components/Pep.vue';
import Pedido from './components/Pedido.vue';

export default {
  name: 'app',
  components: {
    Proveedor,Pep,Pedido
  },
  data:()=>{
    return{
      
    }
  },
  computed:{
  }
}
</script>

<style>

</style>
