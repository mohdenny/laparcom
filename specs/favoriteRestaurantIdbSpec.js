import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import FavRestaurantIdb from '../src/scripts/data/favorite-restaurantdb'

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavRestaurantIdb.deleteRestaurant(restaurant.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavRestaurantIdb)
})
