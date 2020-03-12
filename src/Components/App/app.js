import React from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import {Provider, Consumer} from '../../context';
import SearchBox from '../SearchBox';
import News from '../News';

import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';


const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
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
                  <ThemeProvider theme={context.darkMode ? darkTheme : lightTheme}>
                      <AppContainer>
                        <SearchBox 
                            searchTerm={context.searchTerm} 
                            updateContextSearchTerm={context.updateSearchTerm}
                            isDark={context.darkMode} 
                            toggleIsDark={context.toggleDarkMode}
                        />
                        <News searchTerm={context.countryCode}/>
                    </AppContainer>
                  </ThemeProvider>
                
              )}
                
          </Consumer>
      </Provider>
    
  );
}

export default App;