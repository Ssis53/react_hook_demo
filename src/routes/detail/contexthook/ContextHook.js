import React, { createContext, useState } from 'react'
import { Button } from 'antd';
import ContextChild from './ContextChild';

const themes = {
  light: {
    color: '#000',
    backgroud: '#eee'
  },
  dark: {
    color: "#ffffff",
    background: "#222222"
  }
}
export const ThemesContext = createContext(themes);

export default function ContextHook(props) {
  const [ theme, setTheme ] = useState(themes.dark);
  function handleClick() {
    if(theme.color === themes.light.color) {
      setTheme(themes.dark);
      return;
    }
    setTheme(themes.light);
  }
  return (
    <div className="contextHookTest">
      <Button onClick={handleClick} type="primary">change</Button>
      <ThemesContext.Provider value={theme}>
        <ContextChild />
      </ThemesContext.Provider>  
    </div>
  )
}

