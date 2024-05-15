
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTarvel",
  description: "Travel agency website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff'
              },
              duration: 2500,
            }}
          />
      </body>
    </html>
  );
}

