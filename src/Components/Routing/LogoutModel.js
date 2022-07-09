import React from 'react'
import { Link } from 'react-router-dom'
import './LogoutModel.css'

export default function LogoutModel() {
  return (
    <>
         <div className="modal fade" id="logoutModel" aria-labelledby="logoutModelLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header justify-content-end">
            <Link to="login" className=""><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></Link>

          </div>
        <div className="modal-body d-flex flex-column justify-content-center align-items-center pt-0 mt-0">
            
            <video loading="lazy" muted="muted" src="https://cdnl.iconscout.com/lottie/premium/thumb/check-mark-lottie-animation-5036129-4198201.mp4" width="502.5" height="335" type="video/mp4" autoplay="autoplay" loop="loop"></video>
            <h2 className="">Logout Successfully !</h2>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
