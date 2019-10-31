declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'vue/types/vue' {
  interface InitializeVue {
    fetchAllSettings: any
  }
}