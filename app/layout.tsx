import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const RalewayFont = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Me-frmnsyh",
  description: "My Portfolio",
  icons: {
    icon: "/porto.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${RalewayFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
