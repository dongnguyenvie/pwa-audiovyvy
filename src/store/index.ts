import Vue from 'vue'
import Vuex, { StoreOptions, Commit } from 'vuex'
import * as types from 'store/types'
import services from 'services/index'

Vue.use(Vuex)

const store: StoreOptions<types.RootState> = {
  state: {
    allSettings: {}
  },
  mutations: {
    [types.Multation.SetAllSettings] (state: types.RootState, payload): void {
      console.error(payload)
      state.allSettings = payload
    }
  },
  actions: {
    async [types.Action.FetchAllSettings] ({ commit }: {commit: Commit}, state: types.RootState): Promise<void> {
      const data = await services.getAllSettings()
      commit(types.Multation.SetAllSettings, data)
    }
  },
  modules: {}
}
export default new Vuex.Store(store)
