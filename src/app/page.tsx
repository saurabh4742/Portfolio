"use client"
import Accomplishments from "@/components/Accomplishments";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
export default function Home() {
  return (
    <div>
    <Navbar/>
    <HomePage/>
    <Profile/>
    <Projects/>
    <TechStack/>
    <Accomplishments/>
    </div>
  );
}
