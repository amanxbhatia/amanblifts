import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata = {
  title: "amanblifts",
  description: "Daily gym edits, workout knowledge & AI gym coach",
   openGraph: {
    title: "amanblifts",
    description: "Train smart. Lift real. Free workouts & AI gym coach.",
    url: "https://amanblifts.vercel.app",
    siteName: "amanblifts",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "amanblifts - Fitness & AI Gym Coach",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
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
