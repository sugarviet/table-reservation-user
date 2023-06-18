import { useLocation } from "react-router-dom";

function useLayout(){
    const location = useLocation();
    const isLoginPath = location.pathname === "/login";
    const isSignUpPath = location.pathname === "/signup";
    const isSignInAndSignUpPath = !isLoginPath && !isSignUpPath;


    return {
        isSignInAndSignUpPath
    }

}

export default useLayout;