<template>
  <div id="app">
    <!-- <Top></Top>  -->
    
    <div>

    </div>
    <!-- <Botton></Botton> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Top from './components/top'
// import Bottom from './components/bottom'

export default {
  name: 'App',
  components: {
    Top,
    HelloWorld,
  }
}
</script>

<style>
body,div,ol,ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,p,form,fieldset,legend,input,img,span {
	margin:0;
	padding:0;
}

#app {
	overflow-x: hidden;
	overflow-y: hidden;
	background-image: url("/static/background.png");
	background-size: cover;
}

.hide {
	display: none;
}
</style>













<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

