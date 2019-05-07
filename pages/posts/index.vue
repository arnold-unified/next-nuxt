<template>
  <div>
    <nuxt-link id="create-link" to="/posts/create">
      Create
    </nuxt-link>

    <h2>Posts</h2>

    <article v-for="post in posts" :key="post.slug">
      <h3>
        <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.slug } }">
          {{ post.title }}
        </nuxt-link>
      </h3>
      <p>{{ post.content }}</p>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Posts',

  head() {
    return {
      title: 'Posts - Next, Nuxt!',
      meta: [
        { name: 'twitter:title', content: 'Posts - Next, Nuxt!' },
        { name: 'twitter:description', content: 'Next, Nuxt! blog is awesome!' },
        { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },

  computed: {
    ...mapGetters({
      posts: 'posts/getList'
    })
  }
}
</script>

<style scoped>
#create-link {
  float: right;
}
</style>
