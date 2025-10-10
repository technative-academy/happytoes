class SearchModule {
    constructor(selector) {

        // listen to changes in the search form
        this.searchInput = document.querySelector(selector);
        this.searchInput.addEventListener("input", this.updateSearchValue.bind(this));
        this.productNumber = document.querySelector('.products__count__number');

        // initial search value, which will be empty
        this.searchValue = "";
        // track visible product count
        this.productCount = 0;
    }

    // check what search term has been entered
    updateSearchValue() {
        // trim() removes any spaces before/after the input
        // toLowerCase() makes the entered text lowercase
        this.searchValue = this.searchInput.value.trim().toLowerCase();

        // reset product count and show or hide each one based on the search term
        const productElements = document.querySelectorAll(".listings-item");
        this.productCount = productElements.length;
        this.productNumber.innerHTML = this.productCount;
        productElements.forEach(this.showOrHideProduct.bind(this));
    }

    showOrHideProduct(productElement) {
        // if no search value is set, show the product
        if (this.searchValue.length === 0) {
            productElement.classList.remove("hide");

            // if a search term has been set,
            // only display the product if its name matches the search term
        } else {
            // get the name of the product from its product-name element
            const productName = productElement
                .querySelector(".listings__title")
                .textContent.toLowerCase();
            if (productName.includes(this.searchValue)) {
                productElement.classList.remove("hide");
            } else {
                productElement.classList.add("hide");
                this.productCount--;
                this.productNumber.innerHTML = this.productCount;
            }
        }
    }
}

export default SearchModule;