<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import servies from '@/services'

@Component({
  components: {
  },
  created () {
    window.dongdong = this
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
