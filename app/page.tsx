import Blogs from "./components/Blogs";
import FrontendMentor from "./components/FrontendMentor";
import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import TechStack from "./components/TechStack";

export default function Home() {
    return (
        <div className="flex flex-col gap-32">
            <Hero />
            <TechStack />
            <RecentProjects />
            <Blogs />
            <FrontendMentor />
        </div>
    );
}
