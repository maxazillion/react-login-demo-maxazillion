import { useState } from "react";
import Form from "../Form";

const Main = () => {
  const [passwordValid, setPasswordValid] = useState({
    msg: "Enter Password",
    valid: false,
  });
  const [userNames, setUserNames] = useState({ jason: "notPass" });

  const formHandle = (event) => {
    event.preventDefault();
    if (
      userNames[event.target.userName.value] === event.target.password.value
    ) {
      setPasswordValid({ msg: "Valid", valid: true });
    } else {
      setPasswordValid({ msg: "Incorrect", valid: false });
    }
  };

  return passwordValid.valid ? (
    <p>welcome</p>
  ) : (
    <>
      <p>{passwordValid.msg}</p>
      <Form
        handle={formHandle}
        key="firstForm"
        expectedPass="notmypassword"
        expectedUser="Jason"
      ></Form>
    </>
  );
};

export default Main;
