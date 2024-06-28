import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Auth } from '../Authentication'
import { useNavigate } from 'react-router-dom'

const IsLoggedIn = () => {
    const [user, setUser] = useState('')
    const nav = useNavigate()

    useEffect(() => {
        const getUser = () => {
            onAuthStateChanged(Auth, (user) => {
                if (user?.uid) {
                    nav('/Home')
                    setUser(user?.uid)
                } else {
                    nav('/')
                }
            })
        }
        getUser()

        return () => { getUser() }

    }, [])

    return user
}

export default IsLoggedIn
