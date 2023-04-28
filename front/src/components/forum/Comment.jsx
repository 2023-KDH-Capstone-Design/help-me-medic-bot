import React from "react";

const Comment = () => {
  return (
    <div class="border-solid border-2 border-grey rounded w-full">
      <div class="m-3">
        <img src="dog.jpg" alt="" class="w-8 h-8 inline m-2 rounded" />
        <p class="text-xl inline">
          <b>JoMeongWon</b>
        </p>
      </div>
      <div class="mb-3 ml-8 text-xl">Where we go?</div>
      <div>
        <form class="m-2">
          <label class="inline">
            <input
              type="text"
              placeholder="Comment!"
              class="mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                    focus:outline-none focus:border-sky-500"
            />
          </label>
          <div class="card-actions justify-end">
            <button type="submit" class="btn btn-primary rounded-xl w-20">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
