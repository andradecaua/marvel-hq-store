import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Header from "../componentes/Header/Header"
import { incrementItemToCart } from "../reducer/cartReducer"
import { getHQ } from "../services/getHq"
import { typeHq, typeHqs } from "../types/typeshq"


function HqPage(){

    const {id} = useParams()
    const [hq, setHQ] = useState<typeHq>() 
    const hqRef = useRef<typeHqs>()

    useEffect(() => {
        (async () => {
            if(id !== undefined){
                hqRef.current = await getHQ(id) as typeHqs
                setHQ(hqRef.current.data.results[0])
            }
        })()
    },[id])

    return(
        <div style={{display: 'grid', rowGap: 10}}>
            <Header showCartBag={true} />
            <main>
                {hq === undefined?"":<HqPageComponent hq={hq} />}
            </main>
        </div>
    )
}

function HqPageComponent(props: {hq: typeHq}){

    const hq = props.hq 
    const dispatch = useDispatch()

    return(
        <section>
            <DivDadosHq style={{display: 'grid', textAlign: 'center'}}>
                <ThumbanilHQ src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`} width={250} height={400} style={{justifySelf: 'center'}} />
                <SpanTitle>{hq.title}</SpanTitle>
                <SpanPrice>R${hq.prices[0].price}</SpanPrice>
                <Descripton>{hq.description}</Descripton>
                <AddToCartButton onClick={() => dispatch(incrementItemToCart(hq))}>Adicionar ao carrinho</AddToCartButton>
            </DivDadosHq>
        </section>
    )
}

const AddToCartButton = styled.button`
    height: 40px;
    width: 200px;
    background-color: #e62429;
    border: 1px solid #e62429;
    font-size: 16px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    justify-self: center;
`

const ThumbanilHQ = styled.img`
    width: 250px;
    height: 400px;
    justify-self: center;
    filter: drop-shadow(2px 5px 5px black);
    margin-bottom: 10px;
`

const Descripton = styled.p`
    text-align: left;
    width: 95%;
    justify-self: center;
    height: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
`

const DivDadosHq = styled.section`
    display: grid;
    text-align: center;
    height: 400px;
`

const SpanTitle = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    justify-self: center;
    white-space: nowrap;
    width: 80%;
    font-weight: bold;
    font-size: 1.5rem;
    transition: color 0.2s 1ms ease-in-out;
    cursor: pointer;
`

const SpanPrice = styled.span`
    font-weight: bold;
    font-size: 1.4rem;
`

export {HqPage}