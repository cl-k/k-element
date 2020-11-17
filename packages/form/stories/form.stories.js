import KForm from '../'
import KFormItem from '../../formitem'
import KInput from '../../input'
import KButton from '../../button'

export default {
  title: 'KForm',
  component: KForm
}

export const Login = () => ({
  components: { KForm, KFormItem, KInput, KButton },
  template: `
    <k-form class="form" ref="form" :model="user" :rules="rules">
      <k-form-item label="用户名" prop="username">
        <!-- <k-input v-model="user.username"></k-input> -->
        <k-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input type="password" v-model="user.password"></k-input>
      </k-form-item>
      <k-form-item>
        <k-button type="primary" @click="login">登 录</k-button>
      </k-form-item>
    </k-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
