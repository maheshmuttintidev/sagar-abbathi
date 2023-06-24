import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Lokesh Doppasani | Lokesh</title>
      <head />
      <body>{children}</body>
    </html>
  );
}
