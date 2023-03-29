import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
