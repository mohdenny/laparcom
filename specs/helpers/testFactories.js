import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'
import FavRestaurantIdb from '../../src/scripts/data/favorite-restaurantdb'

const createLikeButtonInitiatorWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favRestaurantIdb: FavRestaurantIdb,
    data: {
      restaurant
    }
  })
}

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonInitiatorWithRestaurant }
