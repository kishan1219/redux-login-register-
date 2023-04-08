import React from "react";
import styles from "./register.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUserApi } from "../../services/user-service";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
} from "../../common-action";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChanges" });

  const onSubmit = async (data) => {
    dispatch(registerRequest());
    try {
      const user = await registerUserApi(data);
      dispatch(registerSuccess(user));
      toast.success("Registration successful!");
      navigate("/welcome");
    } catch (error) {
      dispatch(registerFailure("Registration failed"));
      toast.error("Registration failed");
    }
  };
//run api command : json-server --watch db.json --port 5000
  return (
    <div className={`${"centerAlign flexColumn"} ${styles.container}`}>
      <div className={`${"centerAlign flexColumn"} ${styles.Main}`}>
        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <h2>Register</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              />
            </div>
            {errors.userName && (
              <div className="errorMsg">{errors.userName.message}</div>
            )}

            <div className="mt20 flexCenter">
              <label className={styles.inputLabel}>Password</label>
              <input
                name="password"
                className="ml10"
                type="password"
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
              />
            </div>
            {errors.password && (
              <div className="errorMsg">{errors.password.message}</div>
            )}
            <div className="mt30 alignBetween">
              <button className={styles.button} type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
