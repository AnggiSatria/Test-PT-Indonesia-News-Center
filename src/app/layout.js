import Providers from "@/lib/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inilah News",
  description: "Inillah News",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
