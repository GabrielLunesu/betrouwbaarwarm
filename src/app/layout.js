import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/lib/language-context";
import { RootLayoutContent } from "@/components/root-layout-content";

export const metadata = {
  title: "Daniel Gábor Dakrenovatie",
  description: "Uw betrouwbare dakdekker met meer dan 10 jaar ervaring en 450 succesvolle projecten in heel Nederland.",
};

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </LanguageProvider>
  );
}
