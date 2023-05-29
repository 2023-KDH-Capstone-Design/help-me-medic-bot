import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const PostForm = () => {
  const { t } = useTranslation();
  const postInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://메디챗.웹.한국/posts`, {
        userId: sessionStorage.getItem("user_id"),
        content: postInput.current.value,
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <form className="card w-full bg-base-100 shadow-xl" onSubmit={handleSubmit}>
      <div className="card-body">
        <textarea
          className="textarea textarea-lg textarea-bordered"
          placeholder={t("content")}
          ref={postInput}
        />
        <div className="card-actions justify-end">
          <button type="submit" className="btn btn-primary w-full">
            {t("post")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
