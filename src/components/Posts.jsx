import React from "react";
import customFetch from "../axios/utils";
import { useQuery } from "@tanstack/react-query";
import { nanoid } from "nanoid";

import SinglePost from "./SinglePost";

const Posts = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await customFetch("/posts");
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ color: "green" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ color: "red" }}>Something went wrong, fetching data!</p>;
  }

  return (
    <div>
      {data?.map((post) => {
        return <SinglePost {...post} key={nanoid()} />;
      })}
    </div>
  );
};

export default Posts;
