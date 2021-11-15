
import React,{createContext, useEffect, useState} from 'react'
import cookies from "js-cookie"
import Router from "next/router"

export const AuthContext = createContext()
export default function AuthProvider({children ,userData}) {
    const [user, setUser] = useState(userData)
    useEffect(() => {
        const syncLogout = e =>{
            if(e.key === 'logout'){
                setUser(null)
                Router.push('/signin')
            }
        }
        window.addEventListener('storage',syncLogout)
        return () => {
            window.removeEventListener('storage',syncLogout)
            window.localStorage.removeItem('logout')
        }
    }, [])
    const setAuthUser = userInfo => setUser(userInfo)

    const signout = () => {
        cookies.remove("jwt")
        setUser(null)
        localStorage.setItem('logout',Date.now())
        Router.push("/signin")
    }
    return (
        <AuthContext.Provider value={{user,setAuthUser ,signout}}>
            {children}
        </AuthContext.Provider>
    )
}
