import React, { useState, useEffect } from "react";
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState("");
  const [user, setUser] = useState('');
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://acs-routine.cyclic.app/login', { email: email, password: password }, { headers: { 'Content-Type': "application/json" } })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  return (
    <div>
      login
    </div>
  );
};

export default Login;