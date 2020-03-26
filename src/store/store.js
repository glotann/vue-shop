import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products: [],
        product: {}
    },

    getters:{
        products(state){
            return state.products
        }
    },

    actions:{
        fetch({commit}){
        
            return axios.get('http://localhost:3000/products')
            .then(({ data })=>{
                commit('setProducts',data)
            })
        },

        fetchById({commit}, payload)
        {
            return axios.get(`http://localhost:3000/products/${payload}`)
            .then(({data})=>{
                commit('setProduct', data)
            })
        }
    },

    mutations:{
        setProducts(state, payload)
        {
            state.products = payload
        },
        setProduct(state, payload)
        {
            state.product = payload
        }
    }
})