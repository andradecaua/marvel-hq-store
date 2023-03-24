import { store } from "../store/store"
import { useEffect } from "react"
import Header from "../componentes/Header/Header"

function CartPage(){
    useEffect(() => {
        console.log(store.getState())
    },[])
    return(
       <main>
        <Header showCartBag={false} />
       </main>
    )
}

export default CartPage