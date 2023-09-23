import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  return (
    <UserContext.Provider value={{ notes, setNotes }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
