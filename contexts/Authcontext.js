import { View, Text } from "react-native";
import { useState, createContext, useEffect } from "react";

const AuthCntx = createContext({});

const AuthcontextProvidor = (props) => {
  const [user, setUser] = useState(null);

  return (
    <AuthCntx.Provider value={{ user: user, setUser: setUser }}>
      {props.children}
    </AuthCntx.Provider>
  );
};

// export default  ;
export { AuthCntx, AuthcontextProvidor };
