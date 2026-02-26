import { UserRound } from "lucide-react";
import { usePageContext } from "./PageProvider";
import { NAVIGATION_ITEMS } from "../constants/navigation.constants";
import { useEffect, useRef } from "react";
import type { PageAnchor } from "../types";

const Sidebar = () => {
  const { activeSection, navigateToSection, setActiveSection } = usePageContext();
  // const [activeSection1, setActiveSection1] = useState("");
  const sectionRatios = useRef<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.current[entry.target.id] = entry.intersectionRatio;
        });

        // Lấy section có ratio cao nhất
        const dominant = Object.entries(sectionRatios.current).reduce(
          (max, [id, ratio]) => (ratio > max.ratio ? { id, ratio } : max),
          { id: "", ratio: 0 },
        );

        if (dominant.id) setActiveSection(dominant.id as PageAnchor);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed w-14 h-52 top-1/2 left-4 -translate-y-1/2 flex justify-center bg-neutral-50 z-30 rounded-md overflow-hidden shadow-md">
      <ul id="sidebar" className="sidebar-items text-stone-200 flex flex-col w-full">
        {NAVIGATION_ITEMS.filter((item) => item.key !== "home").map((item) => {
          return (
            <a
              href={`#${item.key}`}
              className={`flex flex-1 hover:bg-gray-200 ${activeSection === item.key ? "bg-yellow-300" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                navigateToSection(item.key);
              }}
            >
              <li className="flex flex-1 justify-center items-center text-neutral-900!">
                {item.icon ? <item.icon /> : <UserRound />}
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
