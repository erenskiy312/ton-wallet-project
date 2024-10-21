"use client";
import localFont from "next/font/local";
import { BrowserRouter } from "react-router-dom";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BrowserRouter>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      </BrowserRouter>
    </html>
  );
}
