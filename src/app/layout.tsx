import { ReactNode } from "react";
import "./globals.css";
import { Navbar01 } from "@/components/shadcn-ui/components/ui/shadcn-io/navbar-01";

export const metadata = {
  title: "Bhakti Bhanushali | Portfolio | Website",
  description: "Personal Website and Portfolio",
};

export default function RootLayout ({children}: {children: ReactNode}){
  return (
    <html>
      <body>
        <div className="relative w-full">
        <Navbar01/>
        </div>
        {children}
      </body>
    </html>
  );
}
