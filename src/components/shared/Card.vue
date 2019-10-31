<template>
  <v-card :loading="loading" class="mx-auto my-4">
    <v-img src="https://audiovyvy.com/wp-content/uploads/2019/09/audiovyvy-linh-vu-thien-ha-1.jpg"></v-img>
    <v-card-title class="pl-3 pb-1 subtitle-1 black--text d-flex flex-row justify-space-between">
      Cafe Badilico
      <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
    </v-card-title>

    <v-card-text>
      <div>Small plates, salads & sandwiches an inteimate setting.</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  data: () => ({
    loading: false,
    selection: null
  }),
  methods: {
    reserve () {
      console.log('click')
    }
  },
  created () {
    // this.selection = true
  }
})
export default class App extends Vue {}
</script>
