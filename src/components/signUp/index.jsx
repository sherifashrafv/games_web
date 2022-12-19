import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./index.module.scss";
export default function Login({ saveUserData }) {
  const [user, setUser] = useState({
    first_Name: "",
    email: "",
    password: "",
    age: "",
    last_name: "",
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
      first_Name: Joi.string().required(),
      last_name: Joi.string().required(),
      age: Joi.number().required().min(0).max(100),
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
      let data = await axios.post(
        "https://sticky-note-fe.vercel.app/signup",
        user
      );
      console.log(data);
      if (data.status == 200) {
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
        <div className="container" style={{ padding: "4rem" }}>
          <div className="register card o-hidden border-0 shadow-lg">
            <div className="card_body p-0">
              <div className="row">
                <div
                  className={`col-lg-6 d-none d-lg-block ${Styles.bg_register_image}`}
                ></div>
                <div className={`col-lg-6 ${Styles.login}`}>
                  <div className="p-5">
                    <div className="text-center">
                      <h1
                        style={{ color: "#aaaaaa" }}
                        className="h4 text-gray-900 mb-4"
                      >
                        Create My Account!
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
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            onChange={getInputValue}
                            type="text"
                            name="first_Name"
                            placeholder="First-Name"
                            className={`form-control form-control-user ${Styles.deep_dark} ng-untouched ng-pristine ng-invalid`}
                          />
                        </div>
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            onChange={getInputValue}
                            name="last_name"
                            placeholder="Last-Name"
                            className={`form-control form-control-user ${Styles.deep_dark} ng-untouched ng-pristine ng-invalid`}
                          />
                        </div>
                      </div>
                      <div className="form-group my-4">
                        <input
                          type="text"
                          name="email"
                          onChange={getInputValue}
                          placeholder="Email Address"
                          className={`form-control form-control-user ${Styles.deep_dark} ng-untouched ng-pristine ng-invalid`}
                        />
                      </div>
                      <div className="form-group my-4">
                        <input
                          type="number"
                          name="age"
                          onChange={getInputValue}
                          placeholder="Age"
                          className={`form-control form-control-user ${Styles.deep_dark} ng-untouched ng-pristine ng-invalid`}
                        />
                      </div>
                      <div className="form-group my-4">
                        <input
                          type="password"
                          name="password"
                          onChange={getInputValue}
                          placeholder="password"
                          className={`form-control form-control-user ${Styles.deep_dark} ng-untouched ng-pristine ng-invalid`}
                        />
                      </div>
                      <button
                        type="submit"
                        name="submitButton"
                        className={`btn ${Styles.btn_primary} btn-user btn-block w-100 py-2`}
                      >
                        <span>Create Account</span>
                      </button>
                      <div className="text-muted small">
                        This site is protected by reCAPTCHA and the Google{" "}
                        <a
                          href="https://policies.google.com/privacy"
                          className="text-secondary"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                          _ngcontent-ftx-c22=""
                          href="https://policies.google.com/terms"
                          className="text-secondary"
                        >
                          Terms of Service
                        </a>{" "}
                        apply.
                      </div>
                    </form>
                    <hr style={{ color: "#6c757d", opacity: "1" }}></hr>
                    <div className="text-center">
                      <span style={{ color: "#aaaaaa" }} className="small">
                        Already a member?
                      </span>
                      <Link
                        style={{
                          color: "#4799eb",
                          backgroundColor: "transparent",
                        }}
                        className="small a2 cursor ms-2 text-decoration-none"
                        to="/login"
                      >
                        Log In
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
