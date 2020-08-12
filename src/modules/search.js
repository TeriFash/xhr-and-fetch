export default class SimplerSearch {
  constructor() {
    this.#setup();
  }

  #setup() {
    const searchInput = document.forms["search-form"].querySelector("input");

    searchInput.addEventListener("keyup", this.getFiltered);
  }

  getFiltered(e) {
    const term = e.target.value.toLowerCase();
    const dataList = document.querySelectorAll('[data-type="content"] > *');

    Array.from(dataList).forEach(function (item) {
      const title = item.textContent;

      if (title.toLowerCase().indexOf(term) != -1) {
        // item.style.display = 'block'
        item.classList.remove("is-hide");
        item.classList.add("is-visible");
      } else {
        // item.style.display = 'none'
        item.classList.toggle("is-visible");
        item.classList.add("is-hide");
      }
    });
  }
}
