import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAccount } from "./redux/user/user";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Animals from "./components/Animals";
import AnimalItem from "./pages/AnimalItem";
import NavAndMenu from "./components/NavAndMenu";
import Team from "./pages/Team";
import Recovery from "./pages/Recovery";
import Videos from "./pages/Videos/index";
import Donate from "./pages/Donate/index";
import Contact from "./pages/Contact/index";
import Privacy from "./pages/Privacy/index";
import FaqPage from "./pages/FaqPage/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      dispatch(loginAccount(JSON.parse(localStorage.getItem("user"))));
    }
  }, [dispatch]);
  return (
    <div>
      <NavAndMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/:id" element={<AnimalItem />} />
        <Route path="/team" element={<Team />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faqpage" element={<FaqPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
