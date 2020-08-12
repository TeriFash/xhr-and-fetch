export default class SimplerSearch  {
    constructor() {
        this.#setup()
    }
    
    #setup() {
        const searchInput = document.forms['search-form'].querySelector('input')
        
        searchInput.addEventListener('keyup', this.getFiltered)
    }

    getFiltered(e) {
        const term = e.target.value.toLowerCase()
        const dataList = document.querySelectorAll('.wrapper__list *')
        
        Array.from(dataList).forEach(function(item){
            const title = item.textContent

            if (title.toLowerCase().indexOf(term) != -1) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    }
    
  }