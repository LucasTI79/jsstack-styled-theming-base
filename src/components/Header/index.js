import React from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

function HOC(HeaderComponent){
  return class Component extends React.Component {
    render(){
      return(
        <ThemeContext.Consumer>
            
        {
          (value) => (
            <HeaderComponent {...value} />
          )
        }
      </ThemeContext.Consumer>
     
      )
    }
  }
}

class Header extends React.Component {
  componentDidMount(){
    console.log(this.props.theme)
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.theme !== prevProps.theme){
      console.log('tema mudou')
    }
  }

  render(){
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button 
          type="button" 
          onClick={this.props.handleToggleTheme}
          >
            {this.props.theme === 'dark' ? '🌞' : ' 🌑'}
          </button>
      </Container>
    );
  }
}

export default HOC(Header);