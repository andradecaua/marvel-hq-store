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
    <div className="App" style={{display: 'grid'}}>
      <Header />
      <MainStyled>
        {
        hqs === undefined?'':hqs.map(
          (hq, indexHQ) => {
            return <HqCard description={hq.description} id={hq.id} title={hq.title} thumbnail={hq.thumbnail} prices={hq.prices} key={indexHQ} />
          }
          )
        }
      </MainStyled>
      <div style={{display: 'flex', justifyContent: 'space-around', fontSize: 20}}>
        {
        arrayForPagination.current?.map((_, index) => {
          return(
            <span key={index} onClick={() => {
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

export default App;
