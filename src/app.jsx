import React from "react";
import Login from "./components/login/login";
// import "./common/reset.css";
import styles from "./app.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Maker from "./components/maker/maker";

function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login authService={authService}></Login>}></Route>
          <Route path="/maker" element={<Maker authService={authService}></Maker>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
