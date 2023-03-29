import React from 'react'
import { NavLink, useRoutes, useInRouterContext } from 'react-router-dom'
import routes from './routes'
import Header from './conponents/Header'


export default function App() {
  const element = useRoutes(routes)
  
  console.log('@',useInRouterContext())

  return (
    <div>
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* router link */}
            <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item" end to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* Router */}
              {/* <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/about" />} />
              </Routes> */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
