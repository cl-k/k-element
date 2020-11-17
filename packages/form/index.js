import KForm from './src/form.vue'

KForm.install = Vue => {
  Vue.component(KForm.name, KForm)
}
console.log('test')
export default KForm
