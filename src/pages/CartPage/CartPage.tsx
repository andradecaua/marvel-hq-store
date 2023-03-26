import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { typeHq } from "../../types/typeshq"
import Header from "../../componentes/Header/Header"
import styled from "styled-components"
import { decrementItemToCart, incrrementQuantToItem } from "../../reducer/cartReducer"
import "./styles/cartpage.css"
import NullCart from "../../componentes/NullCart/NullCart"

function CartPage(){

    const cart = useSelector((state: {cart: typeHq[]}) => state.cart)
    const meiosDePagamento = ["Pix", "Boleto", "Cartão de Crédito"]
    
    

    useEffect(() => {
      
    },[cart])

    return(
       <>
        <Header showCartBag={false} />
        <main style={{display: 'grid', minHeight: "100vh"}}>
          {cart.length === 0?<NullCart/>:
          <>
          <StyledTitle>Carrinho de Compras</StyledTitle>
          <CartList cart={cart}/>
          <StyledTitle>Pagamentos</StyledTitle>
          <FormPedido>
              <input type="text" />
              <label id="label_nome">
                Nome
              </label>
              <input type="email"/>
              <label id="label_email">
                Email
              </label>
              <PaymentMethodsSelect>
                {meiosDePagamento.map((meio, index) => {
                  return(
                    <option value={meio} key={index}>
                      {meio}
                    </option>
                  )
                })}
              </PaymentMethodsSelect>
              <SendOrderButton>
                Enviar Pedido
              </SendOrderButton>
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
                <ButtonIncrementOrDecrement onClick={() => {
                  dispatch(incrrementQuantToItem(hq))
                  }}>+</ButtonIncrementOrDecrement>
                <span>{hq.quant}</span>
                <ButtonIncrementOrDecrement>-</ButtonIncrementOrDecrement>
              </IncrementDecrementAreaitem>
            </ItemCart>
          )
        })}
      </ListCart>
    )
}

const PaymentMethodsSelect = styled.select`
  justify-self: center;
  grid-column: 1/3;
  height: 25px;
`

const SendOrderButton = styled.button`
  background-color: rgb(230, 36, 41);
  border: 1px solid rgb(230, 36, 31); 
  color: white;
  border-radius:2px;
  height: 40px;
  width: 150px;
  grid-row: 4;
  grid-column: 1/3;
  justify-self: center;
  font-size: 1rem
`

const StyledTitle = styled.h2`
  justify-self: center      
`

const FormPedido = styled.form`
  justify-self: center;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 12px 25px 30px;
  width: 200px;
  justify-self: center;
  gap: 10px;

  label{
    position: relative;
    top: 17px;
    z-index: 2;
    background-color: white;
    width: max-content;
    font-size: 0.7rem;
    margin-left: 5px;
    transition: color 0.5s 1ms ease, top 0.2s 1ms ease-in-out ;
  }


  input{
    width: 100px;
    height: 20px;
    position: relative;
    outline: none;
  }

  input[type="text"]{
    grid-row: 2;
    transition: border 0.5s 1ms ease;
    border: 1px solid gray;
    border-radius: 5px;
    :focus + label#label_nome{
      color: rgb(230, 36, 41);
      top: 10px;
    }
    :focus{
      border: 1px solid rgb(230, 36, 41);
    }
  }

  input[type="email"]{
    grid-row: 2;
    transition: border 0.5s 1ms ease;
    border: 1px solid gray;
    border-radius: 5px;
    
    :focus + label#label_email{
      color: rgb(230, 36, 41);
      top: 10px;
    }
    :focus{
      border: 1px solid rgb(230, 36, 41);
    }
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