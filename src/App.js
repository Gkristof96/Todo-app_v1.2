import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import TodoManager from "./components/Todos/TodoManager";
import AuthContext from "./store/auth-context";
import AuthPage from "./pages/AuthPage";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route
            path='/todos'
            element={authCtx.isLoggedIn ? <TodoManager /> : <Navigate to='/' />}
          ></Route>
          <Route
            path='/auth/*'
            element={
              authCtx.isLoggedIn ? <Navigate to='/todos' /> : <AuthPage />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
