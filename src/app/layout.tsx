import type { Metadata } from "next";

import "./globals.css";

import React from "react";

import NavHead from "./components/navbar/navbar";
import { ReactNode } from 'react';

import Footbar from "./components/footer/footer";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
      
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body className="min-h-screen flex flex-col">
  <NavHead />
  <main className="flex-grow">  
    {children}
  </main>
  <Footbar />
</body>

    </html>
  );
}