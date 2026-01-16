import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
