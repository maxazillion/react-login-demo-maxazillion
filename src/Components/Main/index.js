import db from "db";
import { useEffect, useState } from "react";
import Form from "../Form";

const Main = () => {
  const [userNames, setUserNames] = useState({ jason: "notPass" });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        setUsers(() => querySnapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const [passwordValid, setPasswordValid] = useState({
    msg: "Enter Password",
    valid: false,
  });

  const formHandle = (event) => {
    event.preventDefault();
    console.log("username: " + event.target.userName.value);
    console.log("password: " + event.target.password.value);
    users.map((user) => {
      console.log(user.username, user.password);
      if (
        user.username === event.target.userName.value &&
        user.password === event.target.password.value
      ) {
        console.log("ok");
        setPasswordValid({ msg: "Valid", valid: true });
      }
      return null;
    });
  };

  return passwordValid.valid ? (
    <p>welcome</p>
  ) : (
    <div className="flex justify-center col-auto">
      <Form
        msg={passwordValid.msg}
        handle={formHandle}
        key="firstForm"
        expectedPass="notmypassword"
        expectedUser="Jason"
      ></Form>
    </div>
  );
};

export default Main;
