import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

export const AuthContext = createContext();

const AuthState = ({children}) => {

    const [user, setUser] = useState(null);
    const [createUser, setCreateUser] = useState({ name: "", email: "", password: "" });
    const [newUser, setNewUser] = useState({ email: "", password: "" });

    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const customUID = result.user.uid;
            const customName = result.user.displayName.replace(' ', '');
            const UID = `${customName}-${customUID}`;
            setUser(UID);

            await setDoc(doc(db, 'email_list', UID), {
                email: result.user.email
            });
            await setDoc(doc(db, 'user_data', UID), {
                name: result.user.displayName,
                email: result.user.email,
                createdAt: serverTimestamp()
            });
        } catch (error) {
            console.error(error);
        }
    }

    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const randomUID = uuidv4();
            const customUID = randomUID.replace(/-/g, '').substring(0, 28);
            const customUIDName = createUser.name.replace(' ', '');
            const UID = `${customUIDName}-${customUID}`;
            setUser(UID);
       
            await createUserWithEmailAndPassword(auth, createUser.email, createUser.password);
            await setDoc(doc(db, 'email_list', UID), {
                email: createUser.email
            })
            await setDoc(doc(db, 'user_data', UID), {
                name: createUser.name,
                email: createUser.email,
                createdAt: serverTimestamp()
            })
        } catch (error) {
            console.error(error);
        }
        
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const result = await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
            if(result) {
                setUser(result.user.uid)
            }

        } catch (error) {
            console.error(error);
        }
    }

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            setUser(null);
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
    }, [])

    return (
        <AuthContext.Provider value={{ user, handleGoogleSignup, handleSignOut, createUser, setCreateUser, handleSignup, newUser, setNewUser, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;