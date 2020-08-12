export default function simplerXHR(
  url = "",
  method = "GET",
  body = null,
  options = {}
) {
  return new Promise((resolve, reject) => {
    const finalUrl = options.urlCustom
      ? url
      : `https://jsonplaceholder.typicode.com/${url}`;
    const xhr = new XMLHttpRequest();

    xhr.open(method, finalUrl);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
}
