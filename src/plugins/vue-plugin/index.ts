// import * as types from './types'
import _Vue, { PluginObject } from 'vue'
// import { Action, Getter, Mutation, State, namespace } from 'vuex-class'
import { mapActions, mapGetters } from 'vuex'
// import * as storeTypes from 'store/types'

const vuePlugin: PluginObject<any> = {
  install (Vue, options) {
    console.warn('Vue plugins', 'plugins/vue-plugin')
    Vue.mixin({
      computed: {
        _settings (): object {
          return (this as any).$store.getters.ALL_SETTINGS
        }
      }
    })
  }
}

export default vuePlugin
