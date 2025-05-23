import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });


export const metadata = {
  title: 'PrathyuStore - Your Online Shop',
  description: 'Browse our collection of amazing products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
