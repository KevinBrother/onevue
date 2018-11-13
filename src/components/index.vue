<template>
    <div id="content">
        <!-- <div class="main">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="/static/index1.jpg">
                    </div>
                    <div class="swiper-slide">
                        <img src="/static/index2.jpg">
                    </div>
                    <div class="swiper-slide">
                        <img src="/static/index3.jpg">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="nav">
            <div class="index-nav" onclick="location.href='/new/freshIdCard.html'">
                <img src="/static/icon_Check in.png">
                <div>入住</div>
            </div>
            <div class="index-nav" onclick="location.href='/new/checkout.html'">
                <img src="/static/icon_Bill.png">
                <div>结账/退卡</div>
            </div>
        </div> -->
        <router-link to="/toCheckin">
            入住asdfas
            dadsfasd
        </router-link>
    </div>
</template>

<script>
        
export default {
  name: 'App',
  data(){
    return {
    }
  }
}
</script>

<style>
    #content {
        background-color: red;
    }
</style>