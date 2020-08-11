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

export default class SimplerFetch {
  constructor(url, options = {}) {
    // this.$el = document.querySelector(selector);
    this.options = options;
    this.url = options.urlSet ? url : `https://jsonplaceholder.typicode.com/${url}`;

    // this.#render();
    // this.#setup();
  }

  async getData() {
    try {
        let res = await fetch(this.url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }

  async renderData( elem = 'li', selector = '#target-select') {
    let dataObg = await this.getData()
    let html = ''
    let container = document.querySelector(selector)

    dataObg.map((item, i) => {
        let htmlSegment = `<${elem} class="data-item-${i+1}">${item.name}</${elem}>`
  
        html += htmlSegment
    });
  
    container.innerHTML = html
  }

  getRespond() {
    this.renderData()
  }

  async postRespond() {
    const headers = {
      'Content-Type': 'application/json'
    }
    let fetchData = { 
      method: this.options.method || 'POST', 
      body: JSON.stringify(this.options.body || {}),
      headers: this.options.headers || headers
    }
    try {
        let res = await fetch(this.url, fetchData);
        console.log(await res, 'res');
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
}