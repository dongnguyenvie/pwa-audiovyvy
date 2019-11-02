import Vue from 'vue'
import Vuex, { StoreOptions, Commit } from 'vuex'
import * as types from 'store/types'
import services from 'services/index'
import _ from 'plugins/lodash'

Vue.use(Vuex)

const store: StoreOptions<types.RootState> = {
  state: {
    allSettings: {},
    categories: []
  },
  getters: {
    [types.Getter.AllSettings] (state: types.RootState) {
      return state.allSettings
    },
    [types.Getter.AllCategories] (state: types.RootState) {
      return state.categories
    }
  },
  mutations: {
    [types.Multation.SetAllSettings] (state: types.RootState, payload: any): void {
      state.allSettings = payload.error ? {} : payload.data.allSettings
    },
    [types.Multation.SetCategories] (state: types.RootState, payload: types.RootState): void {
      const categories = [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ]
      state.categories = categories
    }
  },
  actions: {
    async [types.Action.FetchAllSettings] ({ commit }: {commit: Commit}, payload: any): Promise<void> {
      const data = await services.getAllSettings()
      commit(types.Multation.SetAllSettings, data)
      return data
    },
    async [types.Action.FetchCategories] ({ commit }: {commit: Commit}, payload: any): Promise<void> {
      commit(types.Multation.SetCategories)
    }
  },
  modules: {}
}
export default new Vuex.Store(store)
