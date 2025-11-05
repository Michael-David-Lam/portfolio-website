import NavBar from "./components/Nav" 
import LandingPage from "./components/LandingPage";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <NavBar />
      <ProjectCard />
    </div>
  );
}
