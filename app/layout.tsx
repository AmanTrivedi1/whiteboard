import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WriteIt",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
};                                              
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
        <Toaster />
        <ModalProvider />
           {children}
        </ConvexClientProvider>
        </body>
    </html>
  );
}
