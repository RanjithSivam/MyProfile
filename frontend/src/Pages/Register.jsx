import React from "react";
import { useForm } from "react-hook-form";

//css
import "./Register.css";

import { Link } from "react-router-dom";
import { authRegister } from "../Actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const authStatus = useSelector(state => state.auth);

  const onSubmit = (data) => {
    dispatch(authRegister(data));
  };

  return (
    <div className="register">
      <div className="login__container">
        <div className="login__left">
          <div className="login__logo">MyProfile</div>
          <div className="login__description">
            Connect with the world around you
          </div>
        </div>
        <div className="login__right">
          {authStatus.message && <p>{authStatus.message}</p>}
          {authStatus.error && <p>{authStatus.error.message}</p>}
          <form className="login__box" onSubmit={handleSubmit(onSubmit)}>
            <div className="input__container">
              <input
                {...register("email", {
                  required: "Email id is required.",
                  pattern: {
                    value: /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
                    message: "Enter a valid email id."
                  }
                })}
                type="text"
                placeholder="Email"
                name="email"
                className={`login__input ${errors.email?"error":""}`}
              />

              {errors.email && <span className="input__error">{errors.email.message}</span>}
            </div>

            <div className="input__container">
              <input
                {...register("name", {
                  required: "Name is Required",
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Name should only contain letters",
                  },
                })}
                type="text"
                placeholder="Name"
                name="name"
                className={`login__input ${errors.name?"error":""}`}
              />

              {errors.name && <span className="input__error">{errors.name.message}</span>}
            </div>

            <div className="input__container">
              <input
                type="text"
                {...register("username", {
                  required: "Username is required.",
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "Name should only contain alpha numericals",
                  }
                })}
                placeholder="UserName"
                name="username"
                className={`login__input ${errors.username?"error":""}`}
              />

              {errors.username && <span className="input__error">{errors.username.message}</span>}
            </div>

            <div className="input__container">
              <input
                {...register("password", {
                  required: "Password is required.",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                    message: "Password should contain athere to our rules.",
                  },
                })}
                type="password"
                placeholder="Password"
                name="password"
                className={`login__input ${errors.password?"error":""}`}
              />

              {errors.password && <span className="input__error">{errors.password.message}</span>}
            </div>

            <button className="login__button" type="submit">
              Sign Up
            </button>
            <button className="login__register__button">
              <Link to="/login">Log In</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
