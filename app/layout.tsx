
import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: 'CarpTravel',
  description:
    'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main>{children}</main>
        <div id="modal-root"></div>
    </html>
  );
}
