<template>
  <div class="example">{{msg}}</div>
</template>
<script>


  export default {
    data () {

      return {
        msg: '1111111111111!'
        ,t:"t1"
        ,tt:{
          ttt:'111111111111111',rrr:2
        }
      }
    }
  ,methods:{
      a:function(msg){
        alert(msg);}
    }

  }
</script>

<style>
.example {
  color: green;
}
</style>