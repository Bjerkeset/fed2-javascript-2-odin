import {ThemeProvider} from "@/components/providers/theme-provider";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Topbar from "@/components/shared/navigation/Topbar";
import ConditionallyRenderLeftSidebar from "@/components/shared/navigation/ConditionallyRenderLeftSidebar";
import ConditionallyRenderRightSidebar from "@/components/shared/navigation/ConditionallyRenderRightSidebar";
import Bottombar from "@/components/shared/navigation/Bottombar";
import RightSidebar from "@/components/shared/navigation/RightSidebar";
import LeftSidebar from "@/components/shared/navigation/LeftSidebar";
import LeftsidebarWrapper from "@/components/shared/navigation/LeftsidebarWrapper";
import {RefreshProvider} from "@/lib/RefreshContext";
export const dynamic = "force-dynamic";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Share our thoughts on Switter",
  description: "A social network for sharing thoughts and ideas",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RefreshProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Topbar />
            <main className="flex flex-row">
              <LeftsidebarWrapper />
              <section className="main-container">{children}</section>
              <ConditionallyRenderRightSidebar />
            </main>
            <Bottombar />
          </ThemeProvider>
        </RefreshProvider>
      </body>
    </html>
  );
}
