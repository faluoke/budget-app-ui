import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Registration(props) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
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

  const registerAccount = async (e) => {
    e.preventDefault();
    const { history } = props;
    const { firstName, lastName, email, password, repeatPassword } = inputs;
    if (password !== repeatPassword) {
      return setError({
        className: "notification is-danger",
        message: "The password that you entered do not match",
      });
    }
    try {
      const result = await axios.post("http://localhost:3000/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(result);
      history.push("/");
    } catch (err) {
      setError({
        className: "notification is-danger",
        message: err.response.data.message || err.response.data,
      });
      console.log(err.response.data);
    }
  };

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
                <form className="box" onSubmit={(e) => registerAccount(e)}>
                  <div className="field">
                    <label htmlFor="fname" className="label">
                      Name
                    </label>
                    <div className="control">
                      <input
                        onChange={(event) => handleInputChange(event)}
                        type="text"
                        name="firstName"
                        id="fname"
                        placeholder="First Name"
                        className="input"
                        required
                      />
                      <input
                        onChange={(event) => handleInputChange(event)}
                        type="text"
                        name="lastName"
                        id="lname"
                        placeholder="Last Name"
                        className="input"
                        required
                      />
                    </div>
                  </div>
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
                        placeholder="e.g. bobsmith@gmail.com"
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="password" className="label">
                      Create a Password
                    </label>
                    <div className="control">
                      <input
                        onChange={(event) => handleInputChange(event)}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter a Password"
                        className="input"
                        minLength="8"
                        required
                      />
                      <input
                        onChange={(event) => handleInputChange(event)}
                        type="password"
                        name="repeatPassword"
                        id="rPassword"
                        placeholder="Repeat Password"
                        className="input"
                        minLength="8"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field is-grouped is-grouped-centered">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <button className="button is-success">Login</button>
                    </Link>
                    <button className="button is-primary">Register</button>
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

export default Registration;
