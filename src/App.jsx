import GlobalStyles from "./globalStyles";
import Router from "./router/index.jsx";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Toaster position="top-right"/>
      <GlobalStyles />
      <Router />
      
    </>
  );
}

export default App;