import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mettamuse. An Ecommerce website for shopping products",
  description:
    "Mettamuse is a Next.js-powered store offering quality products to inspire creativity and enhance your lifestyle. Shop smarter, live better with Mettamuse!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} s>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
