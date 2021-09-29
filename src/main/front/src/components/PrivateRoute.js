import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, isAuthenticated, redirectTo, ...rest }) {
  return (
    <>
      {isAuthenticated ? (
        <Route {...rest}>{children}</Route>
      ) : (
        <Redirect to={redirectTo} />
      )}
    </>
  );
}

export default PrivateRoute;
