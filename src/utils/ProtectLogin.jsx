import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dataLogin from './dataLogin';

export default function ProtectLogin({children}) {
    const navigate=useNavigate();
    useEffect(() => {
        const userLocal=JSON.parse(localStorage.getItem('user'));
        let isConnected=false;
        console.log("userloc",userLocal);
        if(!userLocal){
            return navigate ('/login');
        }
        else{
            const currentUser = dataLogin.find(item=>item.userName==userLocal.username && item.password==userLocal.password)
            console.log('currentUser',currentUser);
            if(!currentUser){
                return navigate('/login');
            }
        }
    }, [])
    return children
}
