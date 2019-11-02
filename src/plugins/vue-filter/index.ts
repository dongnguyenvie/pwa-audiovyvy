import Vue from 'vue'
import * as types from './types'
import _ from 'lodash'

const initializeFilter: types.IFilter = ({ settings }) => {
  console.warn(`initializeFilter`, settings)
  Vue.filter('settings', (key: string) => {
    return _.get(settings, key)
  })
}

export default initializeFilter
