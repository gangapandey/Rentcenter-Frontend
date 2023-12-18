
import { RouterProvider } from 'react-router-dom'

import router from './route'
import Navbar from './global/component/navbar/Navbar'
import Footer from './global/component/footer/Footer'
function App() {
  

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
