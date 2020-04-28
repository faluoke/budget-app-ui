import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../components/Context/UserContext";

function LandingPage(props) {
  const [user, setUser] = useContext(UserContext);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    className: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    axios
      .post("https://master-budget-app.herokuapp.com/auth/login", {
        email,
        password,
      })
      .then((result) => {
        localStorage.setItem("userInfo", result.data.token);
        sessionStorage.setItem("email", result.data.email);
        setUser({
          authenticated: true,
          token: result.data.token,
        });
        const { history } = props;
        history.push("/app");
      })
      .catch((err) => {
        setError({
          className: "notification is-danger",
          message: err.response.data.message,
        });
        console.log(err.response.data.message);
      });
  };

  const validateLogin = () => {
    if (!localStorage.getItem("userInfo")) {
      return setUser({ authenticated: false });
    }
    const token = localStorage.getItem("userInfo");
    axios
      .get("https://master-budget-app.herokuapp.com/auth", {
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      })
      .then((result) => {
        if (result.status === 200) {
          setUser({
            authenticated: true,
            token: localStorage.getItem("userInfo"),
          });
        }
      })
      .catch((err) => {
        setError({
          className: "notification is-danger",
          message: "Your session has expired, please login again.",
        });
        return setUser({ authenticated: false });
      });
  };

  useEffect(() => {
    validateLogin();
  }, []);

  if (localStorage.getItem("userInfo") && user.authenticated) {
    return <Redirect to="/app" />;
  }
  return (
    <>
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <div className="container">
                  <div className={error.className}>{error.message}</div>
                </div>
                <form onSubmit={loginUser} className="box">
                  <div className="field">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <div className="control">
                      <input
                        onChange={(event) => handleInputChange(event)}
                        type="email"
                        name="email"
                        id="email"
                        value={inputs.email}
                        placeholder="e.g. bobsmith@gmail.com"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <div className="control">
                      <input
                        onChange={(event) => handleInputChange(event)}
                        value={inputs.password || ""}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*******"
                        className="input"
                        minLength="8"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  {/* <div className="field is-grouped is-grouped-centered">
                    <label htmlFor="checkbox" className="checkbox">
                      <input type="checkbox" id="checkbox" />
                      Remember me
                    </label>
                  </div> */}
                  <div className="field is-grouped is-grouped-centered">
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      <button className="button is-primary">Register</button>
                    </Link>
                    <button className="button is-success">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
