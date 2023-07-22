import axios from 'axios';
const productos = {
    namespaced: true,
    state:{
        unosproductos:{},
        compras:[],
    },
    getters:{},
    mutations:{
        CONSUMIR_DATOS:(state, data)=>{
            state.unosproductos = data;
        },
        REGISTRAR_COMPRA:(state, unosdatos)=>{
            state.compras.push(unosdatos);
        },
        ELIMINAR_COMPRA:(state, elid)=>{
            state.compras.splice(elid,1);
        }
    },
    actions:{
        consumirDatos:(context)=>{
            let informacion = 'algo';
            let url='productoscuero.json';
            axios.get(url)
                .then(respuesta=>{
                    console.log(respuesta);
                    informacion = respuesta.data;
                    context.commit('CONSUMIR_DATOS', informacion);
                })
                .catch(err=>{
                    console.log(err);
                });

            
        },
        registrarCompra:(context, objetoDatos)=>{
            context.commit('REGISTRAR_COMPRA', objetoDatos);
        },
        eliminarCompra:(context, unindice)=>{
            context.commit('ELIMINAR_COMPRA', unindice);
        }
    },
    modules:{},
};

export default productos;