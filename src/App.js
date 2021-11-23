import { useState } from "react";
import "./App.css";
import HeroText from "./components/HeroText";
import Header from "./components/Layout/Header";
import SVG from "./components/SVG";
import TodoManager from "./components/TodoManager";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='App'>
      <Header />
      <section>
        <div className='content-wrapper'>
          {isLoggedIn ? <TodoManager /> : <HeroText />}
        </div>
        <div className='svg-wrapper'>
          <SVG />
        </div>
      </section>
    </div>
  );
};

export default App;
