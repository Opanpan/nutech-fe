import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
          path="/"
          exact
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          exact
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
