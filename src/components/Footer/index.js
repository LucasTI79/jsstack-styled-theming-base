import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default function Footer({ onToggleTheme, selectedTheme }) {
  const { theme, handleToggleTheme  } = React.useContext(ThemeContext);
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        type="button" 
        onClick={handleToggleTheme}
        >
           {theme === 'dark' ? '🌞' : ' 🌑'}
        </button>
    </Container>
  );
}