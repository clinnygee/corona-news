import React from 'react';
import styled from 'styled-components';
import {Provider, Consumer} from '../../context';
import SearchBox from '../SearchBox';
import News from '../News';

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #1a1a1b;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 30px 30px 30px;
`



function App() {


    
  return (
      <Provider>
          <Consumer>
              {context => (
                <AppContainer>
                    <SearchBox searchTerm={context.searchTerm} updateContextSearchTerm={context.updateSearchTerm}/>
                    <News searchTerm={context.searchTerm}/>
                </AppContainer>
              )}
                
          </Consumer>
      </Provider>
    
  );
}

export default App;