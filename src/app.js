// import { simpleRequest }  from "./modules/xhr";
import Respondy from "./modules/fetch";
import "./style.scss";

const url = 'users'
const users = new Respondy(url);

users.getRespond();
