import { useEffect } from "react"
import { useSelector } from "react-redux"
import { typeHq } from "../types/typeshq"
import Header from "../componentes/Header/Header"
import HqCard from "../componentes/HqCard/HqCard"


function CartPage(){

    const cart = useSelector((state: {cart: typeHq[]}) => state.cart)

    useEffect(() => {
      console.log(cart)
    },[cart])
    return(
       <>
        <Header showCartBag={false} />
        <main>
          {cart.length === 0?"O carrinho está vazio":<CartList cart={cart}/>}
          
        </main>
       </>
    )
}

function CartList(props: {cart: typeHq[]}){
    return(
      <section id="bagList">
        {props.cart.map((hq, index) => {
          return(
            <div>

            </div>
          )
        })}
      </section>
    )
}

export default CartPage