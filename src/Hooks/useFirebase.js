import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'


    initializeAuthentication()

const useFirebase = () => {


    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const[error,setError] = useState('')
    
    const  [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [loginName, setLoginName] = useState("")

    const auth = getAuth();

    //google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const GoogleProvider = new GoogleAuthProvider();

    return  signInWithPopup(auth, GoogleProvider)
    .catch(err => setError(err.message))
        .finally( () => setIsLoading(false))
    }


    //observer
    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setError('')
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])




    //Registration with Email and password
    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
     }
 
     const handlePasswordChange = e => {
         setPassword(e.target.value)
     }
 
     const handleRegistration = (history) => {
         
         console.log(name, email, password)
         createUserWithEmailAndPassword(auth, email, password)
         .then(result => {
             const user = result.user;
             setUser({})
             setError('')
             history.push('/login');
             updateProfile(auth.currentUser, {
                displayName: name,
               
              });
             console.log(user)
         })
         .catch((err) => {
             setError(err.message)
             history.push('/register')
            })
     }


     //log in with email and password
     const handleLoginEmailChange = e => {
         setLoginEmail(e.target.value)
     }

     const handleLoginPasswordChange = e => {
         setLoginPassword(e.target.value)
     }
 
     const handleLogin = (history,redirect_uri) => {
        
         signInWithEmailAndPassword(auth, email, password)
         .then(result => {
            const user2 = result.user;
            setUser(user2)
            setError('')
            history.push(redirect_uri)
         })
         .catch(error => {
             setError(error.message)
            history.push('/login')
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
        setError,
        error,
        handleEmailChange, 
        handlePasswordChange, 
        handleNameChange, 
        handleRegistration, 
        handleLoginEmailChange, 
        handleLoginPasswordChange, 
        handleLogin}
};

export default useFirebase;