import { ToastContainer } from "react-toastify";
import Posts from "./components/Posts";
import Form from "./components/Form";
function App() {
  return (
    <>
      <ToastContainer position="bottom-left" />
      <Posts />
      <Form />
    </>
  );
}

export default App;
