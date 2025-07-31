import React from "react";

const SinglePost = ({ title, body }) => {
  const basicStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  };

  const basicStyles = { textTransform: "capitalize", textAlign: "center" };

  return (
    <div style={basicStyle}>
      <article>
        <h3 style={basicStyles}>{title}</h3>
        <p style={basicStyles}>{body}</p>
      </article>
    </div>
  );
};

export default SinglePost;
