import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Product from './Product'
import Product1 from './Product1'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product1 />} />
        <Route path='/home/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App