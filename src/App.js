import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import "./App.css";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import HeroText from "./components/HeroText";
import Layout from "./components/Layout/Layout";
import TodoManager from "./components/TodoManager";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/*' element={<HeroText />} />
          <Route
            path='/todos'
            element={authCtx.isLoggedIn ? <TodoManager /> : <Navigate to='/' />}
          ></Route>
          <Route
            path='/signin'
            element={authCtx.isLoggedIn ? <Navigate to='/todos' /> : <SignIn />}
          />
          <Route
            path='/signup'
            element={authCtx.isLoggedIn ? <Navigate to='/todos' /> : <SignUp />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
