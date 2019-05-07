<template>
  <div>
    <article>
      <nuxt-link id="back-link" to="/posts">
        Back
      </nuxt-link>

      <h2>{{ post.title }}</h2>

      <p>{{ post.content }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Post',

  head() {
    return {
      title: `${this.post.title} - Next, Nuxt!`,
      meta: [
        { name: 'twitter:title', content: `${this.post.title} - Next, Nuxt!` },
        { name: 'twitter:description', content: this.post.content },
        { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },

  data() {
    return {
      slug: this.$route.params.slug,
      posts: this.$store.state.posts.list
    }
  },

  computed: {
    post() {
      return this.posts.find(post => post.slug === this.slug)
    }
  }
}
</script>

<style scoped>
#back-link {
  float: right;
}
</style>
