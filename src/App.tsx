import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import { TopBar } from './components/TopBar'
import { Carousel } from './components/Carousel'
import { ThemeProvider, useTheme } from '@emotion/react'
import themeOptions from './AppTheme'
import { createTheme } from '@mui/material'

function App() {
  const [count, setCount] = useState(0);

  const theme = createTheme(themeOptions);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <header className="App-header">
        <TopBar>

        </TopBar>
      </header>
      <body>
        <Carousel/>
      </body>
      </ThemeProvider>
    </div>
  )
}

export default App
