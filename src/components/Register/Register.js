import React, { useState } from "react";

function Register({ changeRoute, setUser }) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");

  const onNameChange = (event) => {
    setRegisterName(event.target.value);
  };

  const onEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const onSubmitRegister = () => {
    // Como es fetch POST, los parametros son URL y OBJ
    fetch("https://sleepy-wildwood-59471.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.id){
          setUser(data);
          changeRoute("logged");
        } else {
          console.log(data)
        }
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <div className="loggin">
      <div className="logginBox">
        <h2>Register</h2>
        <input
          placeholder="Name"
          type="text"
          required
          autoFocus
          id="logginRegisterName"
          name="logginRegisterName"
          onChange={(event) => {
            onNameChange(event);
          }}
        />
        <input
          placeholder="E-mail"
          type="email"
          required
          id="logginRegisterEmail"
          name="logginRegisterEmail"
          onChange={(event) => {
            onEmailChange(event);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          required
          id="logginRegisterPassword"
          name="logginRegisterPassword"
          onChange={(event) => {
            onPasswordChange(event);
          }}
        />
        <button onClick={() => onSubmitRegister()}>Register</button>
        <p className="logginRegister" onClick={() => changeRoute("signin")}>
          Sign in
        </p>
      </div>
    </div>
  );
}

export default Register;
