class TabsModule {
	constructor(selector) {
		this.tabsContainer = document.querySelector(selector);

		this.tabButtons = this.tabsContainer.querySelectorAll(".tabs__item");

		this.tabContents = this.tabsContainer.querySelectorAll(".tabs__content__item");

		this.tabButtons.forEach((tabButton) => {
			tabButton.addEventListener("click", (event) =>
				this.tabClicked(event)
			);
		});
	}

	tabClicked(event) {
		const clickedButton = event.currentTarget;
		const tabId = clickedButton.dataset.tab;

		const detailsElement = this.tabsContainer.querySelector(
			`.tabs__content__item[data-tab-content="${tabId}"]`
		);

		// Remove active class from all buttons and content
		this.tabButtons.forEach((button) => button.classList.remove("active"));
		this.tabContents.forEach((content) =>
			content.classList.remove("active")
		);

		// Add active class to clicked button and corresponding content
		clickedButton.classList.add("active");
		if (detailsElement) {
			detailsElement.classList.add("active");
		}
	}
}

export default TabsModule;