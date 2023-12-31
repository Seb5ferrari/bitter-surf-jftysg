import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const DiscoverBtn = () => {
  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
  const [isDisabled, setIsDisabled] = useState(false);
  const [btnText, setBtnText] = useState("Hello World!");
  const [resultData, setResultData] = useState({});
  async function btnHandler() {
    setBtnText("Bye World!");
    setIsDisabled(true);
    await wait(4000);
    Axios({
      url: "https://jsonplaceholder.typicode.com/posts"
    })
      .then((response) => {
        console.log(response.data);
        setResultData(response.data);
        setIsDisabled(false);
        setBtnText("Hello World!");
      })
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
        setBtnText("Hello World!");
      });
  }

  return (
    <>
      <Link to="/about">
        <button id="btn" onClick={btnHandler} disabled={isDisabled}>
          {btnText}
        </button>
      </Link>
      <div>{JSON.stringify(resultData)}</div>
    </>
  );
};

export default DiscoverBtn;
