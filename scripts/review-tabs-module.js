class ReviewTabsModule {
  constructor(selector) {
    this.reviewSection = document.querySelector(selector)

    this.reviewText = this.reviewSection.querySelector(
      ".review__section__container__text"
    )

    this.reviewItems = this.reviewSection.querySelectorAll(".review__item")

    this.reviewItems.forEach((item) => {
      item.addEventListener("click", (event) => this.reviewerClicked(event))
    })
  }

  reviewerClicked(event) {
    const clickedReviewer = event.currentTarget

    this.reviewItems.forEach((item) =>
      item.classList.remove("review__item--active")
    )

    clickedReviewer.classList.add("review__item--active")

    // Get new review text
    const newReview = clickedReviewer.dataset.reviewText

    //text fade-out → change → fade-in
    if (newReview && this.reviewText.textContent !== newReview) {
      this.reviewText.classList.add("fade-out")

      setTimeout(() => {
        this.reviewText.textContent = newReview
        this.reviewText.classList.remove("fade-out")
      }, 400) // match transition time in CSS
    }
  }
}

export default ReviewTabsModule
