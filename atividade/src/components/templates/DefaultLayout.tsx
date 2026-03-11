import { Header } from "../../components/organism/header";
import { Footer } from "@/src/components/organism/footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}