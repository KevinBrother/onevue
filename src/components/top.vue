<template>
    <div>
        <div class="top-left"><img src="/static/logo.png"/></div>
        <div class="top-right">
            <div class="date">
                <span id="date"></span>
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

.top-left img {
	position: absolute;
	left: 19px;
	top: 20px;
	width: 174px;
	height: 32px;
}

.top-right {
	position: absolute;
	right: 20px;
	top: 22px;
	height: 28px;
	margin-right: 70px;
}

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
}
</style>