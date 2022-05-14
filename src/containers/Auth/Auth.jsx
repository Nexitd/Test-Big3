import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../store/reducers/AuthReducer";
import classNames from "classnames";
import Button from "../../components/Button/Button";
import reg from "../../assets/images/Auth/7873 1.png";
import log from "../../assets/images/Auth/Group.png";
import styles from "./Auth.module.css";

const Login = ({ title, changePage }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(LoginUser(values));
  };

  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Login"
          name="login"
          rules={[{ required: true, message: "Заполните поле!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Заполните поле!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Button text="Sign In" type="submit" margin="24px 0 0" width="100%" />
        </Form.Item>
      </Form>
      <p className={styles.text}>
        Not a member yet? <span onClick={() => changePage(false)}>Sign up</span>
      </p>
    </>
  );
};

const Registration = ({ title, changePage }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <Form layout="vertical" onFinish={() => console.log("test")}>
        <Form.Item
          label="Name"
          name="userName"
          rules={[{ required: true, message: "Заполните поле!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Login"
          name="login"
          rules={[{ required: true, message: "Заполните поле!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Заполните поле!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          label="Enter your password again"
          rules={[{ required: true, message: "Заполните поле!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Button text="Sign Up" type="submit" margin="24px 0 0" width="100%" />
        </Form.Item>
      </Form>
      <p className={styles.text}>
        Already a member? <span onClick={() => changePage(true)}>Sign in</span>
      </p>
    </>
  );
};

const AuthContainer = () => {
  const [page, setPage] = useState(true);

  const content = () => {
    return page ? (
      <Login title="Sign In" changePage={setPage} />
    ) : (
      <Registration title="Sign Up" changePage={setPage} />
    );
  };

  return (
    <div className={styles.auth}>
      <div className={styles.authContainer}>
        <div className={classNames(styles.authItem, styles.authContent)}>
          <div className={styles.contentContainer}>{content()}</div>
        </div>
        <div className={classNames(styles.authItem, styles.authImage)}>
          <img src={page ? log : reg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
