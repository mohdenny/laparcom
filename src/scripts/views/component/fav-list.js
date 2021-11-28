import './post-item'

class FavList extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set value (data) {
    this.data = data
    this.render()
  }

  render () {
    this.data.forEach((item) => {
      const postItem = document.createElement('post-item')
      this.appendChild(postItem)
      postItem.value = item
    })
  }
}

customElements.define('fav-list', FavList)
