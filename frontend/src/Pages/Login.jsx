import React from "react";
import { useForm } from "react-hook-form";

//css
import "./Login.css";

import { Link, useHistory, useLocation } from "react-router-dom";
import { authSignIn } from "../Actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {state} = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const {authenticated} = useSelector(state=>state.auth)

  const onSubmit = (data) => {
    dispatch(authSignIn(data));
  };

  if(authenticated){
    history.push(state?.location || "/dashboard")
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <div className="login__logo">MyProfile</div>
          <div className="login__description">
            Connect with the world around you
          </div>
        </div>
        <div className="login__right">
          {state?.unAuth && <span className="auth__error">You must be authenticated to access those routes.</span>}
          <form className="login__box" onSubmit={handleSubmit(onSubmit)}>
            <div className="input__container">
              <input
                type="text"
                placeholder="Email"
                name="email"
                className={`login__input ${errors.email?"error":""}`}
                {...register("email", {
                  pattern:  {
                    value: /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
                    message: "Enter a valid email id."
                  }
                })}
              />
              {errors.email && (
                <span className="input__error">{errors.email.message}</span>
              )}
            </div>

            <div className="input__container">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className={`login__input ${errors.password?"error":""}`}
                {...register("password")}
              />
              {errors.password && (
                <span className="input__error">{errors.password.message}</span>
              )}
            </div>
            <button className="login__button" type="submit">
              Log In
            </button>
            <span className="login__forgot">Forgot Password?</span>
            <button className="login__register__button">
              <Link to="/register">Create New Account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
