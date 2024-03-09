import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    logs: [],
    filteredLogs: [],
    numberOfGetRequests: 0,
    numberOfPostRequests: 0,
    numberOfPutRequests: 0,
    loaded: false
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}