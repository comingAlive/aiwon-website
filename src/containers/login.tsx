import React, { useContext } from "react";
import { Form } from "../components/form/form";
import { Input } from "../components/input/input";
import { Button } from "../components/button/button";
import { AuthContext } from "../contexts/auth/auth.context";

const Login = () => {
  const {
    authState: { formInput },
    authDispatch,
  } = useContext(AuthContext);

  const validation = () => formInput === "aaa";

  const lockFunc = () => {
    authDispatch({ type: "CHANGE_FORM_INPUT", payload: "Access Denied" });
    authDispatch({ type: "LOCK_ON" });
    authDispatch({ type: "SECURE_OFF" });
  };

  const handleSubmit = () => {
    if (validation()) console.log("hi");
    else lockFunc();
  };

  return (
    <Form submit={handleSubmit}>
      <Input />
      <Button submit={handleSubmit} />
    </Form>
  );
};
export default Login;
