export const state = () => ({
  list: [
    { slug: 'lorem', title: 'Lorem', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ornare ex. Ut vulputate et eros quis volutpat. Vestibulum vitae sollicitudin magna. Sed dictum mattis mi, ac mattis ipsum faucibus quis. Quisque nec metus vitae elit tristique elementum. Etiam molestie elit a velit eleifend euismod. Etiam id tortor neque. Integer eros tellus, consequat nec risus vel, elementum aliquet elit. Maecenas ut ex eget lorem venenatis ultrices. Phasellus vitae lacus est. Aliquam volutpat turpis quam, sed rhoncus nunc imperdiet ac.' },
    { slug: 'morbi', title: 'Morbi', content: 'Morbi eget ultricies nibh. Morbi eu convallis tellus. Sed ullamcorper nisi non nisl tempus luctus. Pellentesque pretium arcu in placerat congue. Maecenas fringilla orci a iaculis pellentesque. Pellentesque nec justo venenatis, viverra quam in, ultrices dui. Nulla aliquam placerat nunc, id feugiat metus. Vestibulum elementum turpis libero, sit amet finibus est lobortis et. Nunc auctor ex elit, ut egestas mi laoreet quis. Proin et maximus libero, ac eleifend mauris. Nunc posuere ex non nunc elementum, in scelerisque augue convallis. Suspendisse vel malesuada quam, eget vulputate felis. Mauris posuere quam a mi auctor, id blandit massa accumsan. Donec aliquam tincidunt elementum.' },
    { slug: 'proin', title: 'Proin', content: 'Proin non elit at nunc feugiat malesuada. Donec a elit a arcu porta posuere. Etiam tempor eget justo vitae porttitor. Aliquam erat volutpat. Etiam facilisis vulputate velit id tincidunt. Sed dignissim porta pharetra. Duis tincidunt sem eget augue molestie accumsan. Sed eu ligula pellentesque, tempus justo quis, fermentum dui. Suspendisse quis nibh ipsum. Aliquam at semper libero.' }
  ]
})

export const getters = {
  getList(state) {
    return state.list
  }
}

export const mutations = {
  addPost(state, post) {
    state.list.push(post)
  }
}

export const actions = {
  add({ commit }, post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('addPost', post)
        resolve()
      }, 500)
    })
  }
}
