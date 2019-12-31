import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        add(state){
            state.this.count++
        },
        sub(state){
            state.this.count--
        }
    },
    actions:{
        add(context){
            context.commit("add",2)
        },
        sub(context){
            context.commit("add")
        }
    }
})
export default store;