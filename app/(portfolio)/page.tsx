import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";

export default function Home() {
    return (
        <div className="flex flex-col gap-44">
            <Hero />
            <TechStack />
            <RecentProjects />
            <Blogs />
        </div>
    );
}
