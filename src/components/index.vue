<template>
    <div id="content">
        <div class="main">
            <img src="/static/img/index1.jpg">
        </div>
        <div class="nav flex-center">
            <div class="index-nav" onclick="location.href='/new/freshIdCard.html'">
                <img src="/static/img/icon_Check in.png">
                <div>入住</div>
            </div>
        </div>
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
</style>