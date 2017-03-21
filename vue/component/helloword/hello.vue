<template>
  <div class="example">{{msg}}{{this.$store.state.a.mzg}}{{doneTodos}} <helloItem :foo="msg" :t="t" :tt="tt" @alert="a"></helloItem>
      <router-link to="/">Home</router-link>
      <router-link to="/r">r</router-link>
      <router-link to="/rr">rr</router-link>
      <transition name="slide-right">

      <router-view class="main_content"></router-view>
      </transition>
  </div>

</template>
<script>
  import helloItem from './helloItem.vue';
  import { mapState,mapGetters } from 'vuex';

  export default {
    data () {
      return {
        msg: 'Hello world!'
        ,t:"t1"
        ,tt:{
          ttt:'90909090',rrr:2
        }
      }
    }
      ,computed: {

      ...mapGetters([
              'doneTodos',
          ])
      }
  ,components: { helloItem }
  ,methods:{
      a:function(msg){
        alert(msg);}
    }

  }

</script>

<style lang="sass">
    @import '../../common/scss/common.scss';
.example {
  color: red;
}

</style>