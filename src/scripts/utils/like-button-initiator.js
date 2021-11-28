import FavoriteRestaurantDb from '../data/favorite-restaurantdb'
import {
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate
} from '../views/templates/template-creator'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, restaurant }) {
    this.likeButtonContainer = likeButtonContainer
    this.restaurant = restaurant

    await this.renderButton(this.restaurant)
  },

  async renderButton (restaurant) {
    const { id } = restaurant

    if (await this.restaurantExist(id)) {
      this.renderLiked()
    } else {
      this.renderLike()
    }
  },

  async restaurantExist (id) {
    const restaurant = await FavoriteRestaurantDb.getRestaurantById(id)
    return !!restaurant
  },

  renderLiked () {
    this.likeButtonContainer.innerHTML = createLikedRestaurantButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      FavoriteRestaurantDb.deleteRestaurant(this.restaurant.id)
      this.renderButton(this.restaurant)
    })
  },

  renderLike () {
    this.likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      FavoriteRestaurantDb.putRestaurant(this.restaurant)
      this.renderButton(this.restaurant)
    })
  }
}

export default LikeButtonInitiator
