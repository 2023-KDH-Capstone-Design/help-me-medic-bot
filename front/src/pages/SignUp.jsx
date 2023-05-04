import React from "react";

const SignUp = () => {
  return (
    <div class="relative flex flex-col justify-center h-screen overflow-hidden">
      <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          <div className="text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
            <span class="lowercase">Medi</span>
            <span class="text-base-content uppercase">Chat</span>
          </div>
        </h1>
        <form class="space-y-4">
          <div>
            <label class="label label-text">
              <span class="text-base">ID</span>
            </label>
            <input
              type="text"
              placeholder="Enter ID"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label label-text">
              <span class="text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label label-text">
              <span class="text-base">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label label-text">
              <span class="text-base">Nickname</span>
            </label>
            <input
              type="text"
              placeholder="Nickname"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base">Country</span>
            </label>
            <select class="select select-bordered w-full">
              <option disabled selected>
                Select Country
              </option>
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
          <div>
            <button class="btn btn-block">Sign Up</button>
          </div>
          <span>
            Already have an account ?
            <a href="#" class="text-base text-gray-500">
              Login
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
