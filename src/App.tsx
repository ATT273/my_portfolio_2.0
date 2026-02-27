import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import PageProvider from "./components/PageProvider";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import TopBanner from "./components/TopBanner";
import Works from "./components/Works";

function App() {
  return (
    <PageProvider>
      <div className="relative w-dvw h-dvh overflow-y-auto text-neutral-900 bg-zinc-900">
        {/* <Topbar /> */}
        <div className="w-full overflow-x-hidden">
          <TopBanner />
          <Sidebar />
          <About />
          <Works />
          <Experience />
          <Skills />
        </div>
      </div>
    </PageProvider>
  );
}

export default App;
