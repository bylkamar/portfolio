import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/footer";
const inter = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | AIT CHIKHOUNE Amer",
    default: "Portfolio | AIT CHIKHOUNE Amer",
  },
  description:
    "Portfolio de AIT CHIKHOUNE Amer, étudiant en BTS informatique (SIO SLAM).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`${inter.className} `}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
