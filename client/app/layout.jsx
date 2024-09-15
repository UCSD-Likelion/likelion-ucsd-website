import React from "react";
import Navigations from "../components/navigations";

export const metadata = {
  title: "Likelion UCSD | UCSD 멋쟁이사자처럼",
  description: "Likelion UCSD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigations />
        {children}
      </body>
    </html>
  );
}
