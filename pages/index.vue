<template>
  <div>
    <h1>Next, Nuxt!</h1>

    <text-block />
    <text-block />
  </div>
</template>

<script>
import TextBlock from '~/components/editor/blocks/Text.vue'

export default {
  name: 'Home',

  layout: 'blog',

  head() {
    return {
      title: 'Next, Nuxt!',
      meta: [
        { name: 'twitter:title', content: 'Next, Nuxt!' },
        { name: 'twitter:description', content: 'Next, Nuxt! blog is awesome!' },
        { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },

  components: {
    TextBlock
  }
}
</script>
