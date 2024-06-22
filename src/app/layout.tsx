import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_header";

const princesaRegular = localFont({
  src: "./_fonts/Princesa-Regular.otf",
  display: "swap",
  variable: "--font-princesa-regular",
});

const princesaLight = localFont({
  src: "./_fonts/Princesa-ExtraLight.otf",
  display: "swap",
  variable: "--font-princesa-light",
});

export const metadata: Metadata = {
  title: "TBJS",
  description: "The Bhavini Johar Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${princesaLight.variable} ${princesaRegular.variable}`}
    >
      <body className="bg-white font-priencesa-regular">
        <Header />
        {children}
      </body>
    </html>
  );
}
