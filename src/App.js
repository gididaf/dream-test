import styles from "./App.module.scss";

import React, { useCallback, useEffect } from "react";
import axios from "axios";

function App() {
  const testAjax = useCallback(async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/testAjax`,
      {
        hello: "world",
      }
    );

    console.log(data);
  }, []);

  useEffect(() => {
    testAjax();
  }, [testAjax]);

  return <div className={styles.wrapper}>APP</div>;
}

export default App;
