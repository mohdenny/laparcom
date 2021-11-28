import RestaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'
import img from '../../../public/images/hero-image.jpg'

const ListRestaurant = {
  async render () {
    return `
      <div class="wrapper">
        <div class="hero-image">
          <picture>
            <img class="gfg hero" src='${img}' alt="hero laparcom"></img>
          </picture>

          <div class="hero-text">
            <h1>Find the best restaurants on this website</h1>
            <p>What do you want to eat</p>
            <a href="#content" style="min-height: 44px; display: inline-block;"><button class="btn-min-height">Order now</button></a>
          </div>
        </div>

        <div class="content" id="content">
          <h2 class="content__heading">Explore Restaurants</h2>
          <div id="restaurants" class="restaurants">
  
          </div>
        </div>
      </div>
      `
  },

  async afterRender () {
    const restaurants = await RestaurantDbSource.listRestaurantItem()
    const restaurantsContainer = document.querySelector('#restaurants')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default ListRestaurant
