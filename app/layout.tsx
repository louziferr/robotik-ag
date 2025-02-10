import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/aldrich";
import "@fontsource/alfa-slab-one";

export const metadata: Metadata = {
  title: "Robotik AG",
  description: "Robotik AG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
