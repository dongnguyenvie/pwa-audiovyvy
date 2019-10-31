<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
  created () {
    // window.dongdong = this
    // console.log(this.dongaaa)
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
