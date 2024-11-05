import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./layouts/navbar/Navbar";

const memoire = localFont({
  src: "./fonts/MouseMemoirs-Regular.woff2",
  variable: "--font-[memoire]",
  weight: "400",
  display: "swap"
});
const montserrat = localFont({
  src: "./fonts/Montserrat-Regular.woff2",
  variable: "--font-[memoire]",
  weight: "400, 100",
  display: "swap"
});
export const metadata = {
  title: "My Pets Care",
  description: "All about taking care of your pets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${memoire.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
