import React from 'react'
import './LogOut.css'

export default function LogOut() {
  return (
    <>
        <section className="mt-5 pt-5">
        <div className="container-fluid">
            <div className="row">
                <div className="signIn">
                    <div className="login">
                        <div className="login-form">
                            <div className="loginFormClose">
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                            <div className="title">Login</div>
        
                            <form action="#">
                                <div className="input-box">
                                    <input type="text" placeholder="Email or Phone" />
                                    <div className="icon"><i className="fas fa-user"></i></div>
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Password" />
                                    <div className="icon"><i className="fas fa-lock"></i></div>
                                </div>
        
                                <div className="option_div">
                                    <div className="check_box">
                                        <input type="checkbox" />
                                        <span>Remember me</span>
                                    </div>
                                    <div className="forget_div">
                                        <a href="#">Forget Password</a>
                                    </div>
                                </div>
                                <div className="input-box button">
                                    <input type="submit" value="Login" />
                                </div>
                                <div className="sign_up">Not member <a href="#">Signup now</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}
