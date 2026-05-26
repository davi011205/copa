import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import Navbar from './components/NavBar/Navbar'
import PackOpening from './components/PackOpening/PackOpening'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <PackOpening></PackOpening>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
