import Vue from 'vue'
import * as types from './types'
import _ from 'lodash'

const initializeFilter: types.IFilter = ({ settings }) => {
  Vue.filter('settings', (key: string) => {
    debugger
    console.error(`settings`, settings)
    return _.get(settings, key)
  })
}

export default initializeFilter
