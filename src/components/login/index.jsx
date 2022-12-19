import React, { useState } from "react";
import Styles from "./index.module.scss";
import Logo from "../../Assets/images/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
export default function Login({ saveUserData }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const [errorMessage, setError] = useState("");
  const [errorList, setErrorList] = useState([]);
  const forgetPassword = () => {
    alert("هههه اعمل اكونت جديد يامعلم");
  };
  const getInputValue = (e) => {
    e.preventDefault();
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  let validateFormData = () => {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string().required(),
    });
    return schema.validate(user, { abortEarly: false });
  };
  let submitFormData = async (e) => {
    e.preventDefault();
    let validationResponse = validateFormData();
    console.log(validationResponse);
    if (validationResponse.error) {
      setErrorList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        "https://sticky-note-fe.vercel.app/signin",
        user
      );
      console.log(data);
      if (data.message == "success") {
        localStorage.setItem("token", data.token);
        navigate("/");
        saveUserData();
      } else {
        setError(data.message);
      }
    }
  };

  return (
    <>
      <section className={`${Styles.main_cont}`}>
        <div className="container" style={{ padding: "3rem" }}>
          <div className="register card o-hidden border-0 shadow-lg">
            <div className="card_body p-0">
              <div className="row">
                <div
                  className={`col-lg-6 d-none d-lg-block ${Styles.bg_register_image}`}
                ></div>
                <div className={`col-lg-6 ${Styles.login}`}>
                  <div className="p-5">
                    <div className="text-center">
                      <img height="72px" src={Logo} />
                      <h1 style={{ color: "#aaaaaa" }} className="h4  mb-4">
                        Log in to GameOver
                      </h1>
                    </div>
                    <form
                      onSubmit={submitFormData}
                      className="user ng-untouched ng-pristine ng-invalid"
                    >
                      {errorList.map((error, index) => (
                        <p key={index} className="alert alert-danger">
                          {error.message}
                        </p>
                      ))}
                      <div className="form-group mb-4">
                        <input
                          type="text"
                          name="email"
                          placeholder="email"
                          onChange={getInputValue}
                          className="form-control form-control-user deep-dark py-2 ng-untouched ng-pristine ng-invalid"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          autoComplete="off"
                          onChange={getInputValue}
                          className="form-control form-control-user deep-dark py-2 ng-untouched ng-pristine ng-invalid"
                        />
                      </div>
                      <button
                        type="submit"
                        name="submitButton"
                        className={`btn ${Styles.btn_primary} btn-user btn-block w-100 py-2`}
                      >
                        <span>Login</span>
                      </button>
                    </form>
                    <hr></hr>
                    <div className="text-center">
                      <a
                        role="button"
                        onClick={() => alert("هههه اعمل اكونت جديد يامعلم")}
                        className={`small ${Styles.a2}`}
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <span
                        style={{ color: "rgb(170, 170, 170)" }}
                        className="small"
                      >
                        Not a member yet?
                      </span>
                      <Link className={`small ${Styles.a2}`} to="/signUp">
                        Create Account
                        <i className="fas fa-chevron-right small"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
