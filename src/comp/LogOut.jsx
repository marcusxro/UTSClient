import React from 'react'
import { signOut } from 'firebase/auth'

import { Auth } from '../Authentication'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
    const nav = useNavigate()
    const logOutAccount = () => {
        signOut(Auth)
            .then(() => {
                console.log("account lgged out")
                nav('/')
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div
        onClick={() => {
            logOutAccount()
        }}
         className="logout" >
            <ion-icon name="log-out-outline"></ion-icon>
        </div>
    )
}

export default LogOut
