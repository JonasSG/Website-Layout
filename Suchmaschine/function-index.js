let Itemkey="ItemsStorage"

let ItemsStorage = getShoppingItemsFromLocalStorage()

update() ;

function getShoppingItemsFromLocalStorage() {
    let items = localStorage.getItem(Itemkey);

    if (items == null || items == '') {
        items = [];
    } else {
        items = items.split(',');
    }

    return items;
}


function add() {
        
    
        let Items = textfield.value;
        textfield.value = ""
        
        if (Items != null) {
        ItemsStorage.push(Items);
        localStorage.setItem(Itemkey,ItemsStorage);
        }
      update();
    }

function del(itemindex) {
        ItemsStorage.shift(itemindex);
        localStorage.setItem(Itemkey,ItemsStorage);
        update();
}

function update() {
        
        Liste.innerHTML = `

        `;
        
        for (let i = 0; i < ItemsStorage.length; i++) {
            
            Liste.innerHTML += `
                <div>
                <li>
                    ${ItemsStorage[i]}
                </li>
                </div>            
            `;
            
            
        }
        
        
          
        }
        
        
        
        
        
       
       
        






