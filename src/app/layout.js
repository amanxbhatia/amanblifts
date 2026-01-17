import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata = {
  title: {
    default: "amanblifts – Train Smart. Lift Real.",
    template: "%s | amanblifts",
  },
  description:
    "amanblifts is a practical gym platform with exercise guides, workout routines, and real training knowledge built from daily gym experience.",
  metadataBase: new URL("https://amanblifts.vercel.app"),
  verification: {
    google: "aBBZd3eEQfRV10u-6knI9VLvswAt3OESN8B7lG1giU4",
  },
  openGraph: {
    title: "amanblifts – Train Smart. Lift Real.",
    description:
      "Explore real gym exercises, structured workout routines, and training knowledge from amanblifts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "amanblifts fitness platform",
      },
    ],
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
