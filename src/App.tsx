import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Header from './componentes/Header/Header';
import HqCard from './componentes/HqCard/HqCard';
import { filterHqsWithNoImageAvaliable } from './services/filterHqsWithNoImageAvaliable';
import { getHqs } from './services/getHqs';
import { typeHqs } from './types/typeshq';

function App() {

  var hqsValue = useRef<typeHqs>()
  const [hqs, setHqs] = useState<typeHqs>()


  useEffect(() => {
    (async () => {
      hqsValue.current = await getHqs()
      hqsValue.current = filterHqsWithNoImageAvaliable(hqsValue.current as typeHqs)
      setHqs(hqsValue.current as typeHqs)
    })()
  },[])

  return (
    <div className="App" style={{display: 'grid'}}>
      <Header />
      <MainStyled>
        {hqs === undefined?'':hqs.data.results.map(
          (hq, indexHQ) => {
            return <HqCard id={hq.id} title={hq.title} thumbnail={hq.thumbnail} prices={hq.prices} key={indexHQ} />
          }
          )
        }
      </MainStyled>
    </div>
  );
}

const MainStyled = styled.main`
    display: grid;
    grid-auto-rows: 250px;
    grid-template-columns: 48% 48%;
    row-gap: 20px;
    column-gap: 4%;
    padding-top: 5px;
    width: 100vw;
    justify-self: center;
`

export default App;
