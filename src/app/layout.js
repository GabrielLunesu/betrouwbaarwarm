'use client';

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
