const staticUrl = "https://jsonplaceholder.typicode.com/";

const getTemplate = (data = [], elem) => {
  const elemWwrap = elem ? "div" : "ul";
  const elemItem = elem ?? "li";

  const items = data.map((item, i) => {
    return `
      <${elemItem} class="is-visible list-group-item ">${item.name}</${elemItem}>
    `;
  });

  return `
      <${elemWwrap} data-type="content" class="content__list list-group">
        ${items.join("")}
      </${elemWwrap}>
  `;
};

export default class SimplerFetch {
  constructor(url, options = {}) {
    this.options = options;
    this.url = options.urlCustom ? url : `${staticUrl}${url}`;
    this.$el = document.querySelector(options.selector || "#wrapper");

    // this.#render();
    // this.#setup();
  }

  async render() {
    const { element } = this.options;
    let data = await this.getData();

    this.$el.innerHTML = getTemplate(data, element);

    // return data
  }

  async getData() {
    try {
      let res = await fetch(this.url);

      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async getRespond() {
    let data = await this.render();
    return data;
  }

  async postRespond() {
    const headers = {
      "Content-Type": "application/json",
    };
    let fetchData = {
      method: this.options.method || "POST",
      body: JSON.stringify(this.options.body || {}),
      headers: this.options.headers || headers,
    };
    try {
      let res = await fetch(this.url, fetchData);
      console.log(await res, "res");
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
}
