import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <h1 className="text-primary text-xl font-semibold text-center transition-all duration-200 md:text-3xl">
        <span>Create </span>
        <span className="text-base-content">Account</span>
      </h1>
      <form className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-base">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-base">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-base">Nickname</span>
          </label>
          <input
            type="text"
            placeholder="Nickname"
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-base">Country</span>
          </label>
          <select
            className="select select-bordered w-full"
            defaultValue="Select Country"
          >
            <option disabled>Select Country</option>
            <option>South korea</option>
            <option>USA</option>
            <option>UK</option>
            <option>spain</option>
            <option>prance</option>
            <option>france</option>
            <option>Indonesia</option>
            <option>Japan</option>
            <option>China</option>
            <option>Taiwan</option>
            <option>Portugal</option>
            <option>Russia</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            Already have an account?
            <Link
              to="/"
              className="text-gray-600 hover:underline hover:text-blue-600"
            >
              Login
            </Link>
          </div>
          <button className="btn btn-block">Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
