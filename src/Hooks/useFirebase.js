import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'


    initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const auth = getAuth();


    const signInUsingGoogle = () => {
        const GoogleProvider = new GoogleAuthProvider();
    return  signInWithPopup(auth, GoogleProvider)

    }


    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUser({})
        })
    }



    return {user, signInUsingGoogle, logOut}
};

export default useFirebase;