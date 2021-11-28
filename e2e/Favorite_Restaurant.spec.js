/* eslint-disable no-undef */
const assert = require('assert')

Feature('Favorite Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

const emptyFavoriteRestaurantText = 'Favorite restaurant still empty'

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.restaurant')
  I.see(emptyFavoriteRestaurantText, '.restaurant')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestaurantText, '.restaurant')

  // URL: /
  I.amOnPage('/')
  I.seeElement('.restaurant-item__content a')
  const firstRestaurant = locate('.rest-title').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  // URL: /restaurant/:id
  I.seeElement('#likeButton')
  I.click('#likeButton')

  // URL: //#/favorite
  I.amOnPage('/#/favorite')
  I.seeElement('.restaurant')
  const likedTitle = await I.grabTextFrom('.rest-title')
  assert.strictEqual(firstRestaurantTitle, likedTitle) // membandingkan
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestaurantText, '.restaurant')

  // URL: /
  I.amOnPage('/')
  I.seeElement('.restaurant-item__content a')
  const firstRestaurant = locate('.rest-title').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  // URL: /restaurant/:id
  I.seeElement('#likeButton')
  I.click('#likeButton')

  // URL: //#/favorite
  I.amOnPage('/#/favorite')
  I.seeElement('.restaurant')
  const likedTitle = await I.grabTextFrom('.rest-title')
  assert.strictEqual(firstRestaurantTitle, likedTitle)

  I.click(likedTitle)

  // URL: /restaurant/:id
  I.seeElement('#likeButton')
  I.click('#likeButton')

  // URL: //#/favorite
  I.amOnPage('/#/favorite')
  I.seeElement('.restaurant')
  I.dontSeeElement('.post-item-content')
  I.dontSeeElement('.rest-title')
})
