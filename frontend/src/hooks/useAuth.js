import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";


//For cleaner user authorization
const useAuth = () => {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;
