/* eslint-disable no-undef */
const assert = require('assert')

Feature('Review Restaurant')

// Perintah berjalan sebelum tiap metode tes dijalankan
Before(({ I }) => {
  // root URL : http:localhost:9000
  I.amOnPage('/')
})

Scenario('Post restaurant review', async ({ I }) => {
  const reviewText = 'Test otomatis dari mohdenny'

  // URL: /
  I.seeElement('.restaurant-item__content a')
  I.click(locate('.rest-title').first())

  // URL: /restaurant/:id
  I.seeElement('.review-form-container form')
  I.fillField('name', 'Mohdenny E2E testing')
  I.fillField('review', reviewText)
  I.click('#button-review')

  // after submit review
  //   I.refreshPage();
  I.waitForResponse('https://restaurant-api.dicoding.dev/review')
  const lastReview = locate('.review-content').last()
  const lastReviewText = await I.grabTextFrom(lastReview)
  assert.strictEqual(reviewText, lastReviewText.trim())
})
