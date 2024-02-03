import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });
import { MyContextProvider } from "@/ContextProvider/MyContext";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Licenced by Saurabh Anand ",
};

export default function RootLayout({
  children,profile,project,techstack,accomplishment,footer
}: {
  children: ReactNode;
  profile: ReactNode;
  project: ReactNode;
  techstack: ReactNode;
  accomplishment: ReactNode;
  footer: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "font-serif "}>
        <MyContextProvider>
        {children}
        {profile}
        {project}
        {techstack}
        {accomplishment}
        {footer}
        </MyContextProvider>
        
      </body>
    </html>
  );
}
