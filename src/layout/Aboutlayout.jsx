import AboutContent from "../components/AboutContent"
import Header from "../components/Header"
import Footer from "../components/footer"
// import { Outlet } from "react-router-dom"


const Aboutlayout = () => {
  return (
    <div>
      <div className='main-cont'>
        <Header/>
        <AboutContent/>
        <Footer/>
    </div>
    </div>
  )
}

export default Aboutlayout