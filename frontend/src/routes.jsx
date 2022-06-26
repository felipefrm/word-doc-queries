import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { Home } from "./pages/Home"
import { SignIn } from "./pages/SignIn"

import { useAuth } from "./contexts/auth"

export function Routes() {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={<SignIn />}
        />
      </BrowserRoutes>
    </BrowserRouter>
  )
}

function RequireAuth({ children }) {
  const { signed } = useAuth();
  const location = useLocation();

  if (!signed) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}