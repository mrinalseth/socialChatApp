import React from 'react'
import Sidebar from "../components/Sidebar"
import Chat from "../components/Chat"
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* <Navbar/> */}
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home