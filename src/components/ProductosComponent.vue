<template>
    <div id="ProductosComponent">
        <h1>Productos Component</h1>

        <div class="productos" v-for="chaqueta in unosproductos.chaquetas" v-bind:key="chaqueta.id">
            <b-card
                v-bind:title="chaqueta.nombre"
                v-bind:img-src="chaqueta.imagen"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    Descripción: {{ chaqueta.descripcion }}
                </b-card-text>
                <b-card-text>
                    Costo: {{ chaqueta.costo }}
                </b-card-text>

                <b-button href="#" variant="primary" v-on:click="comprar(chaqueta.id)">Comprar</b-button>
            </b-card>
        </div>

        <hr>
        <!-- <p>{{  unosproductos }}</p> -->
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default{
    name:'ProductosComponent',
    props:{},
    components:{},
    data:function(){
        return{

        }
    },
    methods:{
        ...mapActions('productos', ['consumirDatos', 'registrarCompra']),
        comprar: function(unid){

            let elindice = this.unosproductos.chaquetas.findIndex(chaqueta => chaqueta.id == unid );
            let lacompra = {
                id: unid,
                indice: elindice,
                nombre: this.unosproductos.chaquetas[elindice].nombre,
                costo: this.unosproductos.chaquetas[elindice].costo
            };
            this.registrarCompra(lacompra);
        },
    },
    computed:{
        ...mapState('productos', ['unosproductos']),
    },
    watch:{},
    created(){
        this.consumirDatos();
    },
    mounted(){

    },

}
</script>

<style scoped>
#ProductosComponent{
    background-color:blue;
    color: white;
}

.productos{
    display: inline-block;
    margin:1%;
}
</style>