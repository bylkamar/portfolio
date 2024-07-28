import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { url } from "inspector";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aitchikhoune-amer.fr/"),
  title: {
    default: "Accueil | AIT CHIKHOUNE Amer",
    template: "%s | AIT CHIKHOUNE Amer",
  },
  description:
    "Amer AIT CHIKHOUNE, étudiant en informatique en BTS Services Informatiques aux Organisations option SLAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#1F1F1F]`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
