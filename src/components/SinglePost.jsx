import React from "react";

const SinglePost = ({ title, body }) => {
  const basicStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  };

  return (
    <div style={basicStyle}>
      <article>
        <h4>{title}</h4>
        <p>{body}</p>
      </article>
    </div>
  );
};

export default SinglePost;
