// import React from 'react';
import { createContext, useEffect, useState } from "react";
// import app from '../../firebase/firebase.config';
import app from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null)
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL:photo
        })
    }

    useEffect(()=>{
       const unsbuscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
        })
        return ()=> unsbuscribe();
    },[])

    const logOut =()=>{
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        user,
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;