class EmptyFavorite extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
          <p>Favorite restaurant still empty</p>
        `
  }
}

customElements.define('empty-favorite', EmptyFavorite)
