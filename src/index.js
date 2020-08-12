import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { SimplerFetch } from "./modules";
import SimplerSearch from "./modules/search";
import "./style.scss";

// {
//   const dataHead = ["XMLHttpRequest and Fetch in JavaScript"];

//   dataHead.map((item, i) => {
//     const node = !i ? "h1" : "p";

//     document.querySelector(`#app ${node}`).innerHTML = item;
//   });
// }

const usersOpt = {
  // element: 'span'
};
const users = new SimplerFetch("users", usersOpt);

users.getRespond();

const usersSearch = new SimplerSearch();
