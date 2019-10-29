/** Vuetify */
import Vue from 'vue'
import Vuetify from 'vuetify'
import { VuetifyPreset } from 'vuetify/types/presets'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

const opts: Partial<VuetifyPreset> = {
  icons: {
    iconfont: 'md'
  }
}

export default new Vuetify(opts)
