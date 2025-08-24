
import "./globals.css";
import ClientShell from '@/components/ClientShell';

export const metadata = {
  title: "Randomize",
  description: "Official website of Randomize MUJ, the official coding club of Manipal University Jaipur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  {/* Viewport meta for responsive scaling */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Faster font loading: preconnect + stylesheet (swap) */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="relative overflow-x-hidden">
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
