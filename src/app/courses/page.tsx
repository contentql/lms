import MainLayout from "src/layouts/main";
import ElearningCoursesView from "src/sections/_elearning/view/elearning-courses-view";
import Header from "../../layouts/main/";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Courses",
};

export default function ElearningCoursesPage() {
  return (
    <MainLayout>
      <ElearningCoursesView />
    </MainLayout>
  );
}
