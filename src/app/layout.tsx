import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ShoppingCartProvider } from "@/context/ShopingCartContext";

export const viewport: Viewport = { width: "device-width", initialScale: 1 }

export const metadata: Metadata = {
  title: "Album Art",
  description: "Album art",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
  },
};




export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <ShoppingCartProvider>
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
