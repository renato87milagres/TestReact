import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions'


const products = {
    items: [
        //array of items 
        {id:1,title:'Sledgehammer',price:125.75,img:Item1},
        {id:2,title:'Axes',  price:190.50,img: Item2},
        {id:3,title:'Bandsaw', price:562.13,img: Item3},
        {id:4,title:'Chisel', price:12.9,img:Item4},
        {id:5,title:'Hacksaw,', price:18.45,img: Item5},
       
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = products,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item) //if true
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price //update price
                 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id) //identify item to remove
        let new_items = state.addedItems.filter(item=> action.id !== item.id) //new array withou the item id
      if(new_items.length >=1){  
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
         return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
        }else{
            let newTotal = 0
            return{
                ...state,
                addedItems: new_items,
                total:newTotal
            }
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 //update quantity
          let newTotal = state.total + addedItem.price //update price
          return{
              ...state,
              total: newTotal // return total
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    

    
    return state
}

export default cartReducer