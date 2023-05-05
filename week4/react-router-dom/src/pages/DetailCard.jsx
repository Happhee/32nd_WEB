import PageLayout from "../components/PageLayout";
import { Outlet } from "react-router-dom";

const DetailCardPage = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default DetailCardPage;
