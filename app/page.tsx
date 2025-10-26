import { About } from "./components/About";
import { Details } from "./components/Details";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Ikhlak S. | Full-stack Developer.",
  description: "",
};

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navigation />
      <main className="lg:grid grid-cols-3 gap-8 text-gray-950 dark:text-white">
        <div className="lg:w-full lg:sticky lg:top-8 lg:self-start">
          <About />
        </div>
        <div className="lg:w-full lg:col-span-2">
          <Details />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
