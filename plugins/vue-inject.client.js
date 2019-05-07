export default ({ app }, inject) => {
  inject('slug', (str) => {
    if (!str) return ''

    return str.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')
  })
}
