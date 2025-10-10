export default class FormModule {
  constructor(formSelector, thanksSelector) {
    this.form = document.querySelector(formSelector)
    this.form.addEventListener("submit", (event) => {
      this.handleSubmit(event)
    })
    this.thanksMessage = document.querySelector(thanksSelector)
  }
  handleSubmit(event) {
    // prevent form default behaviours
    event.preventDefault()
    // Displaying the thankyou message and hiding the form
    this.thanksMessage.classList.add("contact__thankyou--visible")
    this.form.style.display = "none"
  }
}
