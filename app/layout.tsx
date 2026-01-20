import type { Metadata } from "next";
import { Inter, Josefin_Sans, Oswald } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import DynamicBackground from "./components/DynamicBackground";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "X1 Fitness",
  description: "X1 Fitness - Your Go-To For Personalized Workouts, Meal Plans, And Expert Fitness Advice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${oswald.variable} ${josefinSans.variable} bg-brand-dark text-white antialiased`}
      >
        <CustomCursor />
        <div className="bg-brand-dark min-h-screen w-full relative selection:bg-brand-red selection:text-white scroll-smooth">
          <DynamicBackground />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
