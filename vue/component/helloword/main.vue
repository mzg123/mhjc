<template>
  <div class="example">
      <router-link to="/">Home</router-link>
      <router-link to="/r">r</router-link>
      <router-link to="/rr">rr</router-link>


      <router-view class="main_content"></router-view>

  </div>

</template>
<script>

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