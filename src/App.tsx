import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
