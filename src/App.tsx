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
          <option value={2}>2</option>
          <option value={4}>4</option>
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
          return(
            <span style={{color: active === index+1?"red":"black"}} key={index} onClick={(event) => {
              setActivePage(index+1)
            }}>{index+1}</span>
          )
        })
        }
      </div>
    </div>
  );
}

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
