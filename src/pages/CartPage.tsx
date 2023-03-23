import { store } from "../store/store"

function CartPage(){
    console.log(store.getState())
    return(
        <>
            Cart Page
        </>
    )
}

export default CartPage