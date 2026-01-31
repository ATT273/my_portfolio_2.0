import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import PageProvider from "./components/PageProvider";
import PetProjects from "./components/PetProjects";
import Sidebar from "./components/Sidebar";
import TopBanner from "./components/TopBanner";
import Topbar from "./components/Topbar";
import Works from "./components/Works";

function App() {
  return (
    <PageProvider>
      <div className="relative w-dvw h-dvh overflow-y-auto text-neutral-900 bg-neutral-200">
        <Topbar />
        <div className="w-full overflow-y-auto overflow-x-hidden">
          <TopBanner />
          <Sidebar />
          <About />
          <Experience />
          <Works />
          <PetProjects />
        </div>
      </div>
    </PageProvider>
  );
}

export default App;
