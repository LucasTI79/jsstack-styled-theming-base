import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext'

import themes from './styles/themes/'

class App extends React.Component {

  state = {
    changed: false
  }

  componentDidMount(){
    console.log('componentDidMount executed');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate',{
      currentState: this.state,
      prevState,
      prevProps,
    })
  }

  componentDidCatch(error, info){
    console.log({ error, info })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate',{
      currentState: this.state,
      nextState,
      nextProps,
    })

    return 1;
  }

  render(){
    console.log('rendered')
    return (
      <ThemeProvider>
        {/* <button onClick={() => this.setState({ changed: true })}>
          Change state
        </button> */}
        <ThemeContext.Consumer>
          { ({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          ) }
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  };
}

export default App;
