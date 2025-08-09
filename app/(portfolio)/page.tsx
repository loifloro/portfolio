import Blogs from "./_components/Blogs";
import FrontendMentor from "./_components/FrontendMentor";
import Hero from "./_components/Hero";
import RecentProjects from "./_components/RecentProjects";
import TechStack from "./_components/TechStack";

export default function Home() {
    return (
        <main className="flex flex-col gap-44">
            <Hero />
            <TechStack />
            <RecentProjects />
            <Blogs />
            <FrontendMentor />
        </main>
    );
}
