import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Header from './componentes/Header';
import HqCard from './componentes/HqCard/HqCard';
import { filterHqsWithNoImageAvaliable } from './services/filterHqsWithNoImageAvaliable';
import { getHqs } from './services/getHqs';

function App() {

  type typeHqs = {
    data: {
      results: [{
        title: string,
        thumbnail: {
          path: string,
          extension: string
        },
        prices: [{
          type: string,
          price: number
        }]
      }]
    }
  }

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
    <div className="App">
      <Header />
      <MainStyled>
        {hqs === undefined?'':hqs.data.results.map(
          (hq, indexHQ) => {
            return <HqCard title={hq.title} thumbnail={hq.thumbnail} prices={hq.prices} key={indexHQ} />
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
    grid-template-columns: 50% 50%;
    row-gap: 20px;
    padding-top: 5px;
`

export default App;
