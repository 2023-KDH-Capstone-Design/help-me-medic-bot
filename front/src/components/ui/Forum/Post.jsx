import React from "react";

const Post = () => {
  return (
    <div
      class="border border-success p-2 mb-2 border-opacity-50 rounded"
      style={{ margin: "0.5em" }}
    >
      <div class="d-grid gap-2" style={{ margin: "0.5em" }}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Add post"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ height: "10em" }}
          />
        </div>
        <div class="d-grid gap-2">
          <button
            type="button"
            class="btn btn-primary"
            style={{ height: "3em" }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
