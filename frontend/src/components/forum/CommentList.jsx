import React, { useState, useEffect } from "react";
import axios from "axios";

import Comment from "./Comment";

const PostList = ({ id }) => {
  let [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios.get(`http://메디챗.웹.한국:8080/posts/${id}/comments`).then((res) => {
      setCommentList(res.data.data);
    });
  }, [id]);

  return (
    <>
      {commentList.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
        />
      ))}
    </>
  );
};

export default PostList;
