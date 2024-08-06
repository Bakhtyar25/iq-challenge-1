import { Countdown } from "../components/Countdown";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-6  relative">
      <main className="w-full pt-24">
        <div className="flex flex-col items-center gap-14 md:gap-24">
          <h1 className="text-center text-lg font-bold uppercase tracking-[0.3em] text-white md:text-xl">
            We&apos;re launching soon
          </h1>
          <Countdown />
        </div>
      </main>
      <Footer />
    </div>
  );
}
