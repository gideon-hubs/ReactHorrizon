import React from 'react'
import '../css/style.css'

export default function Header() {
  return (
    <>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-none">
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="navbar-brand" href="/">
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Logo" className="img-fluid"/>
                </a>
              </li>
              </ul>
        </div>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              <img className='logos' src="https://w7.pngwing.com/pngs/328/94/png-transparent-colonel-sanders-kfc-fried-chicken-fast-food-restaurant-fried-chicken-food-fast-food-restaurant-logo.png" alt="" height="50px" width="50px"/>
              </li>
              <li className="nav-item active">
                <img className='logos' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="" height="50px" width="50px"/>
              </li>
              <li className="nav-item active">
                <img className='logos' src="https://www.grapheine.com/cdn-cgi/image/width=2281,height=1411,fit=crop,quality=85,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2021/06/Logo-TotalEnergies-2021-1.jpg" alt="" height="50px" width="50px"/>
              </li>
              </ul>
              </div>
        <div className="collapse navbar-collapse order-3" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto menu-mag">
            <li className="nav-item active">
              <a className="nav-link" href="/">About Us</a>
            </li>
            </ul>
        </div>
    </nav>
 </div>
    </>
  )
}
