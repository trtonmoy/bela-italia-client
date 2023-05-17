import React, { useContext, useState } from "react";
import { FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [passError, setPassError] = useState("");
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [getEmail, setEmail] = useState("");

  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const toggle = () => {
    setOpen(!open);
  };

  //
  const handleLogIn = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((e) => {
        const emsg = e.message;
        setPassError(emsg);
        console.error(e);
      });
  };
  const emailBlur = (event) => {
    let email = event.target.value;
    setEmail(email);
  };
  const resetPassword = () => {
    passwordReset(getEmail)
      .then(() => {
        alert("please check your given mail to reset password");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ..
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <form
          onSubmit={handleLogIn}
          className="hero-content flex-col lg:flex-row-reverse"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p>
              <ul className="steps steps-vertical">
                <li className="step step-primary text-md font-semibold">
                  Login With Email
                </li>
                <li className="step text-md font-semibold">
                  LogIn With Google{" "}
                </li>
                <li className="step text-md font-semibold">
                  Login With Github
                </li>
              </ul>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  onBlur={emailBlur}
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label flex justify-between">
                  <span className="label-text">Password</span>
                  {open === false ? (
                    <FaEyeSlash onClick={toggle}></FaEyeSlash>
                  ) : (
                    <FaEye onClick={toggle}></FaEye>
                  )}
                </label>
                <input
                  type={open === false ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    href="#"
                    className="label-text-alt link link-hover"
                    onClick={resetPassword}
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <p className="text-red-400">{passError}</p>
              {success && <p className="text-success">Login Successfully.</p>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-primary my-3 "
                >
                  <span className="flex justify-center space-x-3">
                    <FaGoogle></FaGoogle> <span>google</span>
                  </span>
                </button>
                <button className="btn btn-primary">
                  <span className="flex justify-center space-x-3">
                    <FaGithub></FaGithub> <span>github</span>
                  </span>
                </button>
              </div>
              <label className="label my-3">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-primary"
                >
                  Don't have any account?
                </Link>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
