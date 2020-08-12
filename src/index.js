import { SimplerFetch } from "./modules"
import "./style.scss"

{
    const dataHead = [
        'XMLHttpRequest and Fetch in JavaScript',
        'Open chrome dev-tools console'
    ]
    
    dataHead.map((item, i) => {
        const node = !i ? 'h1' : 'p'
        
        document.querySelector(`#app ${node}`).innerHTML = item
    })
}

const usersOpt = {
    // element: 'span'
}
const users = new SimplerFetch('users', usersOpt)

users.getRespond()

