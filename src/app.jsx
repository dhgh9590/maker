import React from "react";
import Login from "./components/login/login";
// import "./common/reset.css";
import styles from "./app.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Maker from "./components/maker/maker";

function App({FileInput,authService,cardRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login authService={authService}></Login>}></Route>
          <Route path="/maker" element={<Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository}></Maker>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
