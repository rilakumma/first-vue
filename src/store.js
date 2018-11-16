import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        count: 0,
        skills: []
    },
    mutations: {
        setCount (state, val) {
            window.console.log(val)
            state.count = val
        },
        addSkills(state, val){
            state.skills.push({skill: val});
            window.console.log(val, state.skills)
        }
    },
    getters: {
        getCount (state) {
            window.console.log(state.count)
            return state.count
        },
        getSkills(state){
            return state.skills
        }
    }
})