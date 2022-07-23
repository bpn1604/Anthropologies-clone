import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

{
  /* <PrivateRoute>
  <Component/> -> children
</PrivateRoute> */
}

function PrivateRoute({ children }) {
  // logic to check if a user is auth
  const state  = useContext(AppContext);
    console.log(state)
  if (state.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;