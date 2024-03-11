import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Changes the header in the browser tab
export const metadata = {
  title: "My Portfolio",
  description: "Daniel Morley's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
