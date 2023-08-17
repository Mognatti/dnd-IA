import { auth } from "../../firebase";
import { useEffect, useState, createContext } from "react";

export const UserContext = createContext(auth.currentUser);

interface ContextProps {
  children: React.ReactNode;
}
export function UserProvider({ children }: ContextProps) {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    setCurrentUser(auth.currentUser);
  }, [auth.currentUser]);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}
