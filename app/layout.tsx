import React from "react";
import "@styles/globals.css";
import type { Metadata } from "next";
import { LayoutProps } from "@type/layout";

export const metadata: Metadata = {
  title: "SYAHAKATO",
  description: "Official Website of SYAHAKATO",
  icons: [
    {
      rel: "icon",
      url: "/favicon-dark.svg",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      url: "/favicon-light.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

const RootLayout: LayoutProps = ({ children }) => {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
