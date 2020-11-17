import KLink from '../src/link.vue'

export default {
  title: 'KLink',
  component: KLink
}

export const Link = _ => ({
  components: { KLink },
  template: `
    <div>
      <k-link :disabled="true" href="http://www.baidu.com">baidu</k-link>
    </div>
  `
})