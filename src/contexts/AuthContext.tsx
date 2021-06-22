import React, { createContext, useEffect, useState } from "react";

import { auth } from "../services/firebase";

interface AuthContextData {
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<boolean | undefined>;
  user?: User;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  photoURL: string;
}

export const AuthContextProvider = ({
  children,
}: AuthContextProviderProps): JSX.Element => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName, photoURL } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from google account");
        }

        setUser({
          id: uid,
          name: displayName,
          photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const loginWithGoogle = async () => {
    try {
      const provider = new auth.GoogleAuthProvider();
      const result = await auth().signInWithPopup(provider);
      const user = result.user;

      if (user) {
        const { uid, displayName, photoURL } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from google account");
        }

        setUser({
          id: uid,
          name: displayName,
          photoURL,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
      return true;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginWithGoogle,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
