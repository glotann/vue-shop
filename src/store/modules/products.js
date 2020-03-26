import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    menus:[],
}

const getters = {
    getMenus(state){
        return state.menus
    }
}
const actions = {
    fetch({commit}){
        
        return axios.get('http://localhost:3000/products')
        .then(({ data })=>{
            commit('setMenu',data)
        })
    }
}

const mutations = {
    setMenu(state,payload){
        state.menus = payload
    }
}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters

}