import UrlParser from '../../routes/url-parser'
import RestaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import FormReviewInitiator from '../../utils/form-review-initiator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const Detail = {
  async render () {
    return `
            <div class="content" id="content">
                <h2 class="content__heading">Detail Restaurant</h2>
                <div id="restaurants" class="restaurants"></div>
                <div id="likeButtonContainer"></div>
            </div>
        `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id)
    const restaurantContainer = document.querySelector('#restaurants')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    FormReviewInitiator.init({
      form: document.querySelector('#review-form'),
      container: document.querySelector('#review-container')
    })

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating
      }
    })
  }
}

export default Detail
