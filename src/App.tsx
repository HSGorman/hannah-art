import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import { TopBar } from './components/TopBar'
import { Carousel } from './components/Carousel'
import { ThemeProvider, useTheme } from '@emotion/react'
import themeOptions from './AppTheme'
import { createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContactMe } from './components/ContactMe'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'

function App() {
  const [count, setCount] = useState(0);

  const theme = createTheme(themeOptions);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter basename='/hannah-art'>
          <header className="App-header">
            <TopBar>
            </TopBar>
          </header>
          <body>
            <Routes>
              <Route path="/" element={<Carousel />} />
              <Route path="/hannah-art" element={<Carousel />} />
              <Route path="/Home" element={<Carousel />} />
              <Route path="/Contact" element={<ContactMe />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Faq" element={<Faq />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </body>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
