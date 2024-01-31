"use client"
import Achievements from "@/components/Achievements";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div>
    <Navbar/>
    <HomePage/>
    <Profile/>
    <Projects/>
    <Achievements/>
    </div>
  );
}
