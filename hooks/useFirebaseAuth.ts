import {
  User,
  setPersistence,
  createUserWithEmailAndPassword,
  UserCredential,
  updateProfile,
  browserLocalPersistence,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../src/firebase";
import { useEffect, useState } from "react";

interface LoginProps {
  nickname: string;
  email: string;
  password: string;
}

export default function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(auth.currentUser ?? null);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [isCreating, setIsCreating] = useState<boolean>();
  const [isLogginIn, setIsLogginIn] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  async function createUser({ nickname, email, password }: LoginProps) {
    setIsCreating(true);
    try {
      await setPersistence(auth, browserLocalPersistence);
      const response: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response.user) {
        await updateProfile(response.user, {
          displayName: nickname,
        });
        setUser(response.user);
        setIsCreating(false);
      }
    } catch (error) {
      console.log(error);
      setIsCreating(false);
    }
  }

  async function login(email: string, password: string) {
    setIsLogginIn(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response.user) {
        setUser(response.user);
        setIsLogginIn(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  return [
    { user, isLoading, isCreating, isLogginIn, createUser, logout, login },
  ];
}
