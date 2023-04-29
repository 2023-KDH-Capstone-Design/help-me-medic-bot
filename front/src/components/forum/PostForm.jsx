import React from "react";

const PostForm = () => {
  const handleSubmit = () => {
    alert("test");
  };

  return (
    <form className="card w-full bg-base-100 shadow-xl" onSubmit={handleSubmit}>
      <div className="card-body">
        <textarea
          className="textarea textarea-bordered"
          placeholder="What's on your mind?"
        />
        <div className="card-actions justify-end">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
