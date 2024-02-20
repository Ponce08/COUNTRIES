import { Routes, Route } from 'react-router-dom'
import Welcome from "./components/welcome/Welcome"
import Home from './components/home/Home'
import Detail from './components/detail/Detail'
import Form from './components/form/Form'
import Form2 from './components/form/Form2'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/crear_actividad' element={<Form/>}/>
        <Route path='/crear_actividad2' element={<Form2/>}/>

        {/* <Route path='/seleccionar_pais' element={<BuscarGame/>}/> */}
      </Routes>
    </div>
    
  )
};

export default App
