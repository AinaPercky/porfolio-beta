import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dataLogin from './dataLogin';
import { Authenticate } from '../api/authenticate';

export default function ProtectLogin({children}) {
    const navigate=useNavigate();
    useEffect(() => {
        const token=JSON.parse(localStorage.getItem('token'));
        let isConnected=false;
        console.log("userloc",token);
        if(!token){
            return navigate ('/login');
        }
        else{
            Authenticate(token)
            .then((res)=>{
                console.log('currentUser',res);
            })
            .catch((err)=>{
                console.log("erreur Protectlogin",err);
                return navigate('/login');
            })
        }
    }, [])
    return children
}
