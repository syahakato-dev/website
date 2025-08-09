import React from "react";
import "@styles/globals.css";
import type { Metadata } from "next";
import { LayoutProps } from "@type/layout";

export const metadata: Metadata = {
  title: "SYAHAKATO",
  description:
    "Official Website of SYAHAKATO, Get an idea, evaluate it, develop it, go back to sleep.",
};

const RootLayout: LayoutProps = ({ children }) => {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
