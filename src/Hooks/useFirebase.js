import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'


    initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const  [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setname] = useState("")

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [loginName, setLoginName] = useState("")

    const auth = getAuth();

    //google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const GoogleProvider = new GoogleAuthProvider();

    return  signInWithPopup(auth, GoogleProvider)
        .finally( () => setIsLoading(false))
    }


    //observer
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




    //Registration with Email and password
    const handleNameChange = e => {
        setname(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
     }
 
     const handlePasswordChange = e => {
         setPassword(e.target.value)
     }
 
     const handleRegistration = e => {
         e.preventDefault()
         console.log(name, email, password)
         createUserWithEmailAndPassword(auth, email, password)
         .then(result => {
             const user = result.user;
             console.log(user)
         })
     }


     //log in with email and password
     const handleLoginEmailChange = e => {
         setLoginEmail(e.target.value)
     }

     const handleLoginPasswordChange = e => {
         setLoginPassword(e.target.value)
     }
 
     const handleLogin = e => {
         e.preventDefault()
         signInWithEmailAndPassword(auth, email, password)
         .then(result => {
            const user2 = result.user;
            console.log(user2)
         })
         .catch(error => {
             console.log(error.message)
         })
     }


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .finally( () => setIsLoading(false))
    }



    return {
        user, 
        signInUsingGoogle, 
        logOut, 
        isLoading, 
        handleEmailChange, 
        handlePasswordChange, 
        handleNameChange, 
        handleRegistration, 
        handleLoginEmailChange, 
        handleLoginPasswordChange, 
        handleLogin}
};

export default useFirebase;