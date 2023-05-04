import React, { useState } from "react";
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
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <div className="w-[80%] p-6 space-y-4 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 md:max-w-md">
        <h1 className="font-semibold text-center text-gray-700">
          <div className="text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
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
              <a
                href="#"
                className="text-gray-600 hover:underline hover:text-blue-600"
              >
                Sign up
              </a>
            </div>
            <button className="btn btn-block" onClick={handleLogIn}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
