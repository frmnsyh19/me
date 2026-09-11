import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${RalewayFont.variable} h-full antialiased`}
      data-theme="dark">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
