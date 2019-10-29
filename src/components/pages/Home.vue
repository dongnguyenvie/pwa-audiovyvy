<template>
    <v-container>
        <v-carousel
        :hide-delimiters="true"
        >
            <v-carousel-item :key="i" v-for="i in 5">
                <v-row justify="center">
                    <v-col
                        v-for="n in 25"
                        :key="n"
                        cols="2"
                    >
                    <Card/>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
        <v-row>
            <v-col
                v-for="n in 25"
                :key="n"
                cols="2"
            >
              <Card/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator'
import Card from 'components/shared/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class Home extends Vue {

}
</script>
