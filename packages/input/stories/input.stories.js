import KInput from '../'

export default {
  title: 'KInput',
  component: KInput
}

export const Text = () => ({
  components: { KInput },
  template: '<k-input v-model="value"></k-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { KInput },
  template: '<k-input type="password" v-model="value"></k-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
