import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "@/fonts/newFont";

export const metadata: Metadata = {
  title: "Cr-Cycle CRM",
  description: "A real estate CRM system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
