<template>
    <div id="ChaquetasView">
        <h1>Chaquetas View</h1>

        <b-container class="bv-example-row">
            <b-row>
                <b-col md="9" class="celdas"><ProductosComponent></ProductosComponent></b-col>
                <b-col md="3" class="celdas"><TotalesComponent></TotalesComponent></b-col>
            </b-row>
        </b-container>


        
        
    </div>
</template>

<script>
import ProductosComponent from '@/components/ProductosComponent.vue';
import TotalesComponent from '@/components/TotalesComponent.vue';
export default{
    name:'ChaquetasView',
    props:{},
    components:{
        ProductosComponent,
        TotalesComponent,
    },
    data:function(){
        return{

        }
    },
    methods:{
    },
    computed:{},
    watch:{},
    created(){

    },
    mounted(){

    },

}
</script>

<style scoped>
#ChaquetasView{
    background-color: chocolate;
    color: white;
}

.celdas{
    background-color: darksalmon;
    border: 2px solid brown;
}
</style>