import { useState } from "react";
import { useCreatePost } from "../hooks/reactQueryCustomHooks";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { createPost, isPending } = useCreatePost(setTitle, setBody);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    createPost(title, body);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Create Post</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem" }}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="Body">Body:</label>
        <input
          type="body"
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" disabled={isPending} style={{}}>
          Create Post
        </button>
      </form>
    </>
  );
};

export default Form;
