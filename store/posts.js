export const state = () => ({
  list: []
})

export const getters = {
  getList(state) {
    return state.list
  }
}

export const mutations = {
  setList(state, list) {
    state.list = list
  },
  addPost(state, post) {
    state.list.push(post)
  }
}

export const actions = {
  async loadPosts({ commit }) {
    const posts = await this.$axios.$get('/posts')
    commit('setList', posts)
  },
  add({ commit }, post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('addPost', post)
        resolve()
      }, 500)
    })
  }
}
