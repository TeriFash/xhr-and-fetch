import { simpleRequest }  from "./modules/xhr";
// import { simpleRequest }  from "./modules/fetch";
import "./style.scss";

const urlType = 'users'
const body = {
    name: 'Test name',
    age: 20
}
const usersGet = simpleRequest(urlType)
const usersPost = simpleRequest(urlType, 'POST', body)

usersGet
    .then(data => console.log(data))
    .catch(err => console.log(err));
     
usersPost
    .then(data => console.log(data))
    .catch(err => console.log(err));

// window.s = data;

// document.getElementById("app").innerHTML = `<div>${select}</div>`;
