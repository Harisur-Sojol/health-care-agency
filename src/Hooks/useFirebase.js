import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'


    initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true)
        const GoogleProvider = new GoogleAuthProvider();

    return  signInWithPopup(auth, GoogleProvider)
        .finally( () => setIsLoading(false))
    }
    


    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .finally( () => setIsLoading(false))
    }



    return {user, signInUsingGoogle, logOut, isLoading}
};

export default useFirebase;