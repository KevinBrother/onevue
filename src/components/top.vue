<template>
    <div id="top">
        <div class="top-left"><img src="/static/logo.png"/></div>
        <div class="top-right">
            <div class="date">
                <span id="date">2018.11.13 16:52:14 星期二 </span>
            </div>
            <div class="back-to-index" id="backToIndex">
                <img src="/static/index.png"/>
                <div>返回首页</div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#top {
	display: flex;
	justify-content: space-between;
	font-size: 1.33rem;
}

.top-left {
	width: 18rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.top-left img{
	width: 174px;
	height: 32px;
}

.top-right {
	height: 100%;
	flex: auto;
	display: flex;
	justify-content: flex-end;
}

.date {
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Roboto-Medium;
    font-size: 1.66rem;
    font-weight: bold;
    color: #4A4A4A;
}

.back-to-index {
	font-family: PingFangSC-Regular;
	color: #333333;
	width: 7rem;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
}

/* 
.top-right .date {
	font-family: Roboto-Medium;
	font-size: 20px;
	font-weight: bold;
	color: #4A4A4A;
}

.top-right .back-to-index {
	position: absolute;
	top: -14px;
	right: -75px;
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #333333;
	letter-spacing: 0;
	text-align: center;
}

.top-right img {
	width: 30px;
	height: 30px;
} */
</style>