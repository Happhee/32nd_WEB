import { lazy, Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const DetailCardPage = lazy(() => import("./pages/DetailCard"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const DetailCard = lazy(() => import("./components/DetailCard"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/gallery" element={<DetailCardPage />}>
            <Route path=":cardId" element={<DetailCard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
