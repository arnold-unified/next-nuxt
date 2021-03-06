export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    // console.log(config)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/404')
    }
  })
}
