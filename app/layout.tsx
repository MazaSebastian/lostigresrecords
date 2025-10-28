import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Los Tigres Records - Productora Musical",
  description: "Productora musical especializada en composición, producción e interpretación. Convertimos tus ideas en hits y potenciamos carreras artísticas.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "Los Tigres Records - Productora Musical",
    description: "Productora musical especializada en composición, producción e interpretación. Convertimos tus ideas en hits y potenciamos carreras artísticas.",
    url: "https://lostigresrecords.vercel.app",
    siteName: "Los Tigres Records",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Tigres Records - Productora Musical",
    description: "Productora musical especializada en composición, producción e interpretación. Convertimos tus ideas en hits y potenciamos carreras artísticas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
