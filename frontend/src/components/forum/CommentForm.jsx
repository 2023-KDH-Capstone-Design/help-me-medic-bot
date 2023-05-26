import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

import { IoSend } from "react-icons/io5";

const CommentForm = ({ id }) => {
  const { t } = useTranslation();
  const commentInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8080/posts/${id}/comments`, {
        userId: sessionStorage.getItem("user_id"),
        content: commentInput.current.value,
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder={t("comment")}
          className="input input-bordered w-full"
          ref={commentInput}
        />
        <button type="submit" className="btn btn-square">
          <IoSend size="16px" />
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
