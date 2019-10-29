<template>
  <div id="app">
    <Youtube/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Youtube from './components/Youtube.vue'
import servies from '@/services'

@Component({
  components: {
    HelloWorld,
    Youtube
  },
  created () {
    window.dongdong = this
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
