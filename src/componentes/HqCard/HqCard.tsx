import styled from 'styled-components'
import "./style/hqcard.css"

type typeHq = {
        title: string,
        thumbnail: {
          path: string,
          extension: string
        }
    }

function HqCard(props: typeHq){
    const sourceThumbnail = `${props.thumbnail.path}.${props.thumbnail.extension}`
    return(
    <SectionStyled className="hqcard">
        <img className='hqimage' src={sourceThumbnail} alt=""/>
    </SectionStyled>
    )
}

const SectionStyled = styled.section`
    width: 200px;
    height: 250px;
    justify-self: center;
`


export default HqCard