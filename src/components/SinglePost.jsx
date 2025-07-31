import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import customFetch from "../axios/utils";
import { toast } from "react-toastify";

const SinglePost = ({ id, title, body }) => {
  const queryClient = useQueryClient();
  const { mutate: deletePost } = useMutation({
    mutationFn: (postId) => customFetch(`/posts/${postId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post Deleted Successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

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
