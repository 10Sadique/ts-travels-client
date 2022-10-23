import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    User,
    UserCredential,
} from 'firebase/auth';

type Props = {
    children: React.ReactNode;
};

export interface AuthContextInterface {
    user: User | null;
    createUser: (email: string, password: string) => Promise<UserCredential>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
    updateUserProfile: (
        name: string,
        image: string
    ) => Promise<void> | undefined;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const auth = getAuth(app);

export const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const createUser = (email: string, password: string) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email: string, password: string) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (name: string, image: string) => {
        setIsLoading(true);
        if (auth.currentUser !== null)
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image,
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (presentUser) => {
            setUser(presentUser);
            setIsLoading(false);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo: AuthContextInterface = {
        user,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        isLoading,
        setIsLoading,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
