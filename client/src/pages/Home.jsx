import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/main">
            <button>Let's Go</button>
        </Link>
    </div>
  )
}

export default Home
