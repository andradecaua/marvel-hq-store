import styled from "styled-components"

function Header(){
    return(
        <HeaderStyled>
            <TitleStyled>
                Marvel HQ'Store
            </TitleStyled>
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