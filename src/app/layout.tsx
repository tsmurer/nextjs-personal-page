import { Sidenav } from "@/components/sidenav";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidenav />
        <main className="app-content-container">
          {children}
        </main>
      </body>
    </html>
  );
}
