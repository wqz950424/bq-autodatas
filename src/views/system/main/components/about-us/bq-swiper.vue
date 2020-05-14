<template>
  <div class="swiper-com">
    <swiper 
      class="banxin" 
      :options="swiperOption" 
      ref="mySwiper"
    >
      <swiper-slide>
        <img class="slider-img" src="~@/assets/images/aboutus/01.jpg">
        <div class="cover-img"></div>
      </swiper-slide>
      <swiper-slide>
        <img class="slider-img" src="~@/assets/images/aboutus/02.jpg">
        <div class="cover-img"></div>
      </swiper-slide>
      <swiper-slide>
        <img class="slider-img" src="~@/assets/images/aboutus/03.jpg">
        <div class="cover-img"></div>
      </swiper-slide>
      <swiper-slide>
        <img class="slider-img" src="~@/assets/images/aboutus/04.jpg">
        <div class="cover-img"></div>
      </swiper-slide>
      <swiper-slide>
        <img class="slider-img" src="~@/assets/images/aboutus/05.jpg">
        <div class="cover-img"></div>
      </swiper-slide>
      <swiper-slide>
        <img class="slider-img" src="~@/assets/images/aboutus/06.jpg">
        <div class="cover-img"></div>
      </swiper-slide>
      
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
      <div class="swiper-button-prev" slot="button-prev" @click="leftClick"></div>
      <div class="swiper-button-next" slot="button-next" @click="rightClick"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>
 
<script>
import 'swiper/css/swiper.css';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';


export default {
  name: 'BQSwiper',
  props: {
    slidesPerView: {
      type: Number,
      default: 4
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        slidesPerView: 4,// 可以提前看几个
        spaceBetween: 40,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,// 没有内容的时候用空白填充
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'fraction',
        //   clickable: false,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true
        // }
      },
      coverStyle: {
        display: 'block'
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },

  watch: {
    slidesPerView(val) {
      if(val) {
        this.swiperOption.slidesPerView = val;
        this.$refs.mySwiper.swiper.destroy();
        this.$refs.mySwiper.mountInstance();
      }
    }
  },
  methods: {
    leftClick() {
      this.$emit('subClick', 'left')
    },
    rightClick() {
      this.$emit('subClick', 'right')
    }
  }
};
</script>

<style lang="scss">
  .swiper-com {
    margin-top: 50px;
    height: 100px;
    width: 100%;
    background-color: #000;
    .slider-img {
      width: 200px;
      height: 100px;
    }
    .cover-img {
      width: 201px;
      height: 100px;
      background-color: rgba(0,0,0, .4);
      position: absolute;
      top: 0;
      left: 56px;
    }
    .swiper-slide {
      position: relative;
    }
    .swiper-pagination, .swiper-scrollbar {
      display: none;
    }
    .swiper-pagination-fraction{
      height:20px;
      line-height:20px;
      bottom: 8px;
    }
   .swiper-button-next,
   .swiper-button-prev {
      width: 30px;
      height: 100px;
      top: 0;
      margin-top: 0;
      line-height: 100px;
      text-align: center;
      box-sizing: border-box;
      color: #fff;
      font-size: 60px;
      font-family: '宋体';
      // background-color: rgba(255,255,255,.4);
      background-size: 80%;
      &:hover {
        color: #409eff;
        border-color: #409eff;
        // background-color: rgba(255,255,255,.6);
      }
    }
    .swiper-button-next {
      // margin-right: 45px;
      right:0;
    }
    .swiper-button-prev{
      left: 0;
    }
  }
</style>