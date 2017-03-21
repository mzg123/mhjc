
import Vue from 'vue'
import VueRouter from 'vue-router';
import hello from './component/helloword/hello.vue'
import main from './component/helloword/main.vue'
import store from './vuex/store.js'


Vue.use(VueRouter);

// 定义路由组件
import routerhello from './component/helloword/routerhello.vue'
import routerhello2 from './component/helloword/routerhello2.vue'

//异步加载 方式一
//const routerhello = resolve => {
//    // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//    // （代码分块）
//    require.ensure(['./component/helloword/routerhello.vue'], () => {
//        resolve(require('./component/helloword/routerhello.vue'))
//    })
//}
//异步加载 方式二
//const Foo = resolve => require(['./component/helloword/routerhello.vue'], resolve)

//const Worldcloud = require('components/cloud.vue');
//const Building = require('components/building.vue');
//const Canteen = require('components/canteen.vue');
//const Selfstudy = require('components/selfstudy.vue');
//const Difficult = require('components/difficult.vue');
//const Interest = require('components/interest.vue');
//const Bedroom = require('components/bedroom.vue');
//const Graduate = require('components/graduate.vue');
//const Getup = require('components/getup.vue');
//const Gotobed = require('components/gotobed.vue');
//const Eat = require('components/eat.vue');
//const Amuse = require('components/amuse.vue');
//const Single = require('components/single.vue');
//const Chat = require('components/chat.vue');
//const Onlyme = require('components/onlyme.vue');

// 定义路由
const routes = [
    { path: '/' },
    { path: '/r', component: routerhello }
    ,{ path: '/rr', component: routerhello2 }
];

// 创建router实例
const router = new VueRouter({
    mode: 'history',//history
    routes
});



/* eslint-disable no-new */
new Vue({
    el:'#hello',
    data:{
        mzg:"ddd"
    },
    store,
    router,

   // components: {
   //     'hello': hello
   // },
   //template: '<hello></hello>'

    render: (createElement) => createElement(main)

})