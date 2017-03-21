<template>
    <div class="">


        <div>personal</div>

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
//    ,components: { helloItem }
    ,methods:{
            a:function(msg){
                alert(msg);}
        }

    }

</script>

<style lang="sass">



</style>