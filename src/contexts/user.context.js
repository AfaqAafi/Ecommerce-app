import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unSubcrise = onAuthStateChangedListner((user) => {
      setCurrentUser(user);
    });
    return unSubcrise;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
