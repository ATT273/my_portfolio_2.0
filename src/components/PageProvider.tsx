import { createContext, useContext, useEffect, useState } from "react";
import type { PageAnchor } from "../types";

interface PageContextType {
  activeSection: PageAnchor;
  navigateToSection: (section: PageAnchor) => void;
}

interface PageProviderProps {
  children: React.ReactNode;
}
const PageContext = createContext<PageContextType | null>(null);

const PageProvider = ({ children }: PageProviderProps) => {
  // const activeSection = (window.location.href.split("#")[1] as PageAnchor) || "about";
  const [activeSection, setActiveSection] = useState<PageAnchor>("home");
  const getHashFromURL = (): PageAnchor => {
    const hash = window.location.hash.slice(1);
    return (hash as PageAnchor) || "about";
  };

  const navigateToSection = (section: PageAnchor) => {
    setActiveSection(section);
    window.location.hash = section;

    // Optional: Smooth scroll
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const newSection = getHashFromURL();
      setActiveSection(newSection);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  console.log("Active Section:", activeSection);
  return <PageContext.Provider value={{ activeSection, navigateToSection }}>{children}</PageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
};
export default PageProvider;
