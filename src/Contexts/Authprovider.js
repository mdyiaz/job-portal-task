import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {



    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log();
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])





    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }





    

    const authInfo = {
        auth, 
        createUser,
        signIn,
        updateUser,
        user,
        loading,
        logOut,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;