import "./globals.css";

export const metadata = {
  title: "Danni Darkoh",
  description: "Danni Darkoh content available here. Music, videos, tour dates, merchandise and bookings available here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
