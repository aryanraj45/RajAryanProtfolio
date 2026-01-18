import { useState } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";
import TabNavigation from "@/components/TabNavigation";
import FloatingDots from "@/components/FloatingDots";
import AboutSection from "@/components/sections/AboutSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "projects":
        return <ProjectsSection />;
      case "achievements":
        return <AchievementsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingDots />
      
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <ProfileSidebar />

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="glass-card p-8 md:p-10 lg:p-12">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
              {renderSection()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
