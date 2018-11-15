<template>
    <div id="content">
        <div class="main">
            <img src="/static/img/index1.jpg">
        </div>
        <div class="nav flex-center">
            <router-link class="index-nav" to="freshIdCard">
                <img src="/static/img/icon_Check in.png">
                <p>入住</p>
            </router-link>
            <router-link class="index-nav" to="freshIdCard">
                <img src="/static/img/icon_Bill.png">
                <p>结账/退卡</p>
            </router-link>
        </div>
    </div>
</template>
<script>
        
export default {
  name: 'Index',
  data(){
    return {
    }
  }
}
</script>

<style scoped>
    #content {
        display: flex;
        flex-direction: column;
    }

    .main {
        flex: auto;
        height: 100px;
        display: flex;
        justify-content: center; 
        position: relative;
    }

    .main img {
        position: absolute;
        width: 96%;
        height: 100%;
    }

    .nav {
        height: 20.5rem;
    }

    .index-nav {
        box-sizing: border-box;
        float: left;
        width: 214px;
        height: 200px;
        margin-right: 10px;
        padding-top: 45px;
        text-align: center;
        background: #FFFFFF;
        box-shadow: 0 6px 17px 0 rgba(240,240,240,0.50);
        border-radius: 6px;
    }

    .index-nav p{
        margin-top: 23px;
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        color: #9B9B9B;
    }
</style>