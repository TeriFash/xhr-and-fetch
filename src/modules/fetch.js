const getDefault = (url = '', method = 'GET', options = {}) => {
  let mainUrl = options.urlCustom ? url : `https://jsonplaceholder.typicode.com/${url}`

  async function getData() {
    let url = mainUrl;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  
  async function renderData() {
    let dataObg = await getData();
  
    let html = '';
    dataObg.map((item, i) => {
        let htmlSegment = `<li class="data-item-${i+1}">${item.name}</li>`;
  
        html += htmlSegment;
    });
  
    let container = document.querySelector('#target-select');
    container.innerHTML = html;
  }

  renderData();
}

async function postDefault(url = '', options = {}) {
  let mainUrl = options.urlCustom ? url : `https://jsonplaceholder.typicode.com/${url}`
  let data = {
    name: 'Sara'
  }
  let fetchData = { 
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  }
  try {
      let res = await fetch(mainUrl, fetchData);
      console.log(await res);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

export default class Respondy {
  constructor(url, options) {
    // this.$el = document.querySelector(selector);
    this.options = options;
    this.url = url;

    // this.#render();
    // this.#setup();
  }

  getRespond() {
    getDefault(this.url)
  }

  postRespond() {
    postDefault(this.url)
  }
}