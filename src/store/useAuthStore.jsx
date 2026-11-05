import { create } from 'zustand'
import React from 'react'

export const useAuthStore = create( (set)=>({
    token: localStorage.getItem('token'),

    login: (newToken)=>{
        localStorage.setItem('token',newToken);
        set({token:newToken});

    },
    logout:()=>{
        localStorage.removeItem('token');
        set({token:null});
    }
}));
