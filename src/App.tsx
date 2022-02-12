import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import { TopBar } from './components/TopBar'
import { Carousel } from './components/Carousel'
import { ThemeProvider, useTheme } from '@emotion/react'
import themeOptions from './AppTheme'
import { createTheme } from '@mui/material'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import { ContactMe } from './components/ContactMe'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'

function App() {
  const [count, setCount] = useState(0);

  const theme = createTheme(themeOptions);
  // const baseUrl = "hannah-art";
  const baseUrl = "";

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <header className="App-header">
            <TopBar>
            </TopBar>
          </header>
          <body>
            <Routes>
              <Route path={`${baseUrl}/`} element={<Carousel />} />
              <Route path={`${baseUrl}/Home`} element={<Carousel />} />
              <Route path={`${baseUrl}/Contact`} element={<ContactMe />} />
              <Route path={`${baseUrl}/Pricing`} element={<Pricing />} />
              <Route path={`${baseUrl}/Gallery`} element={<Gallery />} />
              <Route path={`${baseUrl}/Faq`} element={<Faq />} />
              <Route path={`${baseUrl}/About`} element={<About />} />
            </Routes>
          </body>
        </HashRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
