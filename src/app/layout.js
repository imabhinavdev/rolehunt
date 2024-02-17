import { Inter, Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${roboto.variable} ${roboto_serif.variable} `}>
        {children}
      </body>
    </html>
  );
}
