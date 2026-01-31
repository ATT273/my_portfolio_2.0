import { usePageContext } from "./PageProvider";
import { NAVIGATION_ITEMS } from "../constants/navigation.constants";

const Topbar = () => {
  const { activeSection, navigateToSection } = usePageContext();

  return (
    <nav className="top-0 w-full flex justify-end bg-neutral-50 px-4">
      <ul className="topbar-items text-stone-200 flex">
        {NAVIGATION_ITEMS.map((item) => {
          return (
            <a
              href={`#${item.key}`}
              className={`flex flex-1 whitespace-nowrap p-2 text-neutral-900! hover:bg-gray-200 ${
                activeSection === item.key ? "bg-yellow-300" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                navigateToSection(item.key);
              }}
            >
              <li className="flex flex-1 justify-center items-center">{item.label}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default Topbar;
