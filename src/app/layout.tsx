import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// const inter = Inter({ subsets: ['latin'] })
// const gambetta = localFont({ src: '../styles/fonts/WEB/fonts'})
const gambetta = localFont({
  src: [
    {
      path: "../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-Bold.woff2",
      style: "bold",
    },
    // {
    //   path: '../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-BoldItalic.woff2',
    //   style: 'boldItalic',
    // },
    {
      path: "../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-Italic.woff2",
      style: "italic",
    },
    // {
    //   path: '../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-Light.woff2',
    //   style: 'light',
    // },
    // {
    //   path: '../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-LightItalic.woff2',
    //   style: 'LightItalic',
    // },
    // {
    //   path: '../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-MediumItalic.woff2',
    //   style: 'MediumItalic',
    // },
    // {
    //   path: '../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-SemiboldItalic.woff2',
    //   style: 'SemiboldItalic',
    // },
    {
      path: "../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-Variable.woff2",
      style: "variable",
    },
    // {
    //   path: '../styles/Gambetta_Complete/Fonts/WEB/fonts/Gambetta-VariableItalic.woff2',
    //   style: 'VariableItalic'
    // }
  ],
});

import "./globals.css";
import ActiveSectionContextProvider from "@/providers/active-section-context";
import Footer from "@/components/Footer";
import ThemeSwitchButton from "@/components/ThemeSwitchButton";
import ThemeContextProvider from "@/providers/theme-context";

export const metadata: Metadata = {
  title: "Harsha Portfolio",
  description: "Personal Website of a university student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${gambetta.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1e3e51]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#536095]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-center" reverseOrder={false} />
            <ThemeSwitchButton />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
