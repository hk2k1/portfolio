import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

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
    <html lang="en">
      <body
        className={`${gambetta.className} bg-gray-40 relative h-[5000px] pt-28`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
