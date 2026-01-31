import { UserRound } from "lucide-react";
import { usePageContext } from "./PageProvider";
import { NAVIGATION_ITEMS } from "../constants/navigation.constants";

const Sidebar = () => {
  const { activeSection, navigateToSection } = usePageContext();
  return (
    <div className="fixed w-14 h-52 top-1/2 left-4 -translate-y-1/2 flex justify-center bg-neutral-50 z-30 rounded-md overflow-hidden shadow-md">
      <ul className="sidebar-items text-stone-200 flex flex-col w-full">
        {NAVIGATION_ITEMS.filter((item) => item.key !== "home").map((item) => {
          return (
            <a
              href={`#${item.key}`}
              className={`flex flex-1 hover:bg-gray-200 ${activeSection === item.key ? "bg-yellow-300" : ""}`}
              onClick={() => navigateToSection(item.key)}
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
