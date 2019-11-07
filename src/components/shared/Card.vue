<template>
  <v-card
    :loading="loading"
    class="mx-auto my-4"
    :outlined="false"
    :shaped="false"
    :tile="true"
    :light="true"
  >
    <v-img max-height="250" :src="item.featuredImage.sourceUrl"></v-img>
    <v-card-text class="v-card-text">
      <div v-html="item.title"></div>
    </v-card-text>
    <!-- <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating> -->
    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

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
export default class App extends Vue {
  @Prop({ default: () => {}, type: Object }) item?: object
  public created () {
    window.dongdong = this
  }
}
</script>
<style lang="scss" scoped>
.v-card-text {
  min-height: 75px;
  overflow: hidden;
}
</style>
