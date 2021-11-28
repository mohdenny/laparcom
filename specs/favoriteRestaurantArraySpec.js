/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'

let favoriteRestaurant = []

const FavoriteRestaurantArray = {
  getRestaurantById (id) {
    if (!id) {
      return
    }

    return favoriteRestaurant.find((restaurant) => restaurant.id === id)
  },

  getAllRestaurants () {
    return favoriteRestaurant
  },

  putRestaurant (restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return
    }

    if (this.getRestaurantById(restaurant.id)) {
      return
    }

    favoriteRestaurant.push(restaurant)
  },

  deleteRestaurant (id) {
    // cara boros menghapus restaurant dengan meng-copy restaurant yang ada
    // kecuali restaurant dengan id === id
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id !== id)
  }
}

describe('Favorite restaurant array contract test', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => (favoriteRestaurant = []))

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray)
})
