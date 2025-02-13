import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "../src/components/Login";
import Home from "./Pages/HomePage";
import { Navbar } from "../src/components/Navbar";
import Khushboo from "../src/components/About/People/Khushboo";
import Cody from "../src/components/About/People/Cody";
import Ernesto from "../src/components/About/People/Ernesto";
import Jesus from "../src/components/About/People/Jesus";
import Jiasheng from "../src/components/About/People/Jiasheng";
import Vivian from "../src/components/About/People/Vivian";
import Mark from "../src/components/About/People/Mark";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/LoginPage";
import MessagePostPage from "./Pages/MessagePost";
import ItemDetailPage from "./Pages/ItemDetailPage";
import CreatePostPage from "./Pages/CreatePostPage";
import MyPage from "./Pages/MyPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ChangePasswordPage from "./Pages/ChangePasswordPage";
import ChangeUsernamePage from "./Pages/ChangeUsernamePage";
//import Footer from "./components/Footer";
import AboutPage from "./Pages/AboutPage";
/**
 * React Navbar Routes
 *
 * @returns React routes for navbar
 */
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/myPage" exact element={<MyPage />} />
          <Route path="/about" exact element={<AboutPage />} />

          <Route path="/about/Mark" exact element={<Mark />} />
          <Route path="/about/khushboo" exact element={<Khushboo />} />
          <Route path="/about/Cody" exact element={<Cody />} />
          <Route path="/about/Ernesto" exact element={<Ernesto />} />
          <Route path="/about/Jesus" exact element={<Jesus />} />
          <Route path="/about/Jiasheng" exact element={<Jiasheng />} />
          <Route path="/about/Vivian" exact element={<Vivian />} />
          <Route path="/message" exact element={<MessagePostPage />} />
          <Route path="/item" exact element={<ItemDetailPage />} />
          <Route path="/createpost" exact element={<CreatePostPage />} />

          <Route
            path="/forgotpassword"
            exact
            element={<ForgotPasswordPage />}
          />
          <Route
            path="/changepassword"
            exact
            element={<ChangePasswordPage />}
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </Navbar>
    </Router>
  );
}

export default App;
