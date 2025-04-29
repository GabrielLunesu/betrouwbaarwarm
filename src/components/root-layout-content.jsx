'use client';

import { useLanguage } from "@/lib/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function RootLayoutContent({ children }) {
  const { language } = useLanguage();
  
  return (
    <html lang={language} suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 