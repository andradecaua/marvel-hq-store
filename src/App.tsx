import React, {useEffect, useRef, useState} from 'react';
import { createArrayForPagination } from './services/createArrayOfHqsForPagination';
import { filterHqsWithNoImageAvaliable } from './services/filterHqsWithNoImageAvaliable';
import { getHqs } from './services/getHqs';
import { typeHq, typeHqs } from './types/typeshq';

import styled from 'styled-components';
import Header from './componentes/Header/Header';
import HqCard from './componentes/HqCard/HqCard';

function App() {

  var hqsValue = useRef<typeHqs>()
  var arrayForPagination = useRef<typeHq[][]>()
  const [hqs, setHqs] = useState<typeHq[]>()
  const [active, setActivePage] = useState(1)
  const [limitHqForPage, setLimitHqForPage] = useState(6)

  useEffect(() => {

    (async () => {
      hqsValue.current = await getHqs()
      hqsValue.current = filterHqsWithNoImageAvaliable(hqsValue.current as typeHqs)
      arrayForPagination.current = createArrayForPagination(limitHqForPage, hqsValue.current.data.results)
      setHqs(arrayForPagination.current[active])
    })()

  },[active, limitHqForPage])

  return (
    <div className="App" style={{display: 'grid', rowGap: 10}}>

      <Header />

      <div>
        <SelectLimitForPage defaultValue={limitHqForPage} onChange={(event) => setLimitHqForPage(Number.parseInt(event.currentTarget.value))}>
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
        </SelectLimitForPage>
      </div>

      <MainStyled>
        {
        hqs === undefined?'':hqs.map(
          (hq, indexHQ) => {
            return <HqCard description={hq.description} id={hq.id} title={hq.title} thumbnail={hq.thumbnail} prices={hq.prices} key={indexHQ} />
          }
          )
        }
      </MainStyled>
      <div style={{display: 'flex', justifyContent: 'space-around', fontSize: 20, width: "90vw", justifySelf:"center"}}>
        {
        arrayForPagination.current?.map((_, index) => {
          let background = active == index+1?"rgba(255, 0, 0, 0.7)":""
          let color = active === index+1?"white":"black"
          return(
            <SpanPagination style={{color: color,backgroundColor: background}} key={index} onClick={(event) => {
              setActivePage(index+1)
            }}>{index+1}</SpanPagination>
          )
        })
        }
      </div>
    </div>
  );
}

const SpanPagination = styled.span`
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s 1ms ease-in-out, color 0.2s 1ms ease-in-out;
`

const MainStyled = styled.main`
    display: grid;
    grid-auto-rows: 250px;
    grid-template-columns: 48% 48%;
    row-gap: 20px;
    column-gap: 2%;
    padding-top: 5px;
    width: 100vw;
    justify-self: center;
    `

const SelectLimitForPage = styled.select`
    width: 100px;
    height: 25px;
    align-self: center;
    margin-left: 1%;
    outline: none;
`

export default App;
