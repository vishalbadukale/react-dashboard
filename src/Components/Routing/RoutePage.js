import React from 'react'
import Offcanvas from '../Offcanvas'
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import CanvasContent from '../CanvasContent'
import User from './User'
import Site from './Site'
import Setting from './Setting'
import Email from './Email'
import Coaching from './Coaching'
import Help from './Help'
import LogOut from './LogOut'
export default function RoutePage() {
  return (
    <>
        <BrowserRouter>
        <Offcanvas/>
            <Routes>
                <Route path='index' element={<CanvasContent/>}/>
                <Route path='user' element={<User/>}/>
                <Route path='site' element={<Site/>}/>
                <Route path='email' element={<Email/>}/>
                <Route path='setting' element={<Setting/>}/>
                <Route path='coaching' element={<Coaching/>}/>
                <Route path='help' element={<Help/>}/>
                <Route path='login' element={<LogOut/>}/>

            </Routes>
        </BrowserRouter>
        
    </>
  )
}
