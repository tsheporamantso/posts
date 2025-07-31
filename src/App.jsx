import { ToastContainer } from "react-toastify";
import Posts from "./components/Posts";
function App() {
  return (
    <>
      <ToastContainer position="bottom-left" />
      <Posts />
    </>
  );
}

export default App;
