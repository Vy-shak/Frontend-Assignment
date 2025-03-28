
import "../globals.css";
import { Navbar,MiniSidebar } from "../../components/index";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-dm-sans",
  });
  
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className={`${dmSans.variable} antialiased flexStart w-full h-full`}>
            {/* <MiniSidebar/> */}
            <Navbar />
            {children}
            </body>
      </html>
    );
  }