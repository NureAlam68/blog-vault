import { Inter } from "next/font/google";
import "./globals.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlogVault",
  description: "This is blog related website",
  icons: {
    icon: "/blog.png", 
  },
};

export default async function RootLayout({ children }) {
  const { isAuthenticated } = getKindeServerSession();
  const authStatus = await isAuthenticated();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar isAuthenticated={authStatus} />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}