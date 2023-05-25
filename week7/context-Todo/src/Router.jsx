import { lazy, Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const TodoMainPage = lazy(() => import("./pages/TodoMain"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<TodoMainPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
