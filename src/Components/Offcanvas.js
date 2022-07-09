import React from 'react'
import { Link } from 'react-router-dom'
import './Offcanvas.css'
import LogoutModel from './Routing/LogoutModel'

export default function Offcanvas() {
  return (
    <>
      <div className="offcanvas offcanvas-start bg-dark text-light" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header bg-dark">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">CNC digital ghyan</h5>

            <button type="button" className="btn-close text-reset" 
			data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body p-0">
            <nav className="navbar-dark">
                <ul className="navbar-nav">
                    <li>
                        <Link to='index' className="nav-link px-3 active">
                            <span>
                                <i className="bi bi-speedometer px-2"></i>
                            </span>
                            <span>Dashboard</span>

                        </Link>
                    </li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li>
                        <Link to='user' className="nav-link px-3">
                            <span>
                                <i className="bi bi-people px-2"></i>
                            </span>
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="site" className="nav-link px-3">
                            <span>
                                <i className="bi bi-diagram-2 px-2"></i>
                            </span>
                            <span>Site</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="email" className="nav-link px-3">
                            <span>
                                <i className="bi bi-envelope px-2"></i>
                            </span>
                            <span>Email</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="setting" className="nav-link px-3">
                            <span>
                                <i className="bi bi-gear px-2"></i>
                            </span>
                            <span>Setting</span>
                        </Link>
                    </li>
                    <li>
                        <a className="nav-link px-3 sidebar-link" data-bs-toggle="collapse" 
						href="#collapseExample" role="button" aria-expanded="false"
                            aria-controls="collapseExample">
                            <span>
                                <i className="bi bi-upc px-2"></i>
                            </span>
                            <span>
                                Course
                            </span>
                            <span className="right-icon ms-auto">
                                <i className="bi bi-chevron-down"></i>
                            </span>
                        </a>
                        <div className="collapse" id="collapseExample">
                            <div>
                                <ul className="navbar-nav ps-5">
                                    <li>
                                        <a href="htmlPage.html" className="nav-link">HTML</a>
                                    </li>
                                    <li>
                                        <a href="cssPage.html" className="nav-link">CSS</a>
                                    </li>
                                    <li>
                                        <a href="js.html" className="nav-link">JS</a>
                                    </li>
                                    <li>
                                        <a href="Html5.html" className="nav-link">HTML5</a>
                                    </li>
                                    <li>
                                        <a href="css3.html" className="nav-link">CSS3</a>
                                    </li>
                                    <li>
                                        <a href="jQuery.html" className="nav-link">jQuery</a>
                                    </li>
                                    <li>
                                        <a href="bootStrap.html" className="nav-link">Bootstrap</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link to="coaching" className="nav-link px-3">
                            <span>
                                <i className="bi bi-person-lines-fill px-2"></i>
                            </span>
                            <span>Coaching</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="help" className="nav-link px-3">
                            <span>
                                <i className="bi bi-info-circle px-2"></i>
                            </span>
                            <span>Help</span>
                        </Link>
                    </li>


                    <li>
                        <Link to="login" className="nav-link px-3" data-bs-toggle="modal" data-bs-target="#logoutModel">
                            <span>
                                <i className="bi bi-box-arrow-right"></i>
                            </span>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>

      </div>
      <LogoutModel/>
</>
    
  )
}
