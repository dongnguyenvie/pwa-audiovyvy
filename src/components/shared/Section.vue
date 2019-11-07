<template>
  <v-row class="align-self-xl-auto">
    <v-col v-for="(item, index) in items" :key="index" cols="6" sm="4" md="3">
      <Card :item="item" />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'
import Card from 'components/shared/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class Section extends Vue {
  @Prop({ default: () => [], type: Array }) readonly items?: Array<object>
}
</script>
