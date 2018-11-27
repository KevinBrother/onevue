<template>
  <div id="app" class="hide">
    <Top></Top> 
    <router-view/>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './components/top'
import Bottom from './components/bottom'

export default {
  name: 'App',
  components: {
    Top,
    Bottom
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  font-size: 12px;
}

html,body,div,ol,ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,p,form,fieldset,legend,input,img,span {
	margin:0;
	padding:0;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url("/static/img/background.png") no-repeat ;
  background-size: cover;
}

#app > div:first-child {
  height: 6rem;
  background-color: rgba(255,255,255,0.8);
}

#app > div:nth-child(2) {
  flex: auto;
}

#app > div:nth-child(3) {
  width: 100%;
  height: 5rem;
  background-color: rgba(74,74,74,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration:none;
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

