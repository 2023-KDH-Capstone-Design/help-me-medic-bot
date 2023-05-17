import React from "react";
import { useTranslation } from "react-i18next";

const PostForm = () => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    alert("test");
  };

  return (
    <form className="card w-full bg-base-100 shadow-xl" onSubmit={handleSubmit}>
      <div className="card-body">
        <textarea
          className="textarea textarea-lg textarea-bordered"
          placeholder={t("content")}
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
