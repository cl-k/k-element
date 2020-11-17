import KButton from './src/button.vue'

KButton.install = Vue => {
  Vue.component(KButton.name, KButton)
}

export default KButton
