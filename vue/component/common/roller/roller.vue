<template>
    <div class="roller " >
        <div style="position: relative;width:100%;overflow:hidden;">
            <div class="con" style="position: relative":style="{  'left':-+currentBannerIndex*100 + '%','width':bannersCount*100 + '%'}"  >
                <div  v-for="(item,i) in banners" key="item.url"  :class="[i==currentBannerIndex?'currentBanner':'Banner',item.url]" :style="{'width':(100/bannersCount).toFixed(2)+'%'}">{{i}}</div>
            </div>
            <div class="tip flex_con flex_dir_r flex_s_c flex_p_100">
                <div class="align_c" v-for="(item,i) in banners" :class="[i==currentBannerIndex?'currentTip':'']">{{i}}</div>
            </div>
        </div>

    </div>

</template>
<script type='es6'>

    import { mapState,mapGetters } from 'vuex';


    export default {
    mounted(){
    var last=0,count=this.banners.length-1,next=0,auto=this.auto,currentBannerIndex=this.currentBannerIndex;
           clearInterval(window['interval']);
           window['interval']=setInterval(function(){

            if(currentBannerIndex<count&&last<=currentBannerIndex){
               if(last==currentBannerIndex){next=currentBannerIndex++}
               else if(last<currentBannerIndex){next=currentBannerIndex++;last++}
            }else if(currentBannerIndex==count){
              last=currentBannerIndex;next=currentBannerIndex--;
            }else{
                if(currentBannerIndex>0){last=currentBannerIndex;next=currentBannerIndex--;currentBannerIndex==0&&(last=0)}
            }

           auto(next)
          },2000)
    },
     computed:
     {
     ...mapState({
     banners:state => state.home.banners.data
     ,bannersCount:state => state.home.banners.data.length
     ,currentBannerIndex:state=>state.home.banners.currentBannerIndex
     })
        //...mapGetters([
        //        'doneTodos',
        //    ])
        }
//    ,components: { helloItem }
    ,methods:{
            auto:function(index){

              this.$store.commit('bannerAuto',{index:index});
               //this.$store.dispatch('modifyaction');
            }
        }

    }

</script>

<style lang="sass">
    @import '../../../common/scss/base.scss';
    .b1{
      @include background(pxToRem(750px),pxToRem(338px),'../../../dist/image/banner1.png');
      }
    .b2{
    @include background(pxToRem(750px),pxToRem(338px),'../../../dist/image/banner.png');
    }
    .b3{
    @include background(pxToRem(750px),pxToRem(338px),'../../../dist/image/banner1.png');
    }
.roller{
     position: relative;
    .con{
        transition: left 1s;
    }

    .currentBanner{
        display: inline-block;
    }
    .Banner{
        display: inline-block;
    }
    .tip{
        position: absolute;

        bottom:0.2rem;
        width: 100%;
        div{
            width:0.3rem;
            height:0.3rem;
            line-height:0.3rem;
            margin-left: 0.1rem;
            background: red;
            @include border-radius(100%,100%,100%,100%);
            &.currentTip{
                 background: blue;
             }
        }
    }
}

</style>