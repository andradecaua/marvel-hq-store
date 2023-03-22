import styled from 'styled-components'
import "./style/hqcard.css"

type typeHq = {
        title: string,
        thumbnail: {
          path: string,
          extension: string
        },
        prices: [{
            type: string,
            price: number
          }]
    }

function HqCard(props: typeHq){
    const sourceThumbnail = `${props.thumbnail.path}.${props.thumbnail.extension}`
    const priceHQ = props.prices[0].price
    return(
    <SectionStyled className="hqcard">
        <img className='hqimage' src={sourceThumbnail} alt=""/>
        <SpanTitle className='hqtitle'>{props.title}</SpanTitle>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>{priceHQ}</span>
            <button>Adicionar ao carrinho</button>
        </div>
    </SectionStyled>
    )
}

const SectionStyled = styled.section`

    width: 98%;
    height: 98%;
    justify-self: center;
    text-align: center;
    display: grid;
    grid-template-rows: 70% 10% 20%;


`
const SpanTitle = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    justify-self: center;
    white-space: nowrap;
    width: 80%;
    font-weight: bold
`

export default HqCard