import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "../axios/utils";
import { toast } from "react-toastify";

export const useFetchTasks = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await customFetch("/posts");
      return data.slice(0, 5);
    },
  });
  return { isLoading, data, isError };
};

export const useCreatePost = (setText, setBody) => {
  const queryClient = useQueryClient();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: ({ postTitle, postBody }) =>
      customFetch("/posts", { title: postTitle, body: postBody }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post Added");
      setText("");
      setBody("");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
  return { createPost, isPending };
};

export const useDeletePost = () => {
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
  return { deletePost };
};
