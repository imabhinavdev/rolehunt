import {
  Inter,
  Roboto,
  Roboto_Serif,
  Poppins,
  DM_Serif_Text,
} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const roboto = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-pop",
  display: "swap",
});

const roboto_serif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
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
      <body className={`${roboto.variable} ${roboto_serif.variable} font-pop `}>
        {children}
      </body>
    </html>
  );
}
