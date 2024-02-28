import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export const AuthContext = createContext();

const AuthState = ({children}) => {

    // Create or Login user with Google
    // CURRENT USER
    const [user, setUser] = useState(null);

    // New user with Manual Signup
    const [createUser, setCreateUser] = useState({ name: "", email: "", password: "" });

    // New user with Manual Login
    const [newUser, setNewUser] = useState({ email: "", password: "" });

    const navigate = useNavigate();

    // Google Signup
    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {

            const result = await signInWithPopup(auth, provider);
            setUser(result);

            // POST to email_list collection
            await setDoc(doc(db, 'email_list', user.uid), {
                email: result.user.email
            });

            // POST to user_data collection
            await setDoc(doc(db, 'user_data', user.uid), {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
                createdAt: serverTimestamp()
            });

            // Navigate page
            navigate('/');

        } catch (error) {
            console.error(error);
        }
    }

    // Google Login
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);

            // Navigate page
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    // Manual Signup
    const handleSignup = async (event) => {
        event.preventDefault();
        try {

            const result = await createUserWithEmailAndPassword(auth, createUser.email, createUser.password);
            setUser(result);
            console.log(result);
            console.log(user);

            // Updating account Name
            const userName = result.user;
            await updateProfile(userName, { displayName: createUser.name });


            // POST to email_list collection
            await setDoc(doc(db, 'email_list', user.uid), {
                email: createUser.email
            });

            // POST to user_data collection
            await setDoc(doc(db, 'user_data', user.uid), {
                name: createUser.name,
                email: createUser.email,
                createdAt: serverTimestamp()
            });

            // Reset Signup Form 
            setNewUser({ name: "", email: "", password: "" });

            // Navigate Page
            navigate('/');

        } catch (error) {
            console.error(error);
        }
        
    }

    // Manual Login
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, newUser.email, newUser.password);

            // Reset Login form
            setNewUser({ email: "", password: "" });

            // Navigate Page
            navigate('/');

        } catch (error) {
            console.error(error);
        }
    }

    // Signout function
    const handleSignOut = async () => {
        try {
            await auth.signOut();
            setUser(null);
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
          if(user) {
            setUser(user);
          } else {
            setUser(null);
          }
        })
    }, []);

    return (
        <AuthContext.Provider value={{ user, handleGoogleSignup, handleGoogleLogin, handleSignOut, createUser, setCreateUser, handleSignup, newUser, setNewUser, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;