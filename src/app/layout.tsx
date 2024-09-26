import "@radix-ui/themes/styles.css";
import { NextThemeProvider } from "@/components/Provider/NextTheme";
import { Theme } from "@radix-ui/themes";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import NextAuthProvider from "@/components/Provider/NextAuth";
import { getServerSession } from "next-auth";
import { options } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aplikasi Presensi Sekolah",
  description: "kopikonfig.com",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>
          <Theme accentColor="violet" panelBackground="solid">
            <NextAuthProvider session={session}>
              <Header />
              {children}
            </NextAuthProvider>
          </Theme>
        </NextThemeProvider>
      </body>
    </html>
  );
}
