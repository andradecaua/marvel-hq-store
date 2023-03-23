import { Link } from "react-router-dom"
import styled from "styled-components"
import shoppingbag from '../../assets/add_item_to_bag_white.png'


function Header(){
    return(
        <HeaderStyled>
            <TitleStyled>
                Marvel HQ'Store
            </TitleStyled>
            <nav>
                <Link to="/cart"><img src={shoppingbag} alt="Bag de compras" height={40} /></Link>
            </nav>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    height: 80px;
    width: 100vw;
    background-color: #e62429;
    align-items: center;
    display: flex;
    justify-content: space-around;
`

const TitleStyled = styled.h1`
    margin: 0;
    font-size: 2rem;
    text-align: center;
    color: white;
`

export default Header