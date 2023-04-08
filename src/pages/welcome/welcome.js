import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../common-action";
import styles from "./welcome.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Welcome = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.rootKey.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successful!");
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className="flexCenter">
          Welcome, <div className="ml10"> {user.username}!</div>
        </h1>
        <h2>User ID: {user.id}</h2>
        <button className={styles.button} type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;
