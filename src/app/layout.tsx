import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import "./globals.css";
import Container from "@/components/layout/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          "text-stone-80 bg-stone-50",
          "min-h-screen flex flex-col place-items-center place-content-center p-24",
          inter.className
        )}
      >
        <Container>{children}</Container>
        <Navigation />
      </body>
    </html>
  );
}
