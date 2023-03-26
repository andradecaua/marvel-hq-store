import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { typeHq } from "../types/typeshq"
import Header from "../componentes/Header/Header"
import styled from "styled-components"
import { decrementItemToCart } from "../reducer/cartReducer"


function CartPage(){

    const cart = useSelector((state: {cart: typeHq[]}) => state.cart)
    const meiosDePagamento = ["Pix", "Boleto", "Cartão de Crédito"]

    useEffect(() => {
      
    },[cart])

    return(
       <>
        <Header showCartBag={false} />
        <main>
          {cart.length === 0?"O carrinho está vazio":
          <>
          <CartList cart={cart}/>
          <FormPedido>
              <label>
                Nome
              </label>
              <input type="text" style={{width: 100, height: 20}}/>
              <label>
                Email
              </label>
              <input type="email" style={{}}/>
              <select>
                {meiosDePagamento.map((meio, index) => {
                  return(
                    <option value={meio} key={index}>
                      {meio}
                    </option>
                  )
                })}
              </select>
              <button style={{width: 100, height: 20}}>
                Enviar Pedido
              </button>
          </FormPedido>
          </>
          }
        </main>
       </>
    )
}

function CartList(props: {cart: typeHq[]}){
    const dispatch = useDispatch()
    return(
      <ListCart id="bagList">
        {props.cart.map((hq, index) => {
          return(
            <ItemCart key={index} style={{justifySelf: "center"}}>
              <DecrementButton onClick={() => dispatch(decrementItemToCart(hq))}>
                X
              </DecrementButton>
              <ImageHqCart src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`} height={100} alt={hq.title}  />
              <IncrementDecrementAreaitem>
                <ButtonIncrementOrDecrement>+</ButtonIncrementOrDecrement>
                <span>{hq.quant}</span>
                <ButtonIncrementOrDecrement>-</ButtonIncrementOrDecrement>
              </IncrementDecrementAreaitem>
            </ItemCart>
          )
        })}
      </ListCart>
    )
}

const FormPedido = styled.form`
  justify-self: center;
  display: grid;
  grid-template-columns: 100%;

  label{
    position: relative;
    top: 10px;
    z-index: 2;
    background-color: white;
    width: max-content;
    font-size: 0.7rem
  }

  input{
    width: 100px;
    height: 20px;
    position: relative;
  }

  input[type="email"]:focus{
    border: 1px solid red;
    outline: "none"
  }

  select{
    width: 100px;
  }

`


const IncrementDecrementAreaitem = styled.div`
  display: flex;
  justify-content: space-around;
`

const ButtonIncrementOrDecrement = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  align-items: center;

`

const ItemCart = styled.section`
  display: grid;
  max-width: 200px;
  align-items: center;
  justify-self: start;
  grid-template-columns: 70px 70px;
  grid-template-rows: 50% 50%;
  column-gap: 2px;
`

const DecrementButton = styled.button`
  border: none;
  color: red;
  font-weight: bold;
  font-size: 1.1rem;
  background-color: transparent;
  justify-self: start;
  align-self: start;
  height: 20px;
  width: 20px;
  grid-row: 1;
`

const ListCart = styled.nav`
  display: grid;
  gap: 10px;
  justify-self: start;
  overflow: scroll;
  width: 200px;
  grid-auto-rows: 100px;
  width: 100vw;
`

const ImageHqCart = styled.img`
  filter: drop-shadow(0px 1px 2px black);
  grid-column: 1;
  grid-row: 1/3;
`

export default CartPage