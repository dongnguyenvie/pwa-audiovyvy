<template>
  <v-app id="inspire">
    <Navigation :items="items" :items2="items2" :drawer="drawer"/>
    <Header @toggleNavigation="toggleNavigation" />
    <v-content>
      <v-container class="fill-height">
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import Navigation from 'components/shared/Navigation.vue'
import Header from 'components/shared/Header.vue'

@Component({
  data: () => ({
    items: [
      { icon: 'trending_up', text: 'Most Popular' },
      { icon: 'subscriptions', text: 'Subscriptions' },
      { icon: 'history', text: 'History' },
      { icon: 'featured_play_list', text: 'Playlists' },
      { icon: 'watch_later', text: 'Watch Later' }
    ],
    items2: [{ picture: 28, text: 'Joseph' }, { picture: 38, text: 'Apple' }, { picture: 48, text: 'Xbox Ahoy' }, { picture: 58, text: 'Nokia' }, { picture: 78, text: 'MKBHD' }]
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
  components: {
    Navigation,
    Header
  }
})
export default class HelloWorld extends Vue {
  public drawer: Boolean = true
  public toggleNavigation (): void {
    this.drawer = !this.drawer
  }
}
</script>
