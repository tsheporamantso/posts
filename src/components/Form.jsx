import { useState } from "react";
import { useCreatePost } from "../hooks/reactQueryCustomHooks";

const Form = () => {
  const [text, setText] = useState("");
  const { createPost, isPending } = useCreatePost(setText);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <label htmlFor="title" style={{ textAlign: "center" }}>
        Create Post
      </label>
      <input
        type="text"
        name="title"
        id="title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" disabled={isPending} style={{}}>
        Create Post
      </button>
    </form>
  );
};

export default Form;
