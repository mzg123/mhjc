<template>
        <roller>home</roller>
</template>
<script>
        import roller from '../common/roller/roller.vue';
    import { mapState,mapGetters } from 'vuex';

    export default {
    computed: {

            }
    ,components: { roller }
    ,methods:{
            a:function(msg){
                alert(msg);}
        }

    }

</script>

<style lang="sass">

.aaaaaaaaaaaaaaaaaaa{
    color:#123123;
}

</style>