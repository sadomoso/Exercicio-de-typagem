import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Navbar from "./Funcoes/NavBar";
import Home from "./Pages/Home/Index";
import Edicao from "./Pages/Edicao/Index";
import Inscricao from "./Pages/Inscricao/Index";
import ThemeProvider from '@mui/material'
import { darktheme } from "./Form/Temas";
import {Stack, Box} from '@mui/material'

function App() {


  return (
    <Box component={'body'} bgcolor='black' color='white' height={'100vh'}>
      <Router>
          <Navbar/>
          
        <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path='/edicao/:id' element={<Edicao />} />
        <Route  path='/inscricao' element={<Inscricao />} />
                 
        </Routes>

    </Router>
    </Box>
  )
}

export default App
