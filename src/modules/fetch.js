const simpleRequest = (url = '', method = 'GET', body = null, options = {}) => {
  const finalUrl = options.urlCustom ? url : `https://jsonplaceholder.typicode.com/${url}`
  let optionsMain = {}

  if(method === 'POST') {
    optionsMain = {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  } else {
    optionsMain = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  return fetch(finalUrl, optionsMain).then(response => {
    return response.json()
  })
}

export { simpleRequest }