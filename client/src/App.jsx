import { Routes, Route } from 'react-router-dom'
import Welcome from "./components/welcome/Welcome"
import Home from './components/home/Home'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
        {/* <Route path='/detail/:id' element={<DetailGame/>}/> */}
        {/* <Route path='/crear_juego' element={<Form/>}/>
        <Route path='/buscar_juego' element={<BuscarGame/>}/> */}
      </Routes>
    </div>
    
  )
};

export default App
