<template>
  <v-container>
    <template v-for="(post, index) in getPosts">
      <h3 :key="`title-${index}`">{{post.title}}</h3>
      <template v-if="post.isCarousel">
        <Carousel :items="post.nodes" :key="index" />
      </template>
      <template v-else>
        <Section :items="post.nodes" :key="index" />
      </template>
    </template>
  </v-container>
</template>

<script lang="ts">
import _ from 'lodash'
import services from 'services/index'
import { Prop, Vue, Component } from 'vue-property-decorator'
import InitializeVue from '@/Initialize'
import Carousel from 'components/shared/Carousel.vue'
import Section from 'components/shared/Section.vue'

interface IPost {
  title: string
  nodes: Array<{
    featuredImage: object
    id: string
    postId: number
    title: string
    uri: string
  }>
  isCarousel: boolean
}

const CAROUSEL = ['soHot']
const MAPPER_TITLE: { [key: string]: string } = {
  soHot: 'Truyện Hot',
  new: 'Truyện mới',
  tienHiep: 'Truyện tiên hiệp',
  kinhDi: 'Truyện kinh dị',
  quanTruong: 'Truyện quan trường'
}

@Component({
  components: {
    Carousel,
    Section
  }
})
export default class Home extends Vue {
  posts: object = {}

  public get getPosts () {
    let posts = [] as Array<IPost>
    Object.keys(MAPPER_TITLE).forEach((categoryNm) => {
      posts.push({
        title: MAPPER_TITLE[categoryNm],
        ...(this.posts as any)[categoryNm],
        isCarousel: CAROUSEL.indexOf(categoryNm) !== -1
      })
    })
    return posts
  }

  public loadData (): void {
    services.getHomePosts().then((responseData) => {
      console.log(responseData)
      this.posts = responseData.data
    })
  }

  private created () {
    this.loadData()
  }

  private mounted () {
    setTimeout(() => {
      console.log(`this.getPosts`, this.getPosts)
    }, 2000)
  }
}
</script>
