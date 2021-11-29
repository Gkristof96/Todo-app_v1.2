import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import HeroText from "./components/HeroText";
import Layout from "./components/Layout/Layout";
import TodoManager from "./components/TodoManager";

const App = () => {
  const [loggedIn] = useState(true)
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/*' element={<HeroText />} />
          <Route path='/todos' element={<TodoManager />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
