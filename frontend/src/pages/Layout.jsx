import Navbar from '../components/nav/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Router from '../routes/Router'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Router/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
