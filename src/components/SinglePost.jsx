import React from "react";
import { useDeletePost } from "../hooks/reactQueryCustomHooks";

const SinglePost = ({ id, title, body }) => {
  const { deletePost } = useDeletePost();
  const basicStyles = { textTransform: "capitalize", textAlign: "center" };

  return (
    <div>
      <article>
        <h3 style={basicStyles}>{title}</h3>
        <p style={basicStyles}>{body}</p>
        <button
          style={{
            textAlign: "center",
            width: "100%",
          }}
          onClick={() => deletePost(id)}
        >
          Delete Post
        </button>
      </article>
    </div>
  );
};

export default SinglePost;
