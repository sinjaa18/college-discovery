import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "College Discovery",
  description: "Find and compare colleges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="border-b p-4 flex gap-4">
          <Link href="/colleges">Colleges</Link>
          <Link href="/saved">Saved</Link>
          <Link href="/predictor">Predictor</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
