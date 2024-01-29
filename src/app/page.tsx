"use client"
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import  Profile  from "@/components/Profile";
export default function Home() {
  return (
    <div className="font-serif overflow-hidden">
    <Navbar/>
    <HomePage/>
    <Profile/>
    </div>
  );
}
