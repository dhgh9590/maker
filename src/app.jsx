import React from "react";
import Login from "./components/login/login";
// import "./common/reset.css";
import styles from "./app.module.css";

function App({authService}) {
  return (
    <div className={styles.app}>
      <Login authService={authService}></Login>
    </div>
    
  );
}

export default App;
