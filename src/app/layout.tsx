import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dreamball Inc.",
  description: "Welcome to Dreamball Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}