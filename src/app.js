import { SimplerFetch } from "./modules";
import "./style.scss";

const url = 'users'
const users = new SimplerFetch(url);

users.getRespond();
