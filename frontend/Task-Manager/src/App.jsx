import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Task from './components/Task'
import CreateTask from './components/CreateTask'
import UpdateTask from './components/UpdateTask'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Task/>}></Route>
        <Route path='/create' element={<CreateTask/>}></Route>
        <Route path='/update/:id' element={<UpdateTask/>}></Route>
        <Route path='*' element={<h1>Page not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App