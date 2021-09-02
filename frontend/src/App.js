import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { Provider } from "react-redux";
import PublicRoute from "./Routes/PublicRoute";
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './Reducer/PersistReducer'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute path="/register">
            <Register />
          </PublicRoute>
          <ProtectedRoute path="/dashboard/profile/:id">
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute path="/dashboard/profile">
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute path="/dashboard">
            <Home />
          </ProtectedRoute>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
