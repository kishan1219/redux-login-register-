import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import { useDispatch } from "react-redux";
import { loginUserApi } from "../../services/user-service";
import { loginRequest, loginSuccess, loginFailure } from "../../common-action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChanges" });
  const handleLogin = async (e) => {
    dispatch(loginRequest());
    const users = await loginUserApi();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      dispatch(loginSuccess(user));
      toast.success("Login successful!");
      navigate("/welcome");
    } else {
      dispatch(loginFailure("Invalid username or password"));
      toast.error("Invalid username or password");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };
//run api command : json-server --watch db.json --port 5000

  return (
    <div className={`${"centerAlign flexColumn"} ${styles.container}`}>
      <div className={`${"centerAlign flexColumn"} ${styles.Main}`}>
        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mt50 mb20 flexCenter">
              <label className={styles.inputLabel}>Enter user Name</label>
              <input
                className="ml10"
                name="userName"
                placeholder="User Name"
                {...register("userName", {
                  required: "required",
                  minLength: {
                    value: 2,
                    message: "char length must be 2",
                  },
                  maxLength: {
                    value: 20,
                    message: "Char length must be 20",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Please enter valid user name (alphabet only)",
                  },
                })}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={"errorMsg"}>
              {errors.userName ? <div>{errors.userName.message}</div> : null}
            </div>

            <div className="mt20 flexCenter">
              <label className={styles.inputLabel}>Password</label>
              <input
                name="password"
                className="ml10"
                type={"password"}
                placeholder="Enter Password"
                {...register("password", {
                  required: "*required",
                  minLength: {
                    value: 3,
                    message: "must be 8 chars",
                  },
                  maxLength: {
                    value: 20,
                    message: "must be 20 chars only",
                  },
                })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={"errorMsg"}>
              {" "}
              {errors.password ? <div>{errors.password.message}</div> : null}
            </div>
            <div className="mt30 alignBetween">
              {" "}
              <button className={styles.button} type="submit">
                Login
              </button>
              <button
                className={styles.signUpButton}
                type="button"
                onClick={handleRegister}
              >
                New User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
