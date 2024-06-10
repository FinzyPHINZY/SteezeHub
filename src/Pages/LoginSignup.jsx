import { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formHandler = (e) => [
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    })),
  ];

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (state === "Sign Up") {
      let responseData;

      await fetch("https://steezehub-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => (responseData = data));

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/SteezeHub");
      } else {
        alert("Signup Failed: Please Try Again");
      }
    } else {
      let responseData;

      await fetch("https://steezehub-backend.onrender.com/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => (responseData = data));

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/SteezeHub");
      } else {
        alert(`Login Failed: ${responseData.message}`);
      }
    }
  };

  return (
    <div className="loginSignup">
      <div className="loginSignup__container">
        <h1>{state}</h1>

        <form onSubmit={onSubmitHandler} className="loginSignup__fields">
          {state === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={formHandler}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            name="email"
            onChange={formHandler}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={formHandler}
          />
          <button type="submit">Continue</button>
        </form>

        {state === "Sign Up" ? (
          <p className="loginSignup__login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginSignup__login">
            Create an account?{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}

        {state === "Sign Up" && (
          <div className="loginSignup__agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
