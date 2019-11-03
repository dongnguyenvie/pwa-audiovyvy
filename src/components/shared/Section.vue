<template>
  <v-row>
    <v-col v-for="n in 25" :key="n" cols="6" sm="4" md="3">
      <Card />
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
