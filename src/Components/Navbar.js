import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
      <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
    <div className="container-fluid">
        <button className="btn btn-primary me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
        </button>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <div className="cbtn ms-auto">
                <span>
                    <i className="bi bi-megaphone"></i>
                </span>
                <button type="button" className="btn btn-light ms-1 ">View Your School</button>
                <button type="button" className="btn btn-primary ms-1 ">Create New Product</button>
            </div>
        </div>
    </div>
</nav>  <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
        <div className="container-fluid">
            <button className="btn btn-primary me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
            </button>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
			data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <div className="cbtn ms-auto">
                    <span>
                        <i className="bi bi-megaphone"></i>
                    </span>
                    <button type="button" className="btn btn-light ms-1 ">View Your School</button>
                    <button type="button" className="btn btn-primary ms-1 ">Create New Product</button>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
