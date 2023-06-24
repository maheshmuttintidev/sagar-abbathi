import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Sagar Abbathi | Sagar</title>
      <head />
      <body>{children}</body>
    </html>
  );
}
