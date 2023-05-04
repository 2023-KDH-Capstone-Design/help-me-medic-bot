import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const LogIn = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleLogIn = () => {
    // axios
    //   .post("http://localhost:8080/api/login", {
    //     email: inputId,
    //     passwd: inputPw,
    //   })
    //   .then((res) => {
    //     if (res.data.email === undefined) {
    //       alert("입력하신 id 가 일치하지 않습니다.");
    //     } else if (res.data.email === null) {
    //       alert("입력하신 비밀번호 가 일치하지 않습니다.");
    //     } else if (res.data.email === inputId) {
    //       sessionStorage.setItem("user_id", inputId);
    //       sessionStorage.setItem("name", res.data.name);
    //     }
    //     document.location.href = "/";
    //   })
    //   .catch();

    // test 코드
    sessionStorage.setItem("user_id", inputId);
    sessionStorage.setItem("name", inputId);
    document.location.href = "/";
  };

  return (
    <>
      <h1 className="font-semibold text-center">
        <div className="text-primary inline-flex text-xl transition-all duration-200 md:text-3xl">
          <span className="lowercase">Medi</span>
          <span className="text-base-content uppercase">Chat</span>
        </div>
      </h1>
      <form className="space-y-4">
        <div>
          <label className="label">
            <span className="text-base label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full input input-bordered"
            onChange={handleInputId}
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered"
            onChange={handleInputPw}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            Don't have an account?
            <Link
              to="/signup"
              className="text-gray-600 hover:underline hover:text-blue-600"
            >
              Sign up
            </Link>
          </div>
          <button className="btn btn-block" onClick={handleLogIn}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LogIn;
