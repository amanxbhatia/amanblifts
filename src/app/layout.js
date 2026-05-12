import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata = {
  title: {
    default: "lifttversity – Train Smart. Lift Real.",
    template: "%s | lifttvesity",
  },
  description:
    "lifttversity is a practical gym platform with exercise guides, workout routines, and real training knowledge built from daily gym experience.",
  metadataBase: new URL("https://lifttversity.vercel.app"),
  verification: {
    google: "aBBZd3eEQfRV10u-6knI9VLvswAt3OESN8B7lG1giU4",
  },
  openGraph: {
    title: "lifttversity – Train Smart. Lift Real.",
    description:
      "Explore real gym exercises, structured workout routines, and training knowledge from lifttversity.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "lifttversity fitness platform",
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
