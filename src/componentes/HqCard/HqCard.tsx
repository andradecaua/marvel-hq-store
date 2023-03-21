import styled from 'styled-components'

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
    <SectionStyled>
        <ImgCard src={sourceThumbnail} />
    </SectionStyled>
    )
}

const ImgCard = styled.img`
    border: 4px outset black;
    width: 180px
`

const SectionStyled = styled.section`
    width: 200px;
    justify-self: center;
`


export default HqCard