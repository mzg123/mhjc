import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const moduleA = {
    state: {
        mzg:"mzg"
    },
    mutations: {
        modify:function(state){
            state.mzg=="王小明"?state.mzg="张三丰":state.mzg="王小明";
        }
    },
    actions: {
        modifyaction:function(ctx){
            ctx.commit('modify')
        }
    },
    getters: {
        doneTodos: state => {
            return "3";
        }
    }
}

const home = {
    state: {
        currentPage:"home",
        homePage:"home",
        investPage:"invest",
        personalPage:"personal"
        ,banners:{
            currentBannerIndex:0
            ,data:[
                {
                    url:'b1'
                    ,width:'750px'
                    ,height:'338px'
                }
                ,{
                    url:'b2'
                    ,width:'750px'
                    ,height:'338px'
                }
                ,{
                    url:'b3'
                    ,width:'750px'
                    ,height:'338px'
                }
                ,{
                    url:'b3'
                    ,width:'750px'
                    ,height:'338px'
                }
                ,{
                    url:'b3'
                    ,width:'750px'
                    ,height:'338px'
                }
            ]
        }
    },
    mutations: {
        bannerAuto:function(state,obj){
            switch (obj.index){
                case 0:
                    state.banners.currentBannerIndex=0;
                    break;
                case 2:
                    state.banners.currentBannerIndex=2;
                    break;
                case 1:
                    state.banners.currentBannerIndex=1;
                    break;
                case 3:
                    state.banners.currentBannerIndex=3;
                    break;
                case 4:
                    state.banners.currentBannerIndex=4;
                    break;
                default:
                    state.banners.currentBannerIndex=0;
                    break;
            }
        }
        ,footerClick:function(state,obj){
              switch (obj.index){
                  case '1':
                  state.currentPage="home";
                  break;
                  case '2':
                      state.currentPage="invest";
                      break;
                  case '3':
                      state.currentPage="personal";
                      break;
                  default:
                      break;
              }
        }
    },
    actions: {
    },
    getters: {
    }
}


const store = new Vuex.Store({
    modules: {
        a: moduleA,
        home: home
    }
})

export default store;
//const app = new Vue({
//    el: '#app',
//    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
//    store,
//    components: { Counter },
//    template: `
//    <div class="app">
//      <counter></counter>
//    </div>
//  `
//})

//if (module.hot) {
//    // 使 actions 和 mutations 成为可热重载模块
//    module.hot.accept(['./mutations', './modules/a'], () => {
//        // 获取更新后的模块
//        // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
//        const newMutations = require('./mutations').default
//        const newModuleA = require('./modules/a').default
//        // 加载新模块
//        store.hotUpdate({
//            mutations: newMutations,
//            modules: {
//                a: newModuleA
//            }
//        })
//    })
//}