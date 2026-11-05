import { create } from 'zustand'
import React from 'react'

export default function useAuthStore = create( (set)=>({
    token: localStorage.getItem('token'),

    Login: (newToken)=>{
        localStorage.setItem('token',newToken);
        set({token:newToken});

    },
    Logout:()=>{
        localStorage.removeItem('token');
        set({token:null});
    }
}));
