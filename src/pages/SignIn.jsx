import React, { useEffect, useRef, useState } from 'react'
import fillerImg from '../images/20240503_172546.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Auth } from '../Authentication'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import IsLoggedIn from '../comp/IsLoggedIn';

const SignIn = () => {



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [seePass, setSeePass] = useState(false)



    const successLogin = () => {
        gsap.to([emailRef.current, passwordRef.current], {
            border: '1px solid #ccc'
        })

        toast.success('User Logged in, Welcome', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            closeButton: false
        });
    }

    const errorLogin = (params) => {
        gsap.to([emailRef.current, passwordRef.current], {
            border: '1px solid red'
        })

        toast.error(params, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            closeButton: false

        });
    }

    const nav = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()



    const signInAccount = e => {
        e.preventDefault()
        if (!password || !email) {
            return errorLogin('Input fields cannot be empty.')
        } else {
            signInWithEmailAndPassword(Auth, email, password)
                .then((userCred) => {
                    if (userCred.user) {
                        successLogin()
                        setTimeout(() => {
                            nav('/Home')
                        }, 1000);
                    }
                }).catch((err) => {
                    console.log(err)
                    if (err.code === 'auth/invalid-credential') {
                        errorLogin("Please check your email and password");
                    }
                })
        }
    }

    return (
        <div className='SignIn'>
            <ToastContainer />
            <IsLoggedIn />

            <div className="SignInContent">
                <form
                    onSubmit={signInAccount}
                    action="">
                    <div className="title">
                        To continue, please Sign in your UTS account.
                    </div>
                    <input
                        ref={emailRef}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email"
                        placeholder='Email' />
                    <input
                        ref={passwordRef}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={seePass ? 'text' : 'password'}
                        placeholder='Password'
                    />
                    <div className="seePass">
                        <input
                            onClick={() => {
                                setSeePass(prevClick => !prevClick)
                            }}
                            type="checkbox" />
                        <div className="txt">
                            See Password
                        </div>
                    </div>
                    <button type='submit'>
                        Sign In
                    </button>
                    <div className="copyright">
                        Copyright © UTS.com All rights reserved.
                    </div>
                </form>
            </div>
            <div className="Filler">
                <img src={fillerImg} alt="" />
            </div>
        </div>
    )
}

export default SignIn
