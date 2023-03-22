import styled from 'styled-components'
import addItemToBagIcon from '../../assets/add_item_to_bag.png'
import { typeHq } from '../../types/typeshq'
import "./style/hqcard.css"
import {useNavigate} from 'react-router-dom'

function HqCard(props: typeHq){
    const sourceThumbnail = `${props.thumbnail.path}.${props.thumbnail.extension}`
    const priceHQ = props.prices[0].price
    const navigate = useNavigate()
    return(
    <SectionStyled className="hqcard">
        <img className='hqimage' src={sourceThumbnail} alt=""/>
        <SpanTitle className='hqtitle' onClick={() => navigate(`/hq/${props.id}`)}>{props.title}</SpanTitle>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center"}}>
            <span style={{fontWeight: 'bold'}}>R${priceHQ}</span>
            <ShoppingBagButton><img src={addItemToBagIcon} alt="Add item to bag icon" height={35}/></ShoppingBagButton>
        </div>
    </SectionStyled>
    )
}


const ShoppingBagButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
`

const SectionStyled = styled.section`

    width: 95%;
    height: 95%;
    justify-self: center;
    text-align: center;
    display: grid;
    grid-template-rows: 70% 10% 20%;
    border: 1px solid #5a5a5a;
    background-color: rgb(250 250 250);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-width: 8px;
    border-bottom-color: #e62429;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`
const SpanTitle = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    justify-self: center;
    white-space: nowrap;
    width: 80%;
    font-weight: bold;
    transition: color 0.2s 1ms ease-in-out;
`

export default HqCard