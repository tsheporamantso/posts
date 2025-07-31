import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import customFetch from "../axios/utils";
import { toast } from "react-toastify";

const Form = () => {
  const [text, setText] = useState("");

  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: ({ postTitle, postBody }) =>
      customFetch("/posts", { title: postTitle, body: postBody }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post Added");
      setText("");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

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
