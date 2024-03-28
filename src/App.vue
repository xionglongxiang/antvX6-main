<template>
  <HelloWorld></HelloWorld>
  <button @click="loadComponentByRequire">远程加载组件</button>
  <component :is="curComponent"></component>
</template>

<script setup>
import { shallowRef } from '@vue/reactivity';

import HelloWorld from './components/HelloWorld.vue';

let curComponent = shallowRef();
const loadComponentByRequire = async () => {
  await import(/* @vite-ignore */'http://localhost:8080/bundle.js?ts=' + new Date().getTime())
  console.log(MyPlugin.default)
  curComponent.value = MyPlugin.default.BaseNode.DisplayView
}
// loadComponentByRequire()
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 200px;
}
</style>
