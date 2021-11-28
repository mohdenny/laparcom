import '../component/fav-list'
import '../component/empty-favorite'
import FavoriteRestaurantDb from '../../data/favorite-restaurantdb'

const Favorite = {
  async render () {
    const html = `
      <div class="content" id="content">
          <h2 class="content__heading"">Favorite Restaurant</h2>
          <div class="restaurant" id="restaurant">
              <fav-list></fav-list>
          </div>
      </div>
    `
    return html
  },
  async afterRender () {
    const postContainer = document.querySelector('fav-list')
    const restaurants = await FavoriteRestaurantDb.getAllRestaurants()
    if (restaurants.length > 0) {
      postContainer.value = restaurants
    } else {
      document.querySelector('#restaurant').innerHTML = '<empty-favorite></empty-favorite>'
    }
  }
}

export default Favorite
