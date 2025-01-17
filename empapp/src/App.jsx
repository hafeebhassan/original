import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddEmp from './components/AddEmp'
import Navbar from './components/Navbar'
import { Route ,Routes} from 'react-router-dom'
import DataTable from './components/DataTable'

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/addemp'element={<AddEmp/>}/>
          <Route path='/datatable'element={<DataTable/>}/>
        </Routes>
        
      </div>
      
    </>
  )
}

export default App
