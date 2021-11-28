import CONFIG from '../../globals/config'

class PostItem extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set value (data) {
    this.data = data
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="post-item">
        <div class="post-item-content">
          <img class="post-item-thumbnail" src="${CONFIG.BASE_IMAGE_URL('small') + this.data.pictureId}" alt="${this.data.name}" >
            <h1 class="post-item-title"><a class="min-height rest-title" href="#/detail/${this.data.id}">${this.data.name}</a></h1>
            <i class="fas fa-map-marker-alt"></i>
            <span class="post-item-location">${this.data.city}</span>
            <p class="post-item-description">${this.data.description}</p>
            <span class="post-item-rate">⭐️${this.data.rating}</span>
        </div>
        <hr>
      </div>`
  }
}

customElements.define('post-item', PostItem)
