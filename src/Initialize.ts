import { Prop, Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import * as storeTypes from 'store/types'

interface IInitializeVue {
}

export default class InitializeVue extends Vue implements IInitializeVue {
  public onMounted (): void {
    console.warn('[InitializeVue] onMounted')
  }
  public async onCreated (): Promise<any> {
    console.warn('[InitializeVue] onCreated')
  }
}
