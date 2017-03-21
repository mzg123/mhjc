<template>
    <div class="yg_app flex_con flex_dir_c" >

         <div class="flex_con flex_p_100">
             <router-view  class="main_content flex_p_100">

             </router-view>
         </div>

        <div class="footer flex_con flex_dir_r flex_s_c flex_v_c" >

                <div class="flex_con flex_p_100 flex_dir_c flex_v_c" >
                    <router-link :to="homePage"   >
                    <div class="align_c home" ></div>
                    <div class="align_c">首页</div>
                    </router-link>
                </div>


                <div class="flex_p_100 flex_dir_c flex_v_c flex_con" >
                    <router-link :to="investPage">
                    <div class="align_c invest"  ></div>
                    <div class="align_c">产品</div>
                    </router-link>
                </div>


                <div class="flex_p_100 flex_dir_c flex_v_c flex_con">
                    <router-link :to="personalPage" >
                    <div class="align_c personal"></div>
                    <div class="align_c" >我的</div>
                    </router-link>
                </div>

        </div>
    </div>

</template>
<script type='es6'>

    import { mapState,mapGetters } from 'vuex';


    export default {
        //data () {
        //    return {
        //        currentPage: this.$store.state.home.currentPage
        //
        //    }
        //},
        beforeRouteEnter (to, from, next) {
alert()
            },
     computed:
     {
     ...mapState({
     currentPage:state => state.home.currentPage
     ,homePage:state => state.home.homePage
     ,investPage:state => state.home.investPage
     ,personalPage:state => state.home.personalPage
     })
        //...mapGetters([
        //        'doneTodos',
        //    ])
        }
//    ,components: { helloItem }
    ,methods:{
            goto:function(evt,index){
              this.$store.commit('footerClick',{index:index});
               //this.$store.dispatch('modifyaction');
            }
        }

    }

</script>

<style lang="sass">
    @import '../../common/scss/main.scss';

    .yg_app,.main_content{
        height:100%;
        overflow-y: auto
    }
    .footer{
        /*height: pxToRem(30px);*/
        /*line-height: pxToRem(30px);*/
        font-size: pxToRem(22px);
        .home{
         @include background(pxToRem(40px),pxToRem(40px),'../../dist/image/tab_home_normal.png');

         }
        .home_press{
        @include background(pxToRem(40px),pxToRem(40px),'../../dist/image/tab_home_press.png');
        }
        .invest{
          @include background(pxToRem(40px),pxToRem(40px),'../../dist/image/tab_invest_normal.png');
        }
        .personal{
        @include background(pxToRem(40px),pxToRem(40px),'../../dist/image/tab_personal_normal.png');
        }
        .router-link-active .home{  @include background(pxToRem(40px),pxToRem(40px),'../../dist/image/tab_home_press.png');
        }
        .router-link-active .invest{  @include background(pxToRem(40px),pxToRem(40px),'../../dist/image/tab_invest_press.png');
        }
        .router-link-active .personal{  @include background(pxToRem(40px),pxToRem(40px),'../../dist/image/tab_personal_press.png');
        }
    }

</style>