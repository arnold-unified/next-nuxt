<template>
  <div>
    <nuxt-link id="back-link" to="/posts">
      Back
    </nuxt-link>

    <h2>Create Post</h2>

    <form @submit.prevent="addPost">
      <div class="form-group">
        <label>Slug:</label>
        <input v-model="post.slug" type="text" name="slug" disabled></input>
      </div>
      <div class="form-group">
        <label>Title:</label>
        <input v-model="post.title" type="text" name="title"></input>
      </div>
      <div class="form-group">
        <label>Content:</label>
        <textarea v-model="post.content" name="content" />
      </div>
      <input type="submit" name="submit" value="Add">
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePost',

  layout: 'blog',

  head() {
    return {
      title: 'Create Post - Next, Nuxt!'
    }
  },

  data() {
    return {
      post: {
        slug: null,
        title: null,
        content: null
      }
    }
  },

  computed: {
    title() {
      return this.post.title
    }
  },

  watch: {
    title(newVal, oldVal) {
      if (!newVal) return false

      this.post.slug = this.$slug(newVal)
    }
  },

  methods: {
    addPost() {
      this.$store.dispatch('posts/add', this.post).then(() => {
        this.clearPost()

        this.$router.push({ name: 'posts' })
      })
    },
    clearPost() {
      this.post.slug = null
      this.post.title = null
      this.post.content = null
    }
  }
}
</script>

<style scoped>
#back-link {
  float: right;
}
</style>
