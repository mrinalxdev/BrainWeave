import React from 'react'
import { Link } from 'react-router-dom'
import "./pages.css"

const Home = () => {
  return (
    <div>
        <nav className='navbar'>
            <span>🤝</span>
        </nav>

        <div className="main">
          <h1>A Project where you can express your thoughts and store it in a decentralized smart contract. </h1>
          <Link to="/main" className='main_button'>
            <button>
              Let's Go
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Home
