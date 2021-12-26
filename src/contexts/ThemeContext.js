import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  // componentDidUpdate(_, prevState){
  //   if(prevState.theme !== this.state.theme){
  //     console.log('Tema mudou')
  //   }
  // }

  state = {
    theme: JSON.parse(localStorage.getItem('theme')) || 'dark'
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({ 
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }), () => {
      localStorage.setItem('theme', JSON.stringify(this.state.theme))
    });
  }
  render(){
    return (
      <ThemeContext.Provider 
        value={{
          theme: this.state.theme, 
          handleToggleTheme: this.handleToggleTheme
          }}
        >
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}