import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from 'plugins/vuetify'
import vuePlugin from 'plugins/vue-plugin'
import VueFilter from 'plugins/vue-filter'
import InitializeVue from './Initialize'
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
import * as storeTypes from 'store/types'

Vue.config.productionTip = false

Vue.use(vuePlugin)

new InitializeVue({
  router,
  store,
  vuetify,
  render: h => h(App),
  computed: {
    ...mapGetters({
      settings: storeTypes.Getter.AllSettings
    })
  },
  methods: {
    ...mapActions({
      fetchAllSettings: storeTypes.Action.FetchAllSettings
    })
  },
  async created () {
    await (this as any).fetchAllSettings()
    console.log(`(this as any).settings`, (this as any).settings)
    VueFilter({ settings: (this as any).settings })
  }
}).$mount('#app')
