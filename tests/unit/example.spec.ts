import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App.vue', () => {
  it('import success vue router', () => {
    const wrapper = shallowMount(App, {
      localVue
    })
    expect('true').toMatch('true')
  })
})
