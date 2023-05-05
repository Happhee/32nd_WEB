import PageLayout from "../components/PageLayout";
import { Outlet } from "react-router-dom";
import ImgCardList from "../components/ImgCardList";

const Gallery = () => {
  return (
    <PageLayout>
      <ImgCardList />
      <Outlet />
    </PageLayout>
  );
};

export default Gallery;
