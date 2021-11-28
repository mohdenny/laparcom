import CONFIG from '../../globals/config'
import img from '../../../public/images/default.jpg'

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL('large') + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
        <h3>Information</h3>
        <h4>Description</h4>
        <p>${restaurant.description}</p>

        <h4>City</h4>
        <p>${restaurant.city}</p>

        <h4>Address</h4>
        <p>${restaurant.address}</p>

        <h4>Categories</h4>
        ${restaurant.categories.map((category) => `<p>${category.name}</p>`)}
        <h4>Menus</h4>
        <h4>Food:</h4>
        ${restaurant.menus.foods.map((food) => `<p>${food.name}</p>`)}
        <h4>Drink:</h4>
        ${restaurant.menus.drinks.map((drink) => `<p>${drink.name}</p>`)}

        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
        <div class="restaurant__overview">
            <h3>Reviews</h3>
            <h2>Consumer Review</h2>
            <div id="review-container">
            ${restaurant.customerReviews.map((review) => `
                <div class="review-container">
                    <div class="review-photo-profile">
                        <picture>
                            <source media="(max-width: 200px)" srcset="/images/src/public/images/default-200.jpg">
                            <source media="(max-width: 300px)" srcset="/images/src/public/images/default-300.jpg">
                            <img src="/images/src/public/images/default-400.jpg" alt="consumer photo profile">
                        </picture>
                    </div>
                    <div class="review-body">
                        <h3 class="review-consumer-name">${review.name}</h3>
                        <small class="review-date-post">${review.date}</small>
                        <p class="review-content">${review.review}</p>
                    </div>
                </div>
                `).join('')}
            </div>
            <div class="review-form-container">
                <h2>Make a Review</h2>
                <form class="review-form" id="review-form">
                    <input class="min-height" type="hidden" name="id" value="${restaurant.id}">
                    <div class="review-form-element">
                        <label for="name">Name</label>
                        <input class="min-height" type="text" name="name" id="name" autocomplete="off">
                    </div>
                    <div class="review-form-element">
                        <label for="review">Review</label>
                        <input class="min-height" name="review" type="text" id="review">
                    </div>
                    <button class="btn-min-height" type="submit" id="button-review">Add Review</button>
                </form>
            </div>
        </div>
    </div>
`

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
                data-src="${CONFIG.BASE_IMAGE_URL('medium') + restaurant.pictureId}">
            <div class="restaurant-item__header__rating">
                <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3><a class="min-height rest-title" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
            <h4>${restaurant.city}</h4>
            <p>${restaurant.description}</p>
        </div>
    </div>
`

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like btn-min-height">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`

const createLikedRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like btn-min-height">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`

const createReviewTemplate = (reviews) => {
  const review = reviews.customerReviews[reviews.customerReviews.length - 1]

  const html = document.createElement('div')
  html.classList.add('review-container')
  html.innerHTML = `
            <div class="review-photo-profile">
                <picture>
                    <source media="(max-width: 200px)" srcset="/images/src/public/images/default-200.jpg">
                    <source media="(max-width: 300px)" srcset="/images/src/public/images/default-300.jpg">
                    <img src="/images/src/public/images/default-400.jpg" alt="consumer photo profile">
                </picture>
            </div>
            <div class="review-body">
                <h3 class="review-consumer-name">${review.name}</h3>
                <small class="review-date-post">${review.date}</small>
                <p class="review-content">${review.review}</p>
            </div>
            
    `

  return html
}

const createButtonLoaderTemplate = () => `
    <div class="btn-loader">
    </div>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
  createButtonLoaderTemplate,
  createReviewTemplate
}
