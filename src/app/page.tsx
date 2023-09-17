import MainLayout from "src/layouts/main";
import ElearningLandingView from "src/sections/_elearning/view/elearning-landing-view";
import HomeView from "src/sections/_home/view/home-view";

// ----------------------------------------------------------------------

export const metadata = {
  title: "The starting point for your next project",
};

export default function HomePage() {
  return (
    // <MainLayout>
    <>
      <ElearningLandingView />
    </>
    // </MainLayout>
  );
}
