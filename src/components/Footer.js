import React from 'react'
import '../css/style.css'

export default function Footer() {
  return (
    <footer className='foots'>
    <div class="container-fluid bg-black">
        <div class="row">
            <div class="col-md-4">
                <h3>Nigeria</h3>
                <p>Lagos</p>
                <p>Office Address:</p><a href="">4th Floor, Epic Tower, 235 Ikorodu-Ososun Rd. Lagos</a>
            </div>
            <div class="col-md-4">
                <h3>Norway</h3>
                <p>Oslo</p>
                <p>Office Address:</p><a href="">4th Floor, Epic Tower, 235 Ikorodu-Ososun Rd. Lagos</a>
            </div>
            <div class="col-md-4">
                <h3>Kenya</h3>
                <p>Nairobi</p>
                <p>Office Address:</p><a href="">Crescent Business Center, The Crescent, Nairobi</a>
            </div>
        </div>
    </div>
  </footer>
  )
}
