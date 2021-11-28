const itActsAsFavoriteRestaurantModel = (favRestaurantIdb) => {
  it('should return the restaurant that has been added', async () => {
    favRestaurantIdb.putRestaurant({ id: 1 })
    favRestaurantIdb.putRestaurant({ id: 2 })

    expect(await favRestaurantIdb.getRestaurantById(1)).toEqual({ id: 1 })
    expect(await favRestaurantIdb.getRestaurantById(2)).toEqual({ id: 2 })
    expect(await favRestaurantIdb.getRestaurantById(3)).toEqual(undefined)
  })

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favRestaurantIdb.putRestaurant({ aProperty: 'property' })

    expect(await favRestaurantIdb.getAllRestaurants()).toEqual([])
  })

  it('can return all of the restaurant that have been added', async () => {
    favRestaurantIdb.putRestaurant({ id: 1 })
    favRestaurantIdb.putRestaurant({ id: 2 })

    expect(await favRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }])
  })

  it('should remove favorite restaurant', async () => {
    favRestaurantIdb.putRestaurant({ id: 1 })
    favRestaurantIdb.putRestaurant({ id: 2 })
    favRestaurantIdb.putRestaurant({ id: 3 })

    await favRestaurantIdb.deleteRestaurant(1)

    expect(await favRestaurantIdb.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }])
  })

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favRestaurantIdb.putRestaurant({ id: 1 })
    favRestaurantIdb.putRestaurant({ id: 2 })
    favRestaurantIdb.putRestaurant({ id: 3 })

    await favRestaurantIdb.deleteRestaurant(4)

    expect(await favRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ])
  })
}

export { itActsAsFavoriteRestaurantModel }
