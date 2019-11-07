import { PluginObject } from 'vue'
import { Store } from 'vuex'
import * as types from 'store/types'
// import { Action, Getter, Mutation, State, namespace } from 'vuex-class'
// import { mapActions, mapGetters } from 'vuex'
// import * as storeTypes from 'store/types'

const vuePlugin: PluginObject<any> = {
  install (Vue, options) {
    console.warn('registed vue plugins', 'plugins/vue-plugin')
    Vue.mixin({
      computed: {
        _settings (): object {
          return (this.$store as Store<types.RootState>).getters.ALL_SETTINGS
        }
      }
    })
  }
}

export default vuePlugin
