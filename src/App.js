import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeLayout from "./components/utils/HomeLayout";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import UserLayout from "./components/utils/UserLayout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import PrivateRoute from "./components/utils/PrivateRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function App() {
  const store = configureStore();
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/user" element={<UserLayout />}>
              <Route path="/user" element={<Navigate to="/user/login" />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/" element={<HomeLayout />}>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="home" element={<Home />} />
              <Route
                path="cart"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}
