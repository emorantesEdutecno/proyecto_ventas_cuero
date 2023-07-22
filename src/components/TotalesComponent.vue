<template>
    <div id="TotalesComponent">
        <h1>Totales Component</h1>
        <!-- {{  compra }} -->
        <ul v-for="item in compras" v-bind:key="item.id">
            <li>{{item.nombre}} - {{  item.costo }} <b-button variant="danger" v-on:click="eliminar(item.id)">E</b-button> </li>
        </ul>

        <p class="pagar">Total a Pagar: ${{  calcularTotal }}</p>
    </div>
</template>

<script>
import { mapState , mapActions } from 'vuex';
export default{
    name:'TotalesComponent',
    props:{},
    components:{},
    data:function(){
        return{

        }
    },
    methods:{
        ...mapActions('productos', ['eliminarCompra']),
        eliminar:function(unid){
            let elindice = this.compras.findIndex(elemento=> elemento.id == unid);
            let respuesta = confirm('¿Esta seguro que desea eliminar el producto de la compra?');
            if(respuesta == true){
                this.eliminarCompra(elindice);
            }
            
        },
    },
    computed:{
        ...mapState('productos', ['compras']),
        calcularTotal:function(){
            // console.log('this.compra', this.compra);
            let acumulador=0;
            for(let i=0; i < this.compras.length; i++){
                // console.log(this.compra[i].costo);
                // console.log(typeof this.compra[i].costo);
                acumulador = acumulador + this.compras[i].costo;
            }
            return acumulador;
        },
    },
    watch:{},
    created(){

    },
    mounted(){

    },

}
</script>

<style scoped>
#TotalesComponent{
    background-color:green;
    color: white;
}
.pagar{
    font-size: larger;
    color:violet;
    font-weight: bolder;
}
</style>