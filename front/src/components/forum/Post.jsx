import React from "react";

const Post = () => {
  return (
    <div className="border-solid border-2 border-grey rounded w-full">
      <div className="m-3">
        <img src="dog.jpg" alt="" className="w-8 h-8 inline m-2 rounded" />
        <p className="text-xl inline">
          <b>JoMeongWon</b>
        </p>
      </div>
      <div className="mb-3 ml-8 text-xl">Where we go?</div>
      <div>
        <form className="m-2">
          <label className="inline">
            <input
              type="text"
              placeholder="Comment!"
              className="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                    focus:outline-none focus:border-sky-500"
            />
          </label>
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-primary rounded-xl w-20">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
