import { Inter, Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const roboto_serif = Roboto_Serif({
  weight: ["100", "400", "300", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} md:mx-auto max-w-screen-xl px-4 select-none bg-white min-h-screen`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
