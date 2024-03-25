import Contents from "@/components/Contents";
import Footer from "@/components/Footer";
import KeyVisual from "@/components/KeyVisual";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <KeyVisual />
      <Contents />
      <Footer />
    </div>
  );
}
