import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/lib/language-context";

export const metadata = {
  title: "Daniel Gábor Dakrenovatie",
  description: "Uw betrouwbare dakdekker met meer dan 10 jaar ervaring en 450 succesvolle projecten in heel Nederland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
