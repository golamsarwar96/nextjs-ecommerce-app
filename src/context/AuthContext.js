"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const formatError = (error) => {
    if (error.code === "auth/configuration-not-found") {
      return "Firebase Authentication is not enabled. Please go to the Firebase Console > Authentication and click 'Get Started', then enable Email/Password provider.";
    }
    return error.message;
  };

  const signUp = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (name) {
        await updateProfile(userCredential.user, { displayName: name });
      }
      return userCredential;
    } catch (error) {
      throw new Error(formatError(error));
    }
  };

  const logIn = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error(formatError(error));
    }
  };

  const logOut = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
