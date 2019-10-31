import { Prop, Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import * as storeTypes from 'store/types'

interface IInitializeVue {
  // _settings: object
}

export default class InitializeVue extends Vue implements IInitializeVue {
  public _settings (key: any) {
    const a = this.$options.filters!.settings(key)
    debugger
    return this.$options.filters!.settings(key)
  }

  public onMounted (): void {
    console.warn('[InitializeVue] onMounted')
  }
  public async onCreated (): Promise<any> {
    console.warn('[InitializeVue] onCreated')
  }
}
