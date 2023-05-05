import axios, { isCancel, AxiosError } from "axios";
import React, { useState } from "react";

function APICall() {
  const [res, setRes] = useState("");

  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      // handle success
      setRes(JSON.stringify(response));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  // .finally(console.log(res));
}

export default APICall;
