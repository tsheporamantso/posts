import { nanoid } from "nanoid";
import SinglePost from "./SinglePost";
import { useFetchTasks } from "../hooks/reactQueryCustomHooks";

const Posts = () => {
  const { data, isLoading, isError } = useFetchTasks();
  if (isLoading) {
    return <p style={{ color: "green" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ color: "red" }}>Something went wrong, fetching data!</p>;
  }

  return (
    <div>
      {data.map((post) => {
        return <SinglePost {...post} key={nanoid()} />;
      })}
    </div>
  );
};

export default Posts;
