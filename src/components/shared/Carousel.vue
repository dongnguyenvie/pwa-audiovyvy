<template>
  <v-carousel :hide-delimiters="true" :height="300">
    <v-carousel-item :key="i" v-for="i in loopQuantity">
      <v-row justify="center">
        <v-col v-for="(item, index) in items" :key="index" cols="3">
          <Card :item="item" />
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script lang="ts">
import { Prop, Component, Vue, Watch, PropSync } from 'vue-property-decorator'
import Card from 'components/shared/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class Carousel extends Vue {
  private quantityItemsOnRow = 5

  @Prop({ default: () => [], type: Array }) readonly items?: Array<object>

  public get loopQuantity (): number {
    return Math.ceil(this.items!.length / this.quantityItemsOnRow)
  }

  public created () {}
  public mounted () {
    console.log(this.items)
  }

  @Watch('items') onChildChanged (val: string, oldVal: string) {
    console.log(`Watch`, val)
  }
}
</script>
