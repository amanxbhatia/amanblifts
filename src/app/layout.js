import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata = {
  title: "amanblifts",
  description: "Daily gym edits, workout knowledge & AI gym coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
       <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
